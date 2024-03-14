if (typeof(SYNC)=="undefined")
{
	SYNC={};
}

SYNC.Globals=
{
	validateOnlyNumber:function(value) 
	{
		var regex = /^[0-9]*(?:\.\d{1,2})?$/;    // allow only numbers [0-9] 
		if( !regex.test(value) ) {
			alert('×ž×¡×¤×¨ ×œ× ×—×•×§×™');
		}
	},
	showForm:function(ReqFormName) 
	{
		//check if the current form is form need to be displayed based on the value
		if (Xrm.Page.ui.formSelector.getCurrentItem().getLabel() != ReqFormName) 
		{
			var items = Xrm.Page.ui.formSelector.items.get();
			for (var i in items) 
			{
				var item = items[i];
				var itemId = item.getId();
				var itemLabel = item.getLabel()

				if (itemLabel == ReqFormName) 
				{
					//navigate to the form
					item.navigate();
				} //endif
			} //end for
		}
	},
	ShowFields:function(fieldsList,Show)
	{
		for(var i in fieldsList)
			Xrm.Page.getControl(fieldsList[i]).setVisible(Show);
	},
	DisplaySection:function(tabName,secName,Show)
	{
		Xrm.Page.ui.tabs.get(tabName).sections.get(secName) ? Xrm.Page.ui.tabs.get(tabName).sections.get(secName).setVisible(Show) : null
	},
	DisplayTab:function(tabId,Show)
	{
		var tab=Xrm.Page.ui.tabs.get(tabId);
		if (tab!=null)
			tab.setVisible(show);
	},
	DisableFields:function(fieldsList,disable)
	{
		for(var i in fieldsList)			
			Xrm.Page.getControl(fieldsList[i]).setDisabled(disable);
	}
	,
	ShowPickListOption2:function(pickListName ,fieldsList)
	{
		var pickListField = Xrm.Page.getControl(pickListName);
		
		var options = pickListField.getAttribute("pickListName").getOptions();
		if(options != null)
		{
			for (var i=0; i< options.length; i++) 
			{				
				var optionText=options[i].text ;
				var optionValue=options[i].value ;
				var found = $.inArray(optionText, fieldsList) > -1;
				
				if( !found && optionValue != null)
				{
					Xrm.Page.getControl(pickListName).removeOption(optionValue);					
				}						
			}    
		}
	}
	,	
	currentYearValidation:function(fieldShemaName , fieldName)
	{	
		var fieldValue  = Xrm.Page.getAttribute(fieldShemaName).getValue();
		if(fieldValue != null)
		{	
			var year = fieldValue.getFullYear();
			var today2 = new Date();
			var todayYear = today2.getFullYear();
				
			var month2,day2,year2 ;
			year2=today2.getFullYear();
			month2=today2.getMonth();
			day2=today2.getDate();
						
			var backdate1 = null;
			if((month2-12)<=0)
			{
				year2 = today2.getFullYear()-1 ;
				backdate1 = new Date(year2,month2,day2) ;
			}
			else
			{
				backdate1 = new Date(year2,month2 - 12 ,day2) ;
			}			
			
			if(fieldValue < backdate1)
			{
				//Xrm.Page.getAttribute(fieldShemaName).setValue(null);			
				var msg= fieldName + " - ×”×ª××¨×™×š ×—×™×™×‘ ×œ×”×™×•×ª ×ž×”×©× ×” ×”××—×¨×•× ×” ";
				alert(msg);	
					return false ;
			}
			else
				return true;
		}
	}
	,	
	currentDateValidation:function(fieldShemaName , fieldName)
	{	
		var fieldValue  = Xrm.Page.getAttribute(fieldShemaName).getValue();
		if(fieldValue != null)
		{			
			var today = new Date();		
			if(fieldValue > new Date())
			{
				return true;
			}
			else 
			{
				//Xrm.Page.getAttribute(fieldShemaName).setValue(null);
				var msg=  " ×—×™×™×‘ ×œ×”×™×•×ª ×‘×ª×•×§×£ (×’×“×•×œ ×ž×”×™×•×) " + fieldName ;
				alert(msg);	
				return false;			
			}
		}
	}
	,	
	currentYearValidationNoMsg:function(fieldShemaName , fieldName)
	{	
	
		var fieldValue  = Xrm.Page.getAttribute(fieldShemaName).getValue();
		if(fieldValue != null)
		{	
			var year = fieldValue.getFullYear();
			var today1 = new Date();
			//var todayYear = today.getFullYear();
				
			var monthToday,dayToday,yearToday;
			yearToday = today1.getUTCFullYear();
			monthToday = today1.getUTCMonth();
			dayToday = today1.getUTCDate();
			var backdate = null;
			if((monthToday-12)<=0)
			{
				yearToday = today1.getFullYear()-1 ;
				backdate = new Date(yearToday,monthToday,dayToday) ;
			}
			else
			{
				backdate = new Date(yearToday,monthToday - 12,dayToday) ;
			}				
			
			//if(year != todayYear)
			if(fieldValue < backdate)
			{			
				//Xrm.Page.getAttribute(fieldShemaName).setValue(null);							
					return false
			}
			else
				return true;
		}
	}
	,	
	selectedDateMoreThanXDaysValidation:function(fieldShemaName , fieldName , x)// x- numbers of days. x can be negative
	{	
		var today = new Date();
		 var fieldValue  = Xrm.Page.getAttribute(fieldShemaName).getValue();
		 if(fieldValue != null)
		 {	
			var dateAfterChgange = SYNC.Globals.DateAdd(today ,'d',x);
			
			if(fieldValue > dateAfterChgange)
			 {
				 return true;
			 }
			else 
			 {
				 //Xrm.Page.getAttribute(fieldShemaName).setValue(null);	
				var	xStr = x.toString();
				if(x < 0)				
				{
					if (xStr.substring(0, 1) == '-') 
					{ 
					  xStr = xStr.substring(1);
					}
				}				
				 var msg= SYNC.Globals.StringFormat("×ª××¨×™×š '~' ××ž×•×¨ ×œ×”×™×•×ª ×™×•×ª×¨ ×’×“×œ  ×ž'~' ×™×ž×™×", [fieldName,xStr]);	
				// // var msg="test";				
				  alert(msg);	
				 return false;			
			 }
		}
	}
	,
	StringFormat :function(str, args)
	{
		var t = str.split('~');
		var sb = [t[0]];
		for(var i = 0; i < args.length; i++){
			sb.push(args[i]);
			sb.push(t[i+1]);
		}
		return sb.join("");
	}
	,
	 DateAdd:function(date, type, amount)
	 {	 
		var y = date.getFullYear(),
			m = date.getMonth(),
			d = date.getDate();
		if(type === 'y'){
			y += amount;
		};
		if(type === 'm'){
			m += amount;
		};
		if(type === 'd'){
			d += amount;
		};
		return new Date(y, m, d);
	}
	,
	ValidateCharacters : function() 
	{ 		
		//  get key code 
		var key = event.keyCode; 
		//  only allow 0 through 9, parentheses (), dash -, period . and space 
		if(!(((key >= 48) && (key <= 57)) || key == 45 || key == 46 || key == 32 || key == 40 || key == 41)) 
		{ 
			event.returnValue = false; 
			return false; 
		} 
	}
,
	checkDuplicateByField:function(fieldValue,fieldName,IdFieldName)
	{
		
		var xml='<fetch version="1.0" distinct="true" >'
					+'    <entity name="' + Xrm.Page.data.entity.getEntityName() +'" >'

					+'        <filter type="and" >'
					+'            <condition attribute="' + fieldName+ '" operator="eq" value="'+ fieldValue +'" />';
					if (Xrm.Page.ui.getFormType()!=1)
					{
						if (IdFieldName)
							xml+='            <condition attribute="'+IdFieldName+'" operator="ne" value="'+Xrm.Page.data.entity.getId()+'" />'
						else
							xml+='            <condition attribute="'+Xrm.Page.data.entity.getEntityName()+'id" operator="ne" value="'+Xrm.Page.data.entity.getId()+'" />'
					}
					xml+='        </filter>'
					+'    </entity>'
					+'</fetch>';
			
			var data= XrmServiceToolkit.Soap.Fetch(xml,true);
			var results = [];
			return  !(data.length==0);
	}
	, 
	ShowPickListOption:function(pickListName ,fieldsList)
	{
		var pickListField = Xrm.Page.getControl(pickListName);
		
		var options = pickListField.getAttribute("pickListName").getOptions();
		if(options != null)
		{
			for (var i=0; i< options.length; i++) 
			{				
				var optionText=options[i].text ;
				var optionValue=parseInt(options[i].value) ;
				var found = $.inArray(optionValue, fieldsList) > -1;
				
				if( !found && optionValue != null)
				{
					Xrm.Page.getControl(pickListName).removeOption(optionValue);
				
				}						
			}    
		}
	}
}