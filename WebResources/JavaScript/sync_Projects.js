if (typeof (SYNC) == "undefined") {
    SYNC = {};
}
var REGULATION_MedicalEquipment = 709250000;
var REGULATION_Perfumery = 709250001;
var REGULATION_MinistryOfDefence = 709250002;
var REGULATION_ContractorsRegistrar = 709250003;
//var arrayDDl = null;
SYNC.Projects =
 {
     // Onload_Contractors:function()
     // {	
     // Xrm.Page.getAttribute("sync_consttype").addOnChange(SYNC.Projects.sync_consttypeChanged);
     // SYNC.Projects.sync_consttypeChanged();
     // Xrm.Page.getAttribute("sync_appforbookmngm").addOnChange(SYNC.Projects.sync_appforbookmngmChanged);
     // Xrm.Page.getAttribute("sync_contractornumber").addOnChange(SYNC.Projects.sync_contractornumberChanged);
     // },

     sync_appforbookmngmChanged: function () {
         SYNC.Globals.currentDateValidation("sync_appforbookmngm", "××™×©×•×¨ ×¢×œ × ×™×”×•×œ ×¡×¤×¨×™× - × ××ž×Ÿ ×œ×ž×§×•×¨");
     }
	,
     // sync_consttypeChanged:function()
     // {		
     // if (Xrm.Page.getAttribute("sync_consttype").getValue()!= REGULATION_MedicalEquipment)
     // {
     // SYNC.Globals.DisplaySection("tab_2","tab_2_section_2",true);
     // SYNC.Globals.ShowFields(new Array("sync_companyrules","sync_famelydec","sync_famelydec","sync_infopaper","sync_imployersign"),true);
     // SYNC.Globals.ShowFields(new Array("sync_idfto","sync_singledec","sync_nocrimdec","sync_106forms"),false);

     // if (Xrm.Page.getAttribute("sync_consttype").getValue()==REGULATION_MinistryOfDefence)
     // Xrm.Page.getControl("sync_accountimploypermit").setVisible(false);
     // else
     // Xrm.Page.getControl("sync_accountimploypermit").setVisible(false);
     // }
     // else
     // {
     // SYNC.Globals.DisplaySection("tab_2","tab_2_section_2",false);
     // SYNC.Globals.ShowFields(new Array("sync_companyrules","sync_famelydec","sync_famelydec","sync_infopaper"
     // ,"sync_imployersign","sync_accountimploypermit"),false);
     // SYNC.Globals.ShowFields(new Array("sync_idfto","sync_singledec","sync_nocrimdec","sync_106forms"),true);
     // }
     // },
     setFormType: function () {
debugger;
         //if the form is create form
         if (Xrm.Page.ui.getFormType() == 1)
             SYNC.Globals.showForm("×ž×™×“×¢");

         else if (Xrm.Page.getAttribute("sync_projecttype").getValue() == REGULATION_MedicalEquipment)
             SYNC.Globals.showForm("×¤×¨×•×™×§×˜ ××™×›×•×ª");
         else {
             var tmp = Xrm.Page.getAttribute("sync_regprojecttype");
             if (tmp == null)
                 SYNC.Globals.showForm("×ž×™×“×¢");
             else {
                 switch (tmp.getValue()) {
                     case REGULATION_MedicalEquipment:
                         SYNC.Globals.showForm("×¨×’×•×œ×¦×™×” - ×¦×™×•×“ ×¨×¤×•××™");
                         break;
                     case REGULATION_Perfumery:
                         SYNC.Globals.showForm("×¨×’×•×œ×¦×™×” - ×ª×ž×¨×•×§×™×");

                         break;
                     case REGULATION_MinistryOfDefence:
                         SYNC.Globals.showForm("×¨×’×•×œ×¦×™×” - ×ž×©×¨×“ ×”×‘×™×˜×—×•×Ÿ");
                         break;
                     case REGULATION_ContractorsRegistrar:
                         SYNC.Globals.showForm("×¨×’×•×œ×¦×™×” - ×¨×©× ×”×§×‘×œ× ×™×");
                         break;
                     default:
                         SYNC.Globals.showForm("×ž×™×“×¢");
                 }
             }
         }
     },
     sync_permitlicenseagraChanged: function () {
         if (Xrm.Page.getAttribute("sync_permitlicenseagra").getValue() != null && Xrm.Page.getAttribute("sync_permitlicenseagra").getValue() != '') {
             if (SYNC.Globals.checkDuplicateByField(Xrm.Page.getAttribute("sync_permitlicenseagra").getValue(), "sync_permitlicenseagra")) {
                 alert("×›×¤×•×œ");
                 Xrm.Page.getControl("sync_permitlicenseagra").setFocus();
             }
         }
     }
	,
     sync_agraforgvanimChanged: function () {
         if (Xrm.Page.getAttribute("sync_agraforgvanim").getValue() != null && Xrm.Page.getAttribute("sync_agraforgvanim").getValue() != '') {
             if (SYNC.Globals.checkDuplicateByField(Xrm.Page.getAttribute("sync_agraforgvanim").getValue(), "sync_agraforgvanim")) {
                 alert("×›×¤×•×œ");
                 Xrm.Page.getControl("sync_agraforgvanim").setFocus();
             }
         }
     }
	,
     sync_extranameagraChanged: function () {
         if (Xrm.Page.getAttribute("sync_extranameagra").getValue() != null && Xrm.Page.getAttribute("sync_extranameagra").getValue() != '') {
             if (SYNC.Globals.checkDuplicateByField(Xrm.Page.getAttribute("sync_extranameagra").getValue(), "sync_extranameagra")) {
                 alert("×›×¤×•×œ");
                 Xrm.Page.getControl("sync_extranameagra").setFocus();
             }
         }
     }
	,
     loadFormPerfume: function () {
         XrmServiceToolkit.Extension.JQueryXrmDependentOptionSet("sync_FormPerfumeDependedPicklist");
         Xrm.Page.getAttribute("sync_permitlicenseagra") ? Xrm.Page.getAttribute("sync_permitlicenseagra").addOnChange(SYNC.Projects.sync_permitlicenseagraChanged) : null;
         SYNC.Globals.DisableFields(new Array("sync_projecttype", "sync_regprojecttype"), true);
         SYNC.Globals.ShowPickListOption("sync_requesttype", new Array(709250000, 709250001, 709250006, 709250007));
         Xrm.Page.getAttribute("sync_agraforgvanim") ? Xrm.Page.getAttribute("sync_agraforgvanim").addOnChange(SYNC.Projects.sync_agraforgvanimChanged) : null;
         Xrm.Page.getAttribute("sync_extranameagra") ? Xrm.Page.getAttribute("sync_extranameagra").addOnChange(SYNC.Projects.sync_extranameagraChanged) : null;


         //Xrm.Page.getAttribute("sync_requesttype") ? //Xrm.Page.getAttribute("sync_requesttype").addOnChange(SYNC.Projects.sync_requesttypePerfumeChanged) : null;
         Xrm.Page.getAttribute("sync_gmp") ? Xrm.Page.getAttribute("sync_gmp").addOnChange(SYNC.Projects.sync_gmpChanged) : null;
         Xrm.Page.getAttribute("sync_final_sale_date") ? Xrm.Page.getAttribute("sync_final_sale_date").addOnChange(SYNC.Projects.sync_final_sale_dateChanged) : null;
         Xrm.Page.getAttribute("sync_localmanufacturer") ? Xrm.Page.getAttribute("sync_localmanufacturer").addOnChange(SYNC.Projects.sync_localmanufacturerChanged) : null;
         Xrm.Page.getAttribute("sync_sd_moh") ? Xrm.Page.getAttribute("sync_sd_moh").addOnChange(SYNC.Projects.sync_sd_mohChanged) : null;
         Xrm.Page.getAttribute("sync_fsd") ? Xrm.Page.getAttribute("sync_fsd").addOnChange(SYNC.Projects.sync_fsdChanged) : null;
         Xrm.Page.getAttribute("sync_sfd") ? Xrm.Page.getAttribute("sync_sfd").addOnChange(SYNC.Projects.sync_sfdChanged) : null ;
         Xrm.Page.getAttribute("sync_gld") ? Xrm.Page.getAttribute("sync_gld").addOnChange(SYNC.Projects.sync_gldChanged) : null;
         Xrm.Page.getAttribute("sync_fda") ? Xrm.Page.getAttribute("sync_fda").addOnChange(SYNC.Projects.sync_fdaChanged) : null;
         Xrm.Page.getAttribute("sync_status") ? Xrm.Page.getAttribute("sync_status").addOnChange(SYNC.Projects.sync_statusChanged) : null;
         SYNC.Projects.sync_statusPrev = Xrm.Page.getAttribute("sync_status").getValue();

         if (Xrm.Page.ui.getFormType() != 1) {
             Xrm.Page.getAttribute("sync_gmp") ? Xrm.Page.getAttribute("sync_gmp").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_final_sale_date") ? Xrm.Page.getAttribute("sync_final_sale_date").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_localmanufacturer") ? Xrm.Page.getAttribute("sync_localmanufacturer").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_requesttype") ? Xrm.Page.getAttribute("sync_requesttype").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_sd_moh") ? Xrm.Page.getAttribute("sync_sd_moh").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_fsd") ? Xrm.Page.getAttribute("sync_fsd").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_sfd") ? Xrm.Page.getAttribute("sync_sfd").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_gld") ? Xrm.Page.getAttribute("sync_gld").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_fda") ? Xrm.Page.getAttribute("sync_fda").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_status") ? Xrm.Page.getAttribute("sync_status").fireOnChange() : null;

         }
     }
	,

     sync_requesttypePerfumeChanged: function () {
         XrmServiceToolkit.Extension.JQueryXrmDependentOptionSet("sync_FormPerfumeDependedPicklist");
         if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250000) //1.	×—×“×©
         {
            Xrm.Page.getAttribute("sync_lastvalidpermit") ? Xrm.Page.getControl("sync_lastvalidpermit").setVisible(false) : null;
             // //SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250010","709250020","709250030" , "709250040" , "709250050" , "709250070" , "709250080" , "709250090" , "709250130" , "709250140" , "709250150" , "709250160"));	
         }
         if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250001) //2.	×—×™×“×•×©
         {
            Xrm.Page.getAttribute("sync_lastvalidpermit") ? Xrm.Page.getControl("sync_lastvalidpermit").setVisible(true) : null;
             //SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250010","709250020","709250030" , "709250040" , "709250050" , "709250070" , "709250080" , "709250090" , "709250130" , "709250140" , "709250150" , "709250160"));	

         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250002) //3.	×©×™× ×•×™ ×¨×™×©×•×
         {

             // SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250010","709250020","709250030" , "709250040" , "709250050" , "709250070" , "709250080" , "709250090" , "709250130" , "709250140" , "709250150" , "709250160"));	
         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250003) //4.	××™×©×•×¨ ×—×“ ×¤×¢×ž×™
         {
            Xrm.Page.getAttribute("sync_lastvalidpermit") ? Xrm.Page.getControl("sync_lastvalidpermit").setVisible(false) : null;
             // SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250040"	,"709250050"	,"709250070"	,"709250080","709250090","709250130"	,"709250140","709250150","709250160"));
         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250004) //5.	××™×©×•×¨ ×™×‘×•× ×ª×§×•×¤×ª×™
         {
            Xrm.Page.getAttribute("sync_lastvalidpermit") ? Xrm.Page.getControl("sync_lastvalidpermit").setVisible(false) : null;
             // SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250040"	,"709250050"	,"709250070"	,"709250080","709250090","709250130"	,"709250140","709250150","709250160"));
         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250005) //6.	××™×©×•×¨ ×ž×›×™×¨×” ×—×•×¤×©×™
         {
            Xrm.Page.getAttribute("sync_lastvalidpermit") ? Xrm.Page.getControl("sync_lastvalidpermit").setVisible(false) : null;
             // SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250040"	,"709250050"	,"709250070"	,"709250080","709250090","709250130"	,"709250140","709250150","709250160"));
         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250006)//×¨×™×©×™×•×Ÿ ×¢×¡×§
         {
            Xrm.Page.getAttribute("sync_lastvalidpermit") ? Xrm.Page.getControl("sync_lastvalidpermit").setVisible(false) : null;
             // SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250040"	,"709250050"	,"709250070","709250130","709250140","709250150","709250160"));
         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250007)//×¨×™×©×™×•×Ÿ ×ª×ž×¨×•×§×™× ×›×œ×œ×™
         {
             // SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250040"	,"709250050"	,"709250070"	,"709250080","709250090","709250130"	,"709250140","709250150","709250160"));
         }
     }
	,
     CheckDuplicatesVoucher: function (ExecutionContext) {
         var fieldName = ExecutionContext.getEventSource().getName();
         //alert(fieldName);
         //alert(Name);
     }
	,
     sync_fdaChanged: function () {
         //Xrm.Page.getAttribute("sync_status").setValue(709250001) ;//'709250070'
     }
	,
     loadFormInfo: function () {
debugger;
         // Xrm.Page.getAttribute("sync_projecttype").addOnChange(SYNC.Projects.sync_projecttypeChanged);
         // arrayDDl = Xrm.Page.getAttribute("sync_projecttype").getOptions();
     },
     sync_projecttypeChanged: function () {
          // if(Xrm.Page.getAttribute("sync_projecttype").getValue() == 709250000) //××™×›×•×ª
         // {
         // SYNC.Globals.ShowPickListOption("sync_regprojecttype" , new Array("×”×ª×¢×“×”","×ž×¢×§×‘","×œ×™×•×•×™ ×©×•×˜×£","×”×›× ×” ×œ×ž×‘×“×§ ×”×ª×¢×“×”","×”×›× ×” ×œ×ž×‘×“×§ ×ž×¢×§×‘","×¤×¢×™×œ×•×ª ×ž×ª×§× ×ª ×œ××—×¨ ×ž×‘×“×§","×™×™×¢×•×¥ ×”×‘×˜×—×ª ××™×›×•×ª"));					
         // }
         // else 
         // if(Xrm.Page.getAttribute("sync_projecttype").getValue() == 709250001) //×¨×’×•×œ×¦×™×”
         // {
         // SYNC.Globals.ShowPickListOption("sync_regprojecttype" , new Array("×¦×™×•×“ ×¨×¤×•××™","×ª×ž×¨×•×§×™×","×ž×©×¨×“ ×”×‘×™×˜×—×•×Ÿ","×¨×©× ×”×§×‘×œ× ×™×"));	
         // }
     }
	,
     sync_localmanufacturerChanged: function () {
         if (Xrm.Page.getAttribute("sync_localmanufacturer").getValue() == false) {
            Xrm.Page.getAttribute("sync_businesslicensevalidity") ? Xrm.Page.getControl("sync_businesslicensevalidity").setVisible(true) : null;
            Xrm.Page.getAttribute("sync_uid") ? Xrm.Page.getControl("sync_uid").setVisible(true) : null;
            Xrm.Page.getAttribute("sync_2samples") ? Xrm.Page.getControl("sync_2samples").setVisible(true) : null;
            Xrm.Page.getAttribute("sync_broudlab") ? Xrm.Page.getControl("sync_broudlab").setVisible(true) : null;
            Xrm.Page.getAttribute("sync_importeranimaldec") ? Xrm.Page.getControl("sync_importeranimaldec").setVisible(true) : null;
            Xrm.Page.getAttribute("sync_hebinstaractions") ? Xrm.Page.getControl("sync_hebinstaractions").setVisible(true) : null;
            Xrm.Page.getAttribute("sync_2samplessecond") ? Xrm.Page.getControl("sync_2samplessecond").setVisible(true) : null;
         }
         else {
            Xrm.Page.getAttribute("sync_businesslicensevalidity") ? Xrm.Page.getControl("sync_businesslicensevalidity").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_uid") ? Xrm.Page.getControl("sync_uid").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_2samples") ? Xrm.Page.getControl("sync_2samples").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_broudlab") ? Xrm.Page.getControl("sync_broudlab").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_importeranimaldec") ? Xrm.Page.getControl("sync_importeranimaldec").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_hebinstaractions") ? Xrm.Page.getControl("sync_hebinstaractions").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_2samplessecond") ? Xrm.Page.getControl("sync_2samplessecond").setVisible(false) : null;
         }
     }
	,
     sync_gmpChanged: function () {
         SYNC.Globals.currentYearValidation("sync_gmp", "GMP");
     }
	,
     sync_final_sale_dateChanged: function () {
         SYNC.Globals.currentYearValidation("sync_final_sale_date", " ××™×©×•×¨ ×ž×›×™×¨×” ×—×•×¤×©×™ ");
     }
	,
     sync_requesttypeChanged: function () {
         if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250000) //1.	×—×“×©
         {
            Xrm.Page.getAttribute("sync_lastvalidpermit") ? Xrm.Page.getControl("sync_lastvalidpermit").setVisible(false) : null;
         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250001) //2.	×—×™×“×•×©
         {
            Xrm.Page.getAttribute("sync_lastvalidpermit") ? Xrm.Page.getControl("sync_lastvalidpermit").setVisible(true) : null;
         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250002) //3.	×©×™× ×•×™ ×¨×™×©×•×
         {
            Xrm.Page.getAttribute("sync_lastvalidpermit") ? Xrm.Page.getControl("sync_lastvalidpermit").setVisible(false) : null;
         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250003) //4.	××™×©×•×¨ ×—×“ ×¤×¢×ž×™
         {
            Xrm.Page.getAttribute("sync_lastvalidpermit") ? Xrm.Page.getControl("sync_lastvalidpermit").setVisible(false) : null;
         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250004) //5.	××™×©×•×¨ ×™×‘×•× ×ª×§×•×¤×ª×™
         {
            Xrm.Page.getAttribute("sync_lastvalidpermit") ? Xrm.Page.getControl("sync_lastvalidpermit").setVisible(false) : null;
         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250005) //6.	××™×©×•×¨ ×ž×›×™×¨×” ×—×•×¤×©×™
         {
            Xrm.Page.getAttribute("sync_lastvalidpermit") ? Xrm.Page.getControl("sync_lastvalidpermit").setVisible(false) : null;
         }
     }
	,
     loadFormMedicalEquipment: function () {
        XrmServiceToolkit.Extension.JQueryXrmDependentOptionSet("sync_FormMedicalEquipmentPicklist");
        
         debugger;
         Xrm.Page.getAttribute("sync_localmanufacturer") ? Xrm.Page.getAttribute("sync_localmanufacturer").addOnChange(SYNC.Projects.sync_localmanufacturerMedicalEquipmentChanged) : null	;
         Xrm.Page.getAttribute("sync_13_license") ? Xrm.Page.getAttribute("sync_13_license").addOnChange(SYNC.Projects.validateSync_13_license) : null;
         XrmServiceToolkit.Extension.JQueryXrmDependentOptionSet("sync_FormMedicalEquipmentCascade");
//         Xrm.Page.getAttribute("sync_licensetype").addOnChange(SYNC.Projects.sync_LicenseTypeChanged);
         Xrm.Page.getAttribute("sync_licensetype") ?  Xrm.Page.getAttribute("sync_licensetype").addOnChange(SYNC.Projects.sync_marketed_differently_from_manufactureChanged) : null;
         Xrm.Page.getAttribute("sync_iso13485_crea") ? Xrm.Page.getAttribute("sync_iso13485_crea").addOnChange(SYNC.Projects.sync_iso13485_creaChanged) : null;
         Xrm.Page.getAttribute("sync_doc") ? Xrm.Page.getAttribute("sync_doc").addOnChange(SYNC.Projects.sync_docChanged) : null;
         Xrm.Page.getAttribute("sync_doc_valid") ? Xrm.Page.getAttribute("sync_doc_valid").addOnChange(SYNC.Projects.sync_doc_validChanged) : null;
         Xrm.Page.getAttribute("sync_iso_s_vend") ? Xrm.Page.getAttribute("sync_iso_s_vend").addOnChange(SYNC.Projects.sync_iso_s_vendChanged) : null;
         Xrm.Page.getAttribute("sync_class") ?  Xrm.Page.getAttribute("sync_class").addOnChange(SYNC.Projects.sync_classChanged) : null;
         Xrm.Page.getAttribute("sync_vc") ?  Xrm.Page.getAttribute("sync_vc").addOnChange(SYNC.Projects.sync_vcChanged) : null;
         Xrm.Page.getAttribute("sync_md") ? Xrm.Page.getAttribute("sync_md").addOnChange(SYNC.Projects.sync_mdChanged) : null;
         Xrm.Page.getAttribute("sync_ccs") ? Xrm.Page.getAttribute("sync_ccs").addOnChange(SYNC.Projects.sync_ccsChanged) : null;
         Xrm.Page.getAttribute("sync_regprojecttype") ?  Xrm.Page.getAttribute("sync_regprojecttype").addOnChange(SYNC.Projects.sync_regprojecttypeChanged) : null;
	     Xrm.Page.getAttribute("sync_13_b") ?  Xrm.Page.getAttribute("sync_13_b").addOnChange(SYNC.Projects.sync_13_bChanged) : null;
         Xrm.Page.getAttribute("sync_13_b_valid") ? Xrm.Page.getAttribute("sync_13_b_valid").addOnChange(SYNC.Projects.sync_13_b_validChanged) : null;
         Xrm.Page.getAttribute("sync_iso9001_lc") ? Xrm.Page.getAttribute("sync_iso9001_lc").addOnChange(SYNC.Projects.sync_iso9001_lcChanged) : null;
         Xrm.Page.getAttribute("sync_importerd") ? Xrm.Page.getAttribute("sync_importerd").addOnChange(SYNC.Projects.sync_importerdChanged) : null;
        // Xrm.Page.getAttribute("sync_requesttype") ? Xrm.Page.getAttribute("sync_requesttype").addOnChange(SYNC.Projects.sync_requesttypeMedChanged) : null;
         Xrm.Page.getAttribute("sync_usertype") ? Xrm.Page.getAttribute("sync_usertype").addOnChange(SYNC.Projects.sync_usertypeChanged) : null;
         $("#sync_fee").keypress(SYNC.Globals.ValidateCharacters);
         Xrm.Page.getAttribute("sync_sd_moh") ? Xrm.Page.getAttribute("sync_sd_moh").addOnChange(SYNC.Projects.sync_sd_mohChanged) : null;
         Xrm.Page.getAttribute("sync_fsd") ? Xrm.Page.getAttribute("sync_fsd").addOnChange(SYNC.Projects.sync_fsdChanged) : null;
         Xrm.Page.getAttribute("sync_sfd") ? Xrm.Page.getAttribute("sync_sfd").addOnChange(SYNC.Projects.sync_sfdChanged) : null;
         Xrm.Page.getAttribute("sync_gld") ?  Xrm.Page.getAttribute("sync_gld").addOnChange(SYNC.Projects.sync_gldChanged): null;
         Xrm.Page.getAttribute("sync_iso13485_site") ? Xrm.Page.getAttribute("sync_iso13485_site").addOnChange(SYNC.Projects.sync_iso13485_siteChanged) : null;
//		 Xrm.Page.getAttribute("sync_requesttype").addOnChange(SYNC.Projects.sync_requesttypeMedicalChanged);		
         SYNC.Globals.ShowPickListOption("sync_requesttype", new Array(709250000, 709250001, 709250002, 709250003, 709250004, 709250005, 709250006, 709250015, 709250016,709250017,709250018));
         Xrm.Page.getAttribute("sync_status") ? Xrm.Page.getAttribute("sync_status").addOnChange(SYNC.Projects.sync_statusChanged) : null;
         SYNC.Projects.sync_statusPrev = Xrm.Page.getAttribute("sync_status").getValue();  		  		





            //Commented Existing Code 
//          XrmServiceToolkit.Extension.JQueryXrmDependentptionSet("sync_FormMedicalEquipmentPicklist");

//          Xrm.Page.getAttribute("sync_localmanufacturer").addOnChange(SYNC.Projects.sync_localmanufacturerMedicalEquipmentChanged);
//          Xrm.Page.getAttribute("sync_13_license").addOnChange(SYNC.Projects.validateSync_13_license);
//          XrmServiceToolkit.Extension.JQueryXrmDependentOptionSet("sync_FormMe-dicalEquipmentCascade");
// //         Xrm.Page.getAttribute("sync_licensetype").addOnChange(SYNC.Projects.sync_LicenseTypeChanged);
//          Xrm.Page.getAttribute("sync_licensetype").addOnChange(SYNC.Projects.sync_marketed_differently_from_manufactureChanged);
//          Xrm.Page.getAttribute("sync_iso13485_crea").addOnChange(SYNC.Projects.sync_iso13485_creaChanged);
//          Xrm.Page.getAttribute("sync_doc").addOnChange(SYNC.Projects.sync_docChanged);
//          Xrm.Page.getAttribute("sync_doc_valid").addOnChange(SYNC.Projects.sync_doc_validChanged);
//          Xrm.Page.getAttribute("sync_iso_s_vend").addOnChange(SYNC.Projects.sync_iso_s_vendChanged);
//          Xrm.Page.getAttribute("sync_class").addOnChange(SYNC.Projects.sync_classChanged);
//          Xrm.Page.getAttribute("sync_vc").addOnChange(SYNC.Projects.sync_vcChanged);
//          Xrm.Page.getAttribute("sync_md").addOnChange(SYNC.Projects.sync_mdChanged);
//         //  Xrm.Page.getAttribute("sync_ccs") ? Xrm.Page.getAttribute("sync_ccs") : null
//          Xrm.Page.getAttribute("sync_ccs").addOnChange(SYNC.Projects.sync_ccsChanged);
//          Xrm.Page.getAttribute("sync_regprojecttype").addOnChange(SYNC.Projects.sync_regprojecttypeChanged);
//          Xrm.Page.getAttribute("sync_13_b").addOnChange(SYNC.Projects.sync_13_bChanged);
//          Xrm.Page.getAttribute("sync_13_b_valid").addOnChange(SYNC.Projects.sync_13_b_validChanged);
//          Xrm.Page.getAttribute("sync_iso9001_lc").addOnChange(SYNC.Projects.sync_iso9001_lcChanged);
//          Xrm.Page.getAttribute("sync_importerd").addOnChange(SYNC.Projects.sync_importerdChanged);
//          Xrm.Page.getAttribute("sync_requesttype").addOnChange(SYNC.Projects.sync_requesttypeMedChanged);
//          Xrm.Page.getAttribute("sync_usertype").addOnChange(SYNC.Projects.sync_usertypeChanged);
//          $("#sync_fee").keypress(SYNC.Globals.ValidateCharacters);
//          Xrm.Page.getAttribute("sync_sd_moh").addOnChange(SYNC.Projects.sync_sd_mohChanged);
//          Xrm.Page.getAttribute("sync_fsd").addOnChange(SYNC.Projects.sync_fsdChanged);
//          Xrm.Page.getAttribute("sync_sfd").addOnChange(SYNC.Projects.sync_sfdChanged);
//          Xrm.Page.getAttribute("sync_gld").addOnChange(SYNC.Projects.sync_gldChanged);
//          Xrm.Page.getAttribute("sync_iso13485_site").addOnChange(SYNC.Projects.sync_iso13485_siteChanged);
//          //Xrm.Page.getAttribute("sync_requesttype").addOnChange(SYNC.Projects.sync_requesttypeMedicalChanged);		
//          SYNC.Globals.ShowPickListOption("sync_requesttype", new Array("709250000", "709250001", "709250002", "709250003", "709250004", "709250005", "709250006", "709250015", "709250016","709250017","709250018"));
//          Xrm.Page.getAttribute("sync_status").addOnChange(SYNC.Projects.sync_statusChanged);
//          SYNC.Projects.sync_statusPrev = Xrm.Page.getAttribute("sync_status").getValue();


         if (Xrm.Page.ui.getFormType() != 1) {

             Xrm.Page.getAttribute("sync_localmanufacturer") ? Xrm.Page.getAttribute("sync_localmanufacturer").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_13_license") ? Xrm.Page.getAttribute("sync_13_license").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_iso13485_crea") ? Xrm.Page.getAttribute("sync_iso13485_crea").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_doc") ? Xrm.Page.getAttribute("sync_doc").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_doc_valid") ? Xrm.Page.getAttribute("sync_doc_valid").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_iso13485_site") ? Xrm.Page.getAttribute("sync_iso13485_site").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_iso_s_vend") ? Xrm.Page.getAttribute("sync_iso_s_vend").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_vc") ? Xrm.Page.getAttribute("sync_vc").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_md") ? Xrm.Page.getAttribute("sync_md").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_ccs") ? Xrm.Page.getAttribute("sync_ccs").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_regprojecttype") ? Xrm.Page.getAttribute("sync_regprojecttype").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_13_b") ? Xrm.Page.getAttribute("sync_13_b").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_13_b_valid") ? Xrm.Page.getAttribute("sync_13_b_valid").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_iso9001_lc") ? Xrm.Page.getAttribute("sync_iso9001_lc").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_importerd") ? Xrm.Page.getAttribute("sync_importerd").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_requesttype") ? Xrm.Page.getAttribute("sync_requesttype").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_usertype") ? Xrm.Page.getAttribute("sync_usertype").fireOnChange() : null;
             //Xrm.Page.getAttribute("sync_sd_moh").fireOnChange();
             Xrm.Page.getAttribute("sync_fsd") ? Xrm.Page.getAttribute("sync_fsd").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_sfd") ? Xrm.Page.getAttribute("sync_sfd").fireOnChange() : null;
             Xrm.Page.getAttribute("sync_gld") ? Xrm.Page.getAttribute("sync_gld").fireOnChange() : null;
              Xrm.Page.getAttribute("sync_status") ? Xrm.Page.getAttribute("sync_status").fireOnChange() : null;

            //  Xrm.Page.getAttribute("sync_localmanufacturer").fireOnChange();
            //  Xrm.Page.getAttribute("sync_13_license").fireOnChange();
            //  Xrm.Page.getAttribute("sync_iso13485_crea").fireOnChange();
            //  Xrm.Page.getAttribute("sync_doc").fireOnChange();
            //  Xrm.Page.getAttribute("sync_doc_valid").fireOnChange();
            //  Xrm.Page.getAttribute("sync_iso13485_site").fireOnChange();
            //  Xrm.Page.getAttribute("sync_iso_s_vend").fireOnChange();
            //  Xrm.Page.getAttribute("sync_vc").fireOnChange();;
            //  Xrm.Page.getAttribute("sync_md").fireOnChange();
            //  Xrm.Page.getAttribute("sync_ccs").fireOnChange();
            //  Xrm.Page.getAttribute("sync_regprojecttype").fireOnChange();
            //  Xrm.Page.getAttribute("sync_13_b").fireOnChange();
            //  Xrm.Page.getAttribute("sync_13_b_valid").fireOnChange();
            //  Xrm.Page.getAttribute("sync_iso9001_lc").fireOnChange();
            //  Xrm.Page.getAttribute("sync_importerd").fireOnChange();
            //  Xrm.Page.getAttribute("sync_requesttype").fireOnChange();
            //  Xrm.Page.getAttribute("sync_usertype").fireOnChange();
            //  //Xrm.Page.getAttribute("sync_sd_moh").fireOnChange();
            //  Xrm.Page.getAttribute("sync_fsd").fireOnChange();
            //  Xrm.Page.getAttribute("sync_sfd").fireOnChange();
            //  Xrm.Page.getAttribute("sync_gld").fireOnChange();
            //  Xrm.Page.getAttribute("sync_status").fireOnChange();

         }
     }

     /*sync_requesttypeMedicalChanged: function()
     {
         if(Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250000   )//×—×“×©		
         {
             SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250010","709250020","709250030" , "709250040" , "709250050" , "709250070" , "709250080" , "709250090" , "709250130" , "709250140" , "709250150" , "709250160"));	
         }	
         else if( Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250001)//×—×™×“×•×©
         {
             SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250010","709250020","709250030" , "709250040" , "709250050" , "709250070" , "709250080" , "709250090" , "709250130" , "709250140" , "709250150" , "709250160"));	
         }	
         else if( Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250002)//×©×™× ×•×™ ×¨×™×©×•×
         {
             SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250010","709250020","709250030" , "709250040" , "709250050" , "709250070" , "709250080" , "709250090" , "709250130" , "709250140" , "709250150" , "709250160"));	
         }	
         
         else if( Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250003)//××™×©×•×¨ ×—×“ ×¤×¢×ž×™
         {
             SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250040","709250050","709250070","709250130",	"709250140",	"709250150",	"709250160"));
         }	
         else if( Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250004)//××™×©×•×¨ ×ž×›×™×¨×” ×—×•×¤×©×™
         {
             SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250040","709250050","709250070","709250130",	"709250140",	"709250150",	"709250160"));
         }	
         else if( Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250005)//××™×©×•×¨ ×ž×›×™×¨×” ×—×•×¤×©×™
         {
             SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250040","709250050","709250070","709250130",	"709250140",	"709250150",	"709250160"));
         }	
         else if( Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250006)//×¨×™×©×™×•×Ÿ ×¢×¡×§
         {
             SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250040" ,"709250050","709250070","709250080","709250090","709250130","709250140","709250150","709250160"));
         }				
     }	*/
	,
     sync_iso13485_siteChanged: function () {
         SYNC.Globals.currentDateValidation("sync_iso13485_site", " ×ª×•×§×£ ISO 13485 ×™×¦×¨×Ÿ ");
     }
	,
     sync_iso13485_creaChanged: function () {
         SYNC.Globals.currentDateValidation("sync_iso13485_crea", " ×ª×•×§×£ ISO 13485 ××ª×¨ ");
     }
	, sync_localmanufacturerMedicalEquipmentChanged: function () {
	    var localmanufacturerVal = Xrm.Page.getAttribute("sync_localmanufacturer").getValue();
	    if (localmanufacturerVal == false) {
	        Xrm.Page.getAttribute("sync_13_license") ? Xrm.Page.getControl("sync_13_license").setVisible(false) : null;
	        Xrm.Page.getAttribute("sync_rm") ? Xrm.Page.getControl("sync_rm").setVisible(false) : null;
	        Xrm.Page.getAttribute("sync_cex") ? Xrm.Page.getControl("sync_cex").setVisible(false) : null;
	        Xrm.Page.getAttribute("sync_classapp") ? Xrm.Page.getControl("sync_classapp").setVisible(false) : null;
	    }
	    else {
	        Xrm.Page.getAttribute("sync_13_license") ? Xrm.Page.getControl("sync_13_license").setVisible(true) : null;
	        Xrm.Page.getAttribute("sync_rm") ? Xrm.Page.getControl("sync_rm").setVisible(true) : null;
	        Xrm.Page.getAttribute("sync_cex") ? Xrm.Page.getControl("sync_cex").setVisible(true) : null;
	        Xrm.Page.getAttribute("sync_classapp") ? Xrm.Page.getControl("sync_classapp").setVisible(true) : null;
	    }
	}
	,
     validateSync_13_license: function () {
         var sync_13_licenseValue = Xrm.Page.getAttribute("sync_13_license").getValue();
         if (sync_13_licenseValue != null) {
             if (sync_13_licenseValue > new Date()) {
                 return true;
             }
             else {
                 Xrm.Page.getAttribute("sync_13_license").setValue(null);
                 alert("×¨×™×©×™×•×Ÿ ×¢×¡×§ ×œ×™×¦×•×¨ ×œ×¤×™ ×¡×¢×™×£ 1.3× ×—×™×™×‘ ×œ×”×™×•×ª ×œ×”×™×•×ª ×‘×ª×•×§×£");
                 return false;
             }
         }
     }
	 ,
     sync_LicenseTypeChanged: function () {
         XrmServiceToolkit.Extension.JQueryXrmDependentOptionSet("sync_FormMedicalEquipmentCascade");
         if (Xrm.Page.getAttribute("sync_licensetype").getValue() == 709250001) {
             //SYNC.Globals.ShowPickListOption("sync_class" , new Array("709250001","709250002","709250003"));	
             SYNC.Globals.ShowFields(new Array("sync_ce_valid"), false);
             SYNC.Globals.ShowFields(new Array("sync_doc"), false);
         }
         else if (Xrm.Page.getAttribute("sync_licensetype").getValue() == 709250002) {
             //SYNC.Globals.ShowPickListOption("Sync_class" , new Array("709250001","709250002","709250003"));	
             SYNC.Globals.ShowFields(new Array("sync_ce_valid"), true);
             SYNC.Globals.ShowFields(new Array("sync_doc"), false);
         }
         else
             if (Xrm.Page.getAttribute("sync_licensetype").getValue() == 709250000) //CE
             {
                 //SYNC.Globals.ShowPickListOption("sync_class" , new Array("709250006","709250007","709250008","709250009","709250010","709250011","709250012","709250013" ,"709250014"));
                 SYNC.Globals.ShowFields(new Array("sync_ce_valid"), true);
                 SYNC.Globals.ShowFields(new Array("sync_doc"), true);
                 //SYNC.Globals.currentYearValidation("sync_final_sale_date", "709250005");
                 SYNC.Globals.ShowFields(new Array("sync_doc_valid"), true);
             }
             else if (Xrm.Page.getAttribute("sync_licensetype").getValue() == 709250004) //TGA
             {
                 //SYNC.Globals.ShowPickListOption("sync_class" , new Array("709250006","709250007","709250008","709250009","709250010","709250011","709250012","709250013" ,"709250014"));
                 SYNC.Globals.ShowFields(new Array("sync_ce_valid"), false);
                 SYNC.Globals.ShowFields(new Array("sync_doc"), true);
                 SYNC.Globals.ShowFields(new Array("sync_doc_valid"), true);
             }
     }
	 , sync_docChanged: function () {
	     //if(!SYNC.Globals.currentYearValidationNoMsg("sync_doc", "DOC"))
	     //{
	     return SYNC.Globals.currentYearValidation("sync_doc", " DOC ");
	     //}
	 }
	 ,
     sync_doc_validChanged: function () {
         //if(!SYNC.Globals.currentYearValidationNoMsg("sync_doc_valid", "×”×¦×”×¨×” ×¢×œ ×ª×•×§×£ DOC"))
         //{
         return SYNC.Globals.currentYearValidation("sync_doc_valid", "×”×¦×”×¨×” ×¢×œ ×ª×•×§×£ DOC")
         //}
     }
	 ,
     /*sync_iso13485_siteChanged:function()
	 {	
		 SYNC.Globals.currentDateValidation("sync_iso13485_site" , "×ª×•×§×£ ISO 13485 ××ª×¨ ×™×™×¦×•×¨");
	 }
	 ,*/
     sync_iso_s_vendChanged: function () {
         SYNC.Globals.currentDateValidation("sync_iso_s_vend", " ×ª×•×§×£ ISO ×¡×¤×§ ×ž×©× ×” ");
     }
	 , sync_classChanged: function () {
	     if (Xrm.Page.getAttribute("sync_class").getValue() == 709250001)//I
	     {
	        Xrm.Page.getAttribute("sync_rm") ? Xrm.Page.getControl("sync_rm").setVisible(false) : null;
	        Xrm.Page.getAttribute("sync_cex") ? Xrm.Page.getControl("sync_cex").setVisible(false) : null;
	     }
	     else if (Xrm.Page.getAttribute("sync_class").getValue() == 709250002)//II
	     {
	        Xrm.Page.getAttribute("sync_rm") ? Xrm.Page.getControl("sync_rm").setVisible(true) : null;
	        Xrm.Page.getAttribute("sync_cex") ? Xrm.Page.getControl("sync_cex").setVisible(true) : null;
	        Xrm.Page.getAttribute("sync_classapp") ? Xrm.Page.getControl("sync_classapp").setVisible(true) : null;
	     }
	     else if (Xrm.Page.getAttribute("sync_class").getValue() == 709250003)//III
	     {
	        Xrm.Page.getAttribute("sync_rm") ? Xrm.Page.getControl("sync_rm").setVisible(true) : null;
	        Xrm.Page.getAttribute("sync_cex") ? Xrm.Page.getControl("sync_cex").setVisible(true) : null;
	        Xrm.Page.getAttribute("sync_classapp") ? Xrm.Page.getControl("sync_classapp").setVisible(true) : null;
	     }
	     else if (Xrm.Page.getAttribute("sync_class").getValue() == 709250006)//lm
	     {
            Xrm.Page.getAttribute("sync_rm") ? Xrm.Page.getControl("sync_rm").setVisible(false) : null;
	        Xrm.Page.getAttribute("sync_cex") ? Xrm.Page.getControl("sync_cex").setVisible(false) : null;
	     }
	     else if (Xrm.Page.getAttribute("sync_class").getValue() == 709250007)//ls
	     {
	        Xrm.Page.getAttribute("sync_rm") ? Xrm.Page.getControl("sync_rm").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_cex") ? Xrm.Page.getControl("sync_cex").setVisible(false) : null;
	     }
	     else if (Xrm.Page.getAttribute("sync_class").getValue() == 709250008)//lla
	     {
	        Xrm.Page.getAttribute("sync_rm") ? Xrm.Page.getControl("sync_rm").setVisible(false) : null;
	        Xrm.Page.getAttribute("sync_cex") ? Xrm.Page.getControl("sync_cex").setVisible(false) : null;
	     }
	     else if (Xrm.Page.getAttribute("sync_class").getValue() == 709250009)//llb
	     {
	        Xrm.Page.getAttribute("sync_rm") ? Xrm.Page.getControl("sync_rm").setVisible(true) : null;
	        Xrm.Page.getAttribute("sync_cex") ? Xrm.Page.getControl("sync_cex").setVisible(true) : null; 
	        Xrm.Page.getAttribute("sync_classapp") ? Xrm.Page.getControl("sync_classapp").setVisible(true) : null;
	     }
	     else if (Xrm.Page.getAttribute("sync_class").getValue() == 709250010)//lll
	     {
	        Xrm.Page.getAttribute("sync_rm") ? Xrm.Page.getControl("sync_rm").setVisible(false) : null;
	        Xrm.Page.getAttribute("sync_cex") ? Xrm.Page.getControl("sync_cex").setVisible(false) : null;
	     }
	     else if (Xrm.Page.getAttribute("sync_class").getValue() == 709250011)//list A
	     {
	        Xrm.Page.getAttribute("sync_rm") ? Xrm.Page.getControl("sync_rm").setVisible(true) : null;
	        Xrm.Page.getAttribute("sync_cex") ? Xrm.Page.getControl("sync_cex").setVisible(true) : null;
	        Xrm.Page.getAttribute("sync_classapp") ? Xrm.Page.getControl("sync_classapp").setVisible(true) : null;
	     }

	     else if (Xrm.Page.getAttribute("sync_class").getValue() == 709250012)//list B
	     {
	        Xrm.Page.getAttribute("sync_rm") ? Xrm.Page.getControl("sync_rm").setVisible(true) : null;
	        Xrm.Page.getAttribute("sync_cex") ? Xrm.Page.getControl("sync_cex").setVisible(true) : null;
	        Xrm.Page.getAttribute("sync_classapp") ? Xrm.Page.getControl("sync_classapp").setVisible(true) : null;
	     }
	     else if (Xrm.Page.getAttribute("sync_class").getValue() == 709250013)//other
	     {
	        Xrm.Page.getAttribute("sync_rm") ? Xrm.Page.getControl("sync_rm").setVisible(false) : null;
	        Xrm.Page.getAttribute("sync_cex") ? Xrm.Page.getControl("sync_cex").setVisible(false) : null;
	     }
	     else if (Xrm.Page.getAttribute("sync_class").getValue() == 709250014)//self test
	     {
	        Xrm.Page.getAttribute("sync_rm") ? Xrm.Page.getControl("sync_rm").setVisible(false) : null;
	        Xrm.Page.getAttribute("sync_cex") ? Xrm.Page.getControl("sync_cex").setVisible(false) : null;
	     }
	 }
	 ,
     sync_vcChanged: function () {
         SYNC.Globals.selectedDateMoreThanXDaysValidation("sync_vc", "×”×¦×”×¨×ª ×™×¦×¨×Ÿ", -90);
     }
	 ,
     sync_mdChanged: function () {
         SYNC.Globals.selectedDateMoreThanXDaysValidation("sync_md", "× ×ª×•× ×™ ×©×™×•×•×§", -90);
     }
	 ,
     sync_ccsChanged: function () {
         SYNC.Globals.selectedDateMoreThanXDaysValidation("sync_ccs", "×”×¦×”×¨×” ×¢×œ ×ª×œ×•× ×•×ª ×•×©×™× ×•×™×™×", -90);
     }
	 ,
     showHideFieldSync_Ccs: function () {
         if (/*Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250001 && // ×—×™×“×•×©*/
             Xrm.Page.getAttribute("sync_regprojecttype").getValue() == 709250000 //×¦×™×•×“ ×¨×¤×•××™		
             ) //×—×™×“×•×©
         {
            Xrm.Page.getAttribute("sync_ccs") ? Xrm.Page.getControl("sync_ccs").setVisible(true) : null;
         }
         else {
            Xrm.Page.getAttribute("sync_ccs") ? Xrm.Page.getControl("sync_ccs").setVisible(false) : null;
         }
     }
	 ,
     sync_regprojecttypeChanged: function () {
         SYNC.Projects.showHideFieldSync_Ccs();
     }
	 ,
     sync_13_bChanged: function () {
         if (Xrm.Page.getAttribute("sync_13_b").getValue() == 709250000) //1. ×¤×˜×•×¨ ×ž×¨×™×©×™×•×Ÿ ×¢×¡×§
         {
            Xrm.Page.getAttribute("sync_13_b_valid") ? Xrm.Page.getControl("sync_13_b_valid").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_iso9001_lc") ? Xrm.Page.getControl("sync_iso9001_lc").setVisible(false) : null;
         }
         else
             if (Xrm.Page.getAttribute("sync_13_b").getValue() == 709250001)  //2.	×”×¦×”×¨×” ×¢×œ ××™ ××—×¡×•×Ÿ ×¡×—×•×¨×”
             {
                Xrm.Page.getAttribute("sync_13_b_valid") ? Xrm.Page.getControl("sync_13_b_valid").setVisible(false) : null;
                Xrm.Page.getAttribute("sync_iso9001_lc") ? Xrm.Page.getControl("sync_iso9001_lc").setVisible(false) : null;
             }
             else
                 if (Xrm.Page.getAttribute("sync_13_b").getValue() == 709250002) //3.	×‘×§×©×” ×œ×¨×™×©×™×•×Ÿ ×¢×¡×§
                 {
                    Xrm.Page.getAttribute("sync_13_b_valid") ? Xrm.Page.getControl("sync_13_b_valid").setVisible(false) : null;
                    Xrm.Page.getAttribute("sync_iso9001_lc") ? Xrm.Page.getControl("sync_iso9001_lc").setVisible(false) : null;
                 }
                 else
                     if (Xrm.Page.getAttribute("sync_13_b").getValue() == 709250003) //4.	×”×¡×›× ××—×¡× ×”
                     {
                        Xrm.Page.getAttribute("sync_13_b_valid") ? Xrm.Page.getControl("sync_13_b_valid").setVisible(true) : null;
                        Xrm.Page.getAttribute("sync_iso9001_lc") ? Xrm.Page.getControl("sync_iso9001_lc").setVisible(true) : null;
                     }
                     else
                         if (Xrm.Page.getAttribute("sync_13_b").getValue() == 709250004) //5.	×¨×™×©×™×•×Ÿ ×¢×¡×§
                         {
                            Xrm.Page.getAttribute("sync_13_b_valid") ? Xrm.Page.getControl("sync_13_b_valid").setVisible(true) : null;
                            Xrm.Page.getAttribute("sync_iso9001_lc") ? Xrm.Page.getControl("sync_iso9001_lc").setVisible(true) : null;
                         }
     }
	,
     sync_13_b_validChanged: function () {
         SYNC.Globals.currentDateValidation("sync_13_b_valid", "×ª×•×§×£ ×¨×™×©×™×•×Ÿ ×¢×¡×§ ×œ××—×¡×•×Ÿ ×œ×¤×™ ×¡×¢×™×£ 1.3×‘");
     }
	,
     sync_iso9001_lcChanged: function () {
         SYNC.Globals.currentDateValidation("sync_iso9001_lc", "×ª×•×§×£ ISO 9001 ×œ××—×¡× ×”");
     },
     sync_importerdChanged: function () {
         SYNC.Globals.selectedDateMoreThanXDaysValidation("sync_importerd", "×”×¦×”×¨×ª ×™×‘×•××Ÿ", -30);
     }
	,
     sync_requesttypeMedChanged: function () {
         XrmServiceToolkit.Extension.JQueryXrmDependentOptionSet("sync_FormMedicalEquipmentPicklist");
         if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250000) //1.	×—×“×©
         {
            Xrm.Page.getAttribute("sync_prevvaliddate") ? Xrm.Page.getControl("sync_prevvaliddate").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_renew_rules") ? Xrm.Page.getControl("sync_renew_rules").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_sit") ? Xrm.Page.getControl("sync_sit").setVisible(false) : null;
             //SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250010","709250020","709250030" , "709250040" , "709250050" , "709250070" , "709250080" , "709250090" , "709250130" , "709250140" , "709250150" , "709250160"));	
         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250001) //2.	×—×™×“×•×©
         {

             Xrm.Page.getAttribute("sync_prevvaliddate") ? Xrm.Page.getControl("sync_prevvaliddate").setVisible(true) : null;
             SYNC.Globals.currentDateValidation("sync_prevvaliddate", "×ª×•×§×£ ××™×©×•×¨ ××ž''×¨ ×§×•×“×");

             Xrm.Page.getAttribute("sync_renew_rules") ? Xrm.Page.getControl("sync_renew_rules").setVisible(true) : null;
             Xrm.Page.getAttribute("sync_ccs") ? Xrm.Page.getControl("sync_ccs").setVisible(true) : null;

             if (Xrm.Page.getAttribute("sync_usertype").getValue() == 709250001)
             Xrm.Page.getAttribute("sync_sit") ? Xrm.Page.getControl("sync_sit").setVisible(true): null;
             else
             Xrm.Page.getAttribute("sync_sit") ? Xrm.Page.getControl("sync_sit").setVisible(false) : null;

             //SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250010","709250020","709250030" , "709250040" , "709250050" , "709250070" , "709250080" , "709250090" , "709250130" , "709250140" , "709250150" , "709250160"));	
         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250002) //3.	×©×™× ×•×™ ×¨×™×©×•×
         {
            Xrm.Page.getAttribute("sync_prevvaliddate") ? Xrm.Page.getControl("sync_prevvaliddate").setVisible(true) : null;
            Xrm.Page.getAttribute("sync_renew_rules") ? Xrm.Page.getControl("sync_renew_rules").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_sit") ? Xrm.Page.getControl("sync_sit").setVisible(false) : null;
             //SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250010","709250020","709250030" , "709250040" , "709250050" , "709250070" , "709250080" , "709250090" , "709250130" , "709250140" , "709250150" , "709250160"));	
         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250003) //4.	××™×©×•×¨ ×—×“ ×¤×¢×ž×™
         {
            Xrm.Page.getAttribute("sync_prevvaliddate") ? Xrm.Page.getControl("sync_prevvaliddate").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_renew_rules") ? Xrm.Page.getControl("sync_renew_rules").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_sit") ? Xrm.Page.getControl("sync_sit").setVisible(false) : null;
             //SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250040","709250050","709250070","709250130",	"709250140",	"709250150",	"709250160"));
         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250004) //5.	××™×©×•×¨ ×™×‘×•× ×ª×§×•×¤×ª×™
         {
            Xrm.Page.getAttribute("sync_prevvaliddate") ? Xrm.Page.getControl("sync_prevvaliddate").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_renew_rules") ? Xrm.Page.getControl("sync_renew_rules").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_sit") ? Xrm.Page.getControl("sync_sit").setVisible(false) : null;
             //SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250040","709250050","709250070","709250130",	"709250140",	"709250150",	"709250160"));
         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250005) //6.	××™×©×•×¨ ×ž×›×™×¨×” ×—×•×¤×©×™
         {
            Xrm.Page.getAttribute("sync_prevvaliddate") ? Xrm.Page.getControl("sync_prevvaliddate").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_renew_rules") ? Xrm.Page.getControl("sync_renew_rules").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_sit") ? Xrm.Page.getControl("sync_sit").setVisible(false) : null;
             //SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250040","709250050","709250070","709250130",	"709250140",	"709250150",	"709250160"));
         }
         else if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250006)//×¨×™×©×™×•×Ÿ ×¢×¡×§
         {
             //SYNC.Globals.ShowPickListOption("sync_status" , new Array("709250040" ,"709250050","709250070","709250080","709250090","709250130","709250140","709250150","709250160"));
         }

         SYNC.Projects.showHideFieldSync_Ccs();
     }
	,
     sync_usertypeChanged: function () {
         if (Xrm.Page.getAttribute("sync_usertype").getValue() == 709250000) //1.	×ž×§×¦×•×¢×™
         {
            Xrm.Page.getAttribute("sync_trans_to_heb_eng") ?  Xrm.Page.getControl("sync_trans_to_heb_eng").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_pac_scan") ? Xrm.Page.getControl("sync_pac_scan").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_tca") ? Xrm.Page.getControl("sync_tca").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_sit") ? Xrm.Page.getControl("sync_sit").setVisible(false) : null;
         }
         else if (Xrm.Page.getAttribute("sync_usertype").getValue() == 709250001) //2.	×‘×™×ª×™
         {
            Xrm.Page.getAttribute("sync_pac_scan") ? Xrm.Page.getControl("sync_pac_scan").setVisible(true) : null;
             Xrm.Page.getAttribute("sync_trans_to_heb_eng") ? Xrm.Page.getControl("sync_trans_to_heb_eng").setVisible(true) : null;
             Xrm.Page.getAttribute("sync_tca") ? Xrm.Page.getControl("sync_tca").setVisible(true) : null;

             if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250001) //2.	×—×™×“×•×©
             {
                 if (Xrm.Page.getAttribute("sync_requesttype").getValue() == 709250001)
                 Xrm.Page.getAttribute("sync_sit") ? Xrm.Page.getControl("sync_sit").setVisible(true) : null;
                 else
                 Xrm.Page.getAttribute("sync_sit") ? Xrm.Page.getControl("sync_sit").setVisible(false) : null;
             }
             else {
                 Xrm.Page.getAttribute("sync_sit") ? Xrm.Page.getControl("sync_sit").setVisible(false) : null;
             }
         }
     }
	,
     sync_sd_mohChanged: function () {
         if (Xrm.Page.getAttribute("sync_sd_moh").getValue() != null)
             Xrm.Page.getAttribute("sync_status").setValue(709250070);

     },
     sync_fsdChanged: function () {
         if (Xrm.Page.getAttribute("sync_fsd").getValue() != null)
             Xrm.Page.getAttribute("sync_status").setValue(709250080); //'709250080'
     },
     sync_sfdChanged: function () {
         if (Xrm.Page.getAttribute("sync_sfd").getValue() != null)
             Xrm.Page.getAttribute("sync_status").setValue(709250090); //'709250090'
     }
	,
     sync_gldChanged: function () {
         if (Xrm.Page.getAttribute("sync_gld").getValue() != null)
             Xrm.Page.getAttribute("sync_status").setValue(709250130); //'×¡×™×•× ×˜×™×¤×•×œ - ×”×ª×§×‘×œ ××™×©×•×¨'
     }
	,
     loadFormMinistryDefence: function () {
         Xrm.Page.getAttribute("sync_iso9001system").addOnChange(SYNC.Projects.sync_iso9001systemChanged);
         Xrm.Page.getAttribute("sync_movefundreq").addOnChange(SYNC.Projects.sync_movefundreqChanged);
         Xrm.Page.getAttribute("sync_acprisales").addOnChange(SYNC.Projects.sync_acprisalesChanged);
         Xrm.Page.getAttribute("sync_acuntpermit").addOnChange(SYNC.Projects.sync_acuntpermitChanged);
         Xrm.Page.getAttribute("sync_secforms").addOnChange(SYNC.Projects.sync_secformsChanged);
         Xrm.Page.getAttribute("sync_consultingcustomer").addOnChange(SYNC.Projects.sync_consultingcustomerChanged);
         $("#sync_formmailnum").keypress(SYNC.Globals.ValidateCharacters);
         SYNC.Globals.ShowPickListOption("sync_status", new Array(709250040, 709250060, 709250050, 709250070, 709250080, 709250090, 709250100, 709250110, 709250120, 709250150, 709250160, 709250100));
         Xrm.Page.getAttribute("sync_status").addOnChange(SYNC.Projects.sync_statusChanged);
         SYNC.Projects.sync_statusPrev = Xrm.Page.getAttribute("sync_status").getValue();

         if (Xrm.Page.ui.getFormType() != 1) {
             Xrm.Page.getAttribute("sync_iso9001system").fireOnChange();
             Xrm.Page.getAttribute("sync_movefundreq").fireOnChange();
             Xrm.Page.getAttribute("sync_acprisales").fireOnChange();
             Xrm.Page.getAttribute("sync_acuntpermit").fireOnChange();
             Xrm.Page.getAttribute("sync_secforms").fireOnChange();
             Xrm.Page.getAttribute("sync_consultingcustomer").fireOnChange();
             Xrm.Page.getAttribute("sync_status").fireOnChange();
         }
     }
	,
     sync_statusChanged: function () {

         var labelName = Xrm.Page.ui.formSelector.getCurrentItem().getLabel();
         switch (labelName) {
             case "×¨×’×•×œ×¦×™×” - ×ª×ž×¨×•×§×™×":
                 SYNC.Projects.CheckPerfumeStatus();
                 break;
             case "×¨×’×•×œ×¦×™×” - ×¦×™×•×“ ×¨×¤×•××™":
                 SYNC.Projects.CheckMedicalEquipmentStatus();
                 break;
             case "×¤×¨×•×™×§×˜ ××™×›×•×ª":
                 SYNC.Projects.CheckQualityStatus();
                 break;

             default:
                 break;
         }
         SYNC.Projects.AllowForAdmin();
     }
	,
     CheckQualityStatus: function () {
         if (Xrm.Page.getAttribute("sync_status").getValue() == 709250170)//1. ×‘×˜×™×¤×•×œ
         {

         }
         else if (Xrm.Page.getAttribute("sync_status").getValue() == 709250120)//2. ×¡×™×•× ×˜×™×¤×•×œ
         {
             if (Xrm.Page.getAttribute("sync_fullypaid").getValue() != true) {
                 Xrm.Page.getAttribute("sync_status").setValue(SYNC.Projects.sync_statusPrev);
                 alert("×œ× × ×™×ª×Ÿ ×œ×¡×™×™× ××ª ×”×˜×™×¤×•×œ ×‘×”×¢×“×¨ ×ª×©×œ×•× ×¢×œ ×”×¤×¨×•×™×§×˜");
                 return false;
             }
         }
     }
	,
     CheckMedicalEquipmentStatus: function () {
         if (Xrm.Page.getAttribute("sync_fee").getValue() == null) {
             var sync_status = Xrm.Page.getAttribute("sync_status").getValue();
             if (sync_status == "709250070") //×”×’×©×”
             {
                 Xrm.Page.getAttribute("sync_status").setValue(SYNC.Projects.sync_statusPrev);
             }
         }
     }
	,
     CheckPerfumeStatus: function () {
         if (Xrm.Page.getAttribute("sync_permitlicenseagra").getValue() == null) {
             var sync_status = Xrm.Page.getAttribute("sync_status").getValue();
             if (sync_status == "709250070") //×”×’×©×”
             {
                 Xrm.Page.getAttribute("sync_status").setValue(SYNC.Projects.sync_statusPrev);
             }
         }
     }
	,
     AllowForAdmin: function () {
         var sync_statusNew = Xrm.Page.getAttribute("sync_status").getValue();
         if (sync_statusNew != null && SYNC.Projects.sync_statusPrev != null) {
             if (sync_statusNew < SYNC.Projects.sync_statusPrev) {
                 if (!XrmServiceToolkit.Soap.IsCurrentUserRole("×ž× ×”×œ ×ž×¢×¨×›×ª")) {
                     alert('×”×ž×¢×¨×›×ª ××™× ×” ×ž××¤×©×¨×ª ×—×–×¨×” ××—×•×¨×” ×‘×¡×˜×˜×•×¡, ×¨×§ ×œ×ž× ×”×œ ×ž×¢×¨×›×ª ×™×© ×”×¨×©××” ×œ×‘×¦×¢ ×¤×¢×•×œ×” ×–×•');
                     return false;
                 }
             }
             else
                 SYNC.Projects.sync_statusPrev = Xrm.Page.getAttribute("sync_status").getValue();
         }
     }
	,
     onSaveFormMinistryDefence: function () {
         var allAttributes = Xrm.Page.data.entity.attributes.get();
         if (allAttributes != null) {
             for (var i in allAttributes) {
                 var currentAttribute = Xrm.Page.data.entity.attributes.get(allAttributes[i].getName());
                 var attributeName = currentAttribute.getName();
                 var attributeValue = Xrm.Page.getAttribute(attributeName).getValue();
                 if (attributeValue == null) {
                     Xrm.Page.getControl(attributeName).setFocus();
                     alert("× × ×œ×ž×œ× ××ª ×›×œ ×”×©×“×•×ª ×‘×˜×•×¤×¡ ×˜×¨× ×¡×’×™×¨×ª×• ");
                     return false;
                 }
             }
         }
     }
	,
     sync_iso9001systemChanged: function () {
         if (Xrm.Page.getAttribute("sync_iso9001system").getValue() != 709250000) //×ž×œ× × ×“×¨×©
         {
             SYNC.Globals.ShowFields(new Array("sync_lastcheckreport"), true);
         }
         else {
             SYNC.Globals.ShowFields(new Array("sync_lastcheckreport"), false);
         }
     },
     sync_movefundreqChanged: function () {
         SYNC.Globals.selectedDateMoreThanXDaysValidation("sync_movefundreq", "×‘×§×©×” ×œ×”×¢×‘×¨×ª ×›×¡×¤×™× â€“ ×ž×§×•×¨", -60);
     },
     sync_acprisalesChanged: function () {
         SYNC.Globals.selectedDateMoreThanXDaysValidation("sync_acprisales", "××™×©×•×¨ ×¨×•''×— ×¢×œ ×ž×—×–×•×¨ ×ž×›×™×¨×•×ª - ×ž×§×•×¨", -60);
     },
     sync_acuntpermitChanged: function () {
         SYNC.Globals.selectedDateMoreThanXDaysValidation("sync_acuntpermit", "××™×©×•×¨ ×¨×•''×— ×¢×œ ×‘×¢×œ×™ ×ž× ×™×•×ª ×•×ž×•×¨×©×™ ×—×ª×™×ž×” - ×ž×§×•×¨", -60);
     }
	,
     sync_secformsChanged: function () {
         SYNC.Globals.selectedDateMoreThanXDaysValidation("sync_secforms", "×¡×˜ ×˜×¤×¡×™ ×‘×™×˜×—×•×Ÿ - ×ž×§×•×¨", -60);
     }
	,
     sync_consultingcustomerChanged: function () {
         if (Xrm.Page.getAttribute("sync_consultingcustomer").getValue() == true) {
             SYNC.Globals.ShowFields(new Array("sync_cv"), true);
             SYNC.Globals.ShowFields(new Array("sync_recom"), true);
             SYNC.Globals.ShowFields(new Array("sync_edcert"), true);
             SYNC.Globals.ShowFields(new Array("sync_decforionpart"), true);
             SYNC.Globals.ShowFields(new Array("sync_confforionpartner"), true);
             SYNC.Globals.ShowFields(new Array("sync_traincert"), true);

         }
         else {
             SYNC.Globals.ShowFields(new Array("sync_cv"), false);
             SYNC.Globals.ShowFields(new Array("sync_recom"), false);
             SYNC.Globals.ShowFields(new Array("sync_edcert"), false);
             SYNC.Globals.ShowFields(new Array("sync_decforionpart"), false);
             SYNC.Globals.ShowFields(new Array("sync_confforionpartner"), false);
             SYNC.Globals.ShowFields(new Array("sync_traincert"), false);
         }
     },
     sync_primarydivisionChanged: function () {
         XrmServiceToolkit.Extension.JQueryXrmDependentOptionSet("sync_projectcontractorpicklistdependency.xml");
     },
     sync_secondarydivisionChanged: function () {
         XrmServiceToolkit.Extension.JQueryXrmDependentOptionSet("sync_projectCcntractorpicklistdependency1.xml");
         if (Xrm.Page.getAttribute("sync_group").controls.getLength() > 0) {

         }
     },
     loadFormContractorsRegistar: function () {
         XrmServiceToolkit.Extension.JQueryXrmDependentOptionSet("sync_projectcontractorpicklistdependency.xml");
         XrmServiceToolkit.Extension.JQueryXrmDependentOptionSet("sync_projectCcntractorpicklistdependency1.xml");
         Xrm.Page.getAttribute("sync_secondarydivision").addOnChange(SYNC.Projects.sync_secondarydivisionChanged);
         Xrm.Page.getAttribute("sync_primarydivision").addOnChange(SYNC.Projects.sync_primarydivisionChanged);
         Xrm.Page.getAttribute("sync_consttype").addOnChange(SYNC.Projects.sync_consttypeChanged);
         $("#sync_contractornumber").keypress(SYNC.Globals.ValidateCharacters);
         SYNC.Globals.ShowPickListOption("sync_status", new Array(709250040, 709250050, 709250070, 709250080, 709250090, 709250120, 709250150, 709250160));
         Xrm.Page.getAttribute("sync_status").addOnChange(SYNC.Projects.sync_statusChanged);
         SYNC.Projects.sync_statusPrev = Xrm.Page.getAttribute("sync_status").getValue();

         if (Xrm.Page.ui.getFormType() != 1) {
             //Xrm.Page.getAttribute("sync_consttype").fireOnChange();	
             //Xrm.Page.getAttribute("sync_status").fireOnChange();			
         }
     }
     //,
     // sync_secondarydivisionChanged :function()
     // {
     // var options = Xrm.Page.getAttribute("sync_group").getOptions();
     // if(options != null)
     // {
     // Xrm.Page.getAttribute("sync_group").setValue(options[0].value);
     // }
     // }
	, sync_consttypeChanged: function () {
	    if (Xrm.Page.getAttribute("sync_consttype").getValue() == 709250000) //1. ×™×—×™×“
	    {
	        SYNC.Globals.ShowFields(new Array("sync_infopaper", "sync_companyrules", "sync_famelydec", "sync_imployersign", "sync_accountimploypermit"), false);
	        SYNC.Globals.ShowFields(new Array("sync_idfto", "sync_singledec", "sync_nocrimdec", "sync_106forms"), true);

	        SYNC.Globals.DisplaySection("tab_2", "tab_2_section_2", false);
	    }
	    else if (Xrm.Page.getAttribute("sync_consttype").getValue() == 709250001) //2.×ª××’×™×“, ×—×‘×¨×”, ×©×•×ª×¤×•×ª
	    {
	        SYNC.Globals.DisplaySection("tab_2", "tab_2_section_2", true);
	        SYNC.Globals.ShowFields(new Array("sync_infopaper", "sync_companyrules", "sync_famelydec", "sync_imployersign"), true);
	        SYNC.Globals.ShowFields(new Array("sync_idfto", "sync_singledec", "sync_nocrimdec", "sync_106forms", "sync_accountimploypermit"), false);
	    }
	    else if (Xrm.Page.getAttribute("sync_consttype").getValue() == 709250002) //3.×¢×œ ×¡×ž×š ×¢×•×‘×“×™× ××—×¨××™×
	    {
	        SYNC.Globals.ShowFields(new Array("sync_infopaper", "sync_companyrules", "sync_famelydec", "sync_imployersign"), false);
	        SYNC.Globals.ShowFields(new Array("sync_idfto", "sync_singledec", "sync_nocrimdec", "sync_106forms"), false);
	        SYNC.Globals.ShowFields(new Array("sync_accountimploypermit"), true);
	    }
	}
	,
     loadFormQuality: function () {
         Xrm.Page.getAttribute("sync_status") ? Xrm.Page.getAttribute("sync_status").addOnChange(SYNC.Projects.sync_statusChanged) : null;
         //Xrm.Page.getAttribute("sync_account") ? Xrm.Page.getAttribute("sync_account").addOnChange(SYNC.Projects.sync_accountChanged) : null;

         if (Xrm.Page.ui.getFormType() != 1) {
             //Xrm.Page.getAttribute("sync_statusquality").fireOnChange();	
             SYNC.Projects.sync_regprojecttypeQualityChanged();
             SYNC.Projects.sync_statusChanged();
             //SYNC.Projects.sync_accountChanged();
         }

         SYNC.Projects.sync_statusPrev = Xrm.Page.getAttribute("sync_status").getValue();
     }
	,
     sync_accountChanged: function () {
         if (Xrm.Page.getAttribute("sync_regprojecttype").getValue() == 709250004)//1.	×”×ª×¢×“×”
         {
             //var customersizecode = Xrm.Page.getControl("accountdetails_accountdetails_account_customersizecode").getAttribute().getValue();
			 var customersizecode = Xrm.Page.getAttribute("accountdetails_accountdetails_account_customersizecode") ? Xrm.Page.getControl("accountdetails_accountdetails_account_customersizecode").getAttribute().getValue() : null;
             if (customersizecode > 1) {
                 SYNC.Globals.ShowFields(new Array("sync_firstmeetingdate", "sync_secondmeetingdate", "sync_thridmeetingdate", "sync_fourthmeetingfate", "sync_fifthmeetingdate"), true);
                 SYNC.Globals.ShowFields(new Array("sync_meeting_6", "sync_meeting_7", "sync_meeting_8", "sync_meeting_9", "sync_meeting_10", "sync_meeting_11", "sync_meeting_12"), true);
             }
             else {
                 SYNC.Globals.ShowFields(new Array("sync_meeting_6", "sync_meeting_7", "sync_meeting_8", "sync_meeting_9", "sync_meeting_10", "sync_meeting_11", "sync_meeting_12"), false);
                 SYNC.Globals.ShowFields(new Array("sync_firstmeetingdate", "sync_secondmeetingdate", "sync_thridmeetingdate", "sync_fourthmeetingfate", "sync_fifthmeetingdate"), true);
             }
         }
     }
	,
     sync_marketed_differently_from_manufactureChanged: function () {
         debugger;
         if (Xrm.Page.getAttribute("sync_marketed_differently_from_manufacture").getValue() == false) {
            Xrm.Page.getAttribute("sync_iso_s_vend") ? Xrm.Page.getControl("sync_iso_s_vend").setVisible(false) : null;
            Xrm.Page.getAttribute("sync_c_to_vend") ? Xrm.Page.getControl("sync_c_to_vend").setVisible(false) : null;
         }
         else {
            Xrm.Page.getAttribute("sync_iso_s_vend") ? Xrm.Page.getControl("sync_iso_s_vend").setVisible(true) : null;
             Xrm.Page.getAttribute("sync_c_to_vend") ?  Xrm.Page.getControl("sync_c_to_vend").setVisible(true) : null;
         }
     }
     ,
     sync_regprojecttypeQualityChanged: function () {
         if (Xrm.Page.getAttribute("sync_regprojecttype").getValue() == 709250004)//1.	×”×ª×¢×“×”
         {
             //SYNC.Globals.ShowFields(new Array("sync_blmcertinst", "sync_secondmeetingdate", "sync_internaltest", "sync_receivecert"), true);
            //  SYNC.Globals.ShowFields(new Array("sync_blmcertinst", "sync_internaltest", "sync_receivecert"), true);
             SYNC.Globals.ShowFields(new Array("sync_certtestdate"), true);//sync_coordinatetestdate
            //  SYNC.Globals.ShowFields(new Array("sync_proceduresguide","sync_closinggapsforassessment", "sync_certtestdate"), true);//sync_coordinatetestdate
            //  SYNC.Globals.ShowFields(new Array("sync_proceduresguide","sync_closinggapsforassessment", "sync_certtestdate", "sync_correctiveactions"), true);//sync_coordinatetestdate
            //  SYNC.Globals.ShowFields(new Array("sync_proceduresguide", "sync_managementreview",
            //  "sync_closinggapsforassessment", "sync_certtestdate", "sync_correctiveactions"), true)

            // var customersizecode = Xrm.Page.getControl("accountdetails_accountdetails_account_customersizecode").getAttribute().getValue();
			 //var customersizecode = Xrm.Page.getAttribute("accountdetails_accountdetails_account_customersizecode") ? Xrm.Page.getControl("accountdetails_accountdetails_account_customersizecode").getAttribute().getValue() : null;
    //         if (customersizecode > 1) {
    //             SYNC.Globals.ShowFields(new Array("sync_firstmeetingdate", "sync_secondmeetingdate", "sync_thridmeetingdate", "sync_fourthmeetingfate", "sync_fifthmeetingdate"), true);
    //             SYNC.Globals.ShowFields(new Array("sync_meeting_6", "sync_meeting_7", "sync_meeting_8", "sync_meeting_9", "sync_meeting_10", "sync_meeting_11", "sync_meeting_12"), true);
    //         }
    //         else {
    //             SYNC.Globals.ShowFields(new Array("sync_meeting_6", "sync_meeting_7", "sync_meeting_8", "sync_meeting_9", "sync_meeting_10", "sync_meeting_11", "sync_meeting_12"), false);
    //             SYNC.Globals.ShowFields(new Array("sync_firstmeetingdate", "sync_secondmeetingdate", "sync_thridmeetingdate", "sync_fourthmeetingfate", "sync_fifthmeetingdate"), true);
    //         }
         }
         else if (Xrm.Page.getAttribute("sync_regprojecttype").getValue() == 709250005)//2.	×ž×¢×§×‘
         {
            //  SYNC.Globals.ShowFields(new Array("sync_blmcertinst", "sync_internaltest", "sync_receivecert"), false);
             SYNC.Globals.ShowFields(new Array("sync_certtestdate"), true);
            //  SYNC.Globals.ShowFields(new Array("sync_proceduresguide","sync_closinggapsforassessment", "sync_certtestdate"), true);
            //  SYNC.Globals.ShowFields(new Array("sync_proceduresguide","sync_closinggapsforassessment", "sync_certtestdate", "sync_correctiveactions"), true);
            //  SYNC.Globals.ShowFields(new Array("sync_proceduresguide", "sync_managementreview",
            //  "sync_closinggapsforassessment", "sync_certtestdate", "sync_correctiveactions"), true);
             //SYNC.Globals.ShowFields(new Array("sync_thridmeetingdate", "sync_fourthmeetingfate", "sync_fifthmeetingdate"), false);
             //SYNC.Globals.ShowFields(new Array("sync_meeting_6", "sync_meeting_7", "sync_meeting_8", "sync_meeting_9", "sync_meeting_10", "sync_meeting_11", "sync_meeting_12"), false);
         }
        //  else if (Xrm.Page.getAttribute("sync_regprojecttype").getValue() == 709250006)//3.	×œ×™×•×•×™ ×©×•×˜×£
        //  {
        //     //  SYNC.Globals.ShowFields(new Array("sync_blmcertinst", "sync_internaltest", "sync_receivecert"), false);
        //     //  SYNC.Globals.ShowFields(new Array("sync_proceduresguide","sync_closinggapsforassessment"), false);
        //     //  SYNC.Globals.ShowFields(new Array("sync_proceduresguide","sync_closinggapsforassessment", "sync_correctiveactions"), false)
        //     //  SYNC.Globals.ShowFields(new Array("sync_blmcertinst", "sync_secondmeetingdate", "sync_internaltest", "sync_receivecert"), false);
        //      //SYNC.Globals.ShowFields(new Array("sync_proceduresguide", "sync_managementreview",
        //      //"sync_closinggapsforassessment", "sync_certtestdate", "sync_correctiveactions"), false);//sync_coordinatetestdate
		// 	//  SYNC.Globals.ShowFields(new Array("sync_proceduresguide", "sync_managementreview",
        //     //  "sync_closinggapsforassessment", "sync_correctiveactions"), false);//sync_coordinatetestdate
        //      //SYNC.Globals.ShowFields(new Array("sync_meeting_6", "sync_meeting_7", "sync_meeting_8", "sync_meeting_9", "sync_meeting_10", "sync_meeting_11", "sync_meeting_12"), true);
        //      //SYNC.Globals.ShowFields(new Array("sync_firstmeetingdate", "sync_secondmeetingdate", "sync_thridmeetingdate", "sync_fourthmeetingfate", "sync_fifthmeetingdate"), true);

        //  }
     },

     GetODataPath: function () {
         return Xrm.Page.context.getClientUrl() + "/xrmservices/2011/organizationdata.svc";
     },

     Retrieve: function (filter) {

         var retrieveRecordsReq = new XMLHttpRequest();
         retrieveRecordsReq.open("GET", SYNC.Projects.GetODataPath() + filter, false);
         retrieveRecordsReq.setRequestHeader("Accept", "application/json");
         retrieveRecordsReq.setRequestHeader("Content-Type", "application/json; charset=utf-8");

         retrieveRecordsReq.send();

         if (retrieveRecordsReq.readyState == 4) {
             if (retrieveRecordsReq.status == 200) {
                 return retrieveRecordsReq.responseText;
             }
             else {
                 alert(retrieveRecordsReq.status + "\n" + retrieveRecordsReq.statusText);
             }
         }
     },

     ReutdateReviver: function (key, value) {
         var a;
         if (typeof value === 'string') {
             a = /Date\(([-+]?\d+)\)/.exec(value);
             if (a) {
                 var tDate = new Date(parseInt(value.replace("/Date(", "").replace(")/", ""), 10));
                 var dd = tDate.getDate();
                 var mm = tDate.getMonth() + 1;
                 var yy = tDate.getFullYear();
                 var DateString = dd.toString() + '/' + mm.toString() + '/' + yy.toString();
                 return DateString;
             }
         }
         return value;
     },

     sync_Onsave_Project: function () {
         debugger;
         var Description = Xrm.Page.getAttribute("sync_name").getValue();
         var AccountID = Xrm.Page.getAttribute("sync_account").getValue();
         var ProjectType = Xrm.Page.getAttribute("sync_projecttype").getValue();
         var RegProjectType = Xrm.Page.getAttribute("sync_regprojecttype").getValue();
         var RequestType = Xrm.Page.getAttribute("sync_requesttype").getValue();
         var LocalManufacture = Xrm.Page.getAttribute("sync_localmanufacturer").getValue();
         var License13b = Xrm.Page.getAttribute("sync_13_b").getValue();
         var MarketDiffManuf = Xrm.Page.getAttribute("sync_marketed_differently_from_manufacture").getValue();

         var DateISO9001 = Xrm.Page.getAttribute("sync_iso9001").getValue();
         var Date13_b_valid = Xrm.Page.getAttribute("sync_13_b_valid").getValue();
         var Date13_license = Xrm.Page.getAttribute("sync_13_license").getValue();
         var Dateiso9001_lc = Xrm.Page.getAttribute("sync_iso9001_lc").getValue();
         if (DateISO9001 == null && Date13_b_valid == null && Date13_license == null && Dateiso9001_lc == null) { return; }

         var filter = "/sync_customerprojectsSet?$select=*&$filter=sync_accountid/Id eq (guid'" + AccountID[0].id + "') and sync_regprojecttype/Value eq " + RegProjectType + " and sync_projecttype/Value eq " + ProjectType + " and sync_localmanufacturer eq " + LocalManufacture + "&$orderby=sync_accountid asc";
         var responseText = SYNC.Projects.Retrieve(filter);
         var responseParsed = JSON.parse(responseText); //, SYNC.Projects.ReutdateReviver
         var retrievedRecords = responseParsed.d;
         var DateType = 0;
         if (ProjectType == 709250001 && RegProjectType == 709250000 && (RequestType == 709250000 || RequestType == 709250001 || RequestType == 709250002)) {
             if (LocalManufacture == true && MarketDiffManuf == null && Date13_license != null) {
                 var ValidDate = Date13_license;
                 DateType = 3; //7
             }
             if (LocalManufacture == true && MarketDiffManuf == true && DateISO9001 != null) {
                 var ValidDate = DateISO9001; //8
                 DateType = 1;
             }
             if (LocalManufacture == true && MarketDiffManuf == false && Date13_b_valid != null) {
                 var ValidDate = Date13_b_valid; //6
                 DateType = 2;
             }
             if (LocalManufacture == false && DateISO9001 != null) {
                 var ValidDate = DateISO9001; //4
                 DateType = 1;
             }
             if (LocalManufacture == false && License13b == 709250004 && Date13_b_valid != null) {
                 var ValidDate = Date13_b_valid; //5
                 DateType = 2;
             }
             if (LocalManufacture == false && License13b == 709250003 && DateISO9001 != null) {
                 var ValidDate = DateISO9001; //9
                 DateType = 1;
             }
         }
         if (retrievedRecords.results.length > 0) {
             var Result = retrievedRecords.results[0];
             var CustomerProjectID = Result.sync_customerprojectsId;
             var tDateISO9001 = Result.sync_iso9001;
             var tDate13_b_valid = Result.sync_13_B_valid;
             var tDate13_license = Result.sync_13_license;
             var Update = false;
             if (ValidDate != null) {
//                 switch (DateType) {
//                     case 1:
                         if (tDateISO9001 != null) {
                             if (ValidDate.getTime() > Number(tDateISO9001.substr(6, 13))) {
                                 Update = true;
                             }
                         }
//                         break;
//                     case 2:
                         if (tDate13_b_valid != null) {
                             if (ValidDate.getTime() > Number(tDate13_b_valid.substr(6, 13))) {
                                 Update = true;
                             }
                         }
//                         break;
//                     case 3:
                         if (tDate13_license != null) {
                             if (ValidDate.getTime() > Number(tDate13_license.substr(6, 13))) {
                                 Update = true;
                             }
                         }
//                         break;
//                 }
             }
             if (Update) {
                 SYNC.Projects.sync_UpdateProject(CustomerProjectID, RequestType, License13b, DateISO9001, Date13_b_valid, Date13_license, Dateiso9001_lc, Description, LocalManufacture, MarketDiffManuf);
             }
         }
         else {
             SYNC.Projects.sync_CreateProject(AccountID, ProjectType, RegProjectType, RequestType, LocalManufacture, License13b, Description, DateISO9001, Date13_b_valid, Date13_license, Dateiso9001_lc, MarketDiffManuf);
         }
     },

     sync_CreateProject: function (AccountID, ProjectType, RegProjectType, RequestType, LocalManufacture, License13b, Description, DateISO9001, Date13_b_valid, Date13_license, Dateiso9001_lc, MarketDiffManuf) {
         debugger;
         var LastProject = {};
         LastProject.sync_accountid = { Id: AccountID[0].id, LogicalName: 'account' };
         LastProject.sync_name = Description.toString();
         LastProject.sync_projecttype = { "__metadata": { "type": "Microsoft.Crm.Sdk.Data.Services.OptionSetValue" }, Value: ProjectType };
         LastProject.sync_regprojecttype = { "__metadata": { "type": "Microsoft.Crm.Sdk.Data.Services.OptionSetValue" }, Value: RegProjectType };
         //LastProject.sync_requesttype = { "__metadata": { "type": "Microsoft.Crm.Sdk.Data.Services.OptionSetValue" }, Value: RequestType };
         LastProject.sync_localmanufacturer = LocalManufacture;
         if (MarketDiffManuf != null) {
             LastProject.sync_marketed_differently_from_manufacture = MarketDiffManuf;
         }
         if (License13b != null) {
             LastProject.sync_13_b = { "__metadata": { "type": "Microsoft.Crm.Sdk.Data.Services.OptionSetValue" }, Value: License13b };
         }
         LastProject.sync_projectid = { Id: Xrm.Page.data.entity.getId(), LogicalName: 'sync_projects' }; //'FDC54420-55FD-E411-96DA-0050569046F8'
         LastProject.sync_iso9001 = DateISO9001;
         LastProject.sync_13_B_valid = Date13_b_valid;
         LastProject.sync_13_license = Date13_license;
         LastProject.sync_iso9001_lc = Dateiso9001_lc;

         //Create Project
         try {
             SDK.JQuery.createRecord(
                 LastProject,
                 "sync_customerprojects",
                 function (LastProject) {
                     SYNC.Projects.writeMessage("Last Project Record created Successfully");
                 },
                     SYNC.Projects.errorHandler
             );
         }
         catch (e) {
             alert(e.message);
         }

     },

     sync_UpdateProject: function (CustomerProjectID, RequestType, License13b, DateISO9001, Date13_b_valid, Date13_license, Dateiso9001_lc, Description, LocalManufacture, MarketDiffManuf) {
         SDK.JQuery.retrieveRecord(
             CustomerProjectID,
             "sync_customerprojects",
             null,
             null,
             function (LastProject) {
                 SYNC.Projects.sync_updateCustomerProject(CustomerProjectID, RequestType, License13b, DateISO9001, Date13_b_valid, Date13_license, Dateiso9001_lc, Description, LocalManufacture, MarketDiffManuf);
             },
                 SYNC.Projects.errorHandler
             );
     },

     sync_updateCustomerProject: function (CustomerProjectID, RequestType, License13b, DateISO9001, Date13_b_valid, Date13_license, Dateiso9001_lc, Description, LocalManufacture, MarketDiffManuf) {
         var LastProject = {};
         LastProject.sync_iso9001 = DateISO9001;
         LastProject.sync_13_B_valid = Date13_b_valid;
         LastProject.sync_13_license = Date13_license;
         LastProject.sync_iso9001_lc = Dateiso9001_lc;
         LastProject.sync_name = Description.toString();
         LastProject.sync_projectid = { Id: Xrm.Page.data.entity.getId(), LogicalName: 'sync_projects' };
         //LastProject.sync_requesttype = { "__metadata": { "type": "Microsoft.Crm.Sdk.Data.Services.OptionSetValue" }, Value: RequestType };
         if (MarketDiffManuf != null) {
             LastProject.sync_marketed_differently_from_manufacture = MarketDiffManuf;
         }
         LastProject.sync_localmanufacturer = LocalManufacture;
         if (License13b != null) {
             LastProject.sync_13_b = { "__metadata": { "type": "Microsoft.Crm.Sdk.Data.Services.OptionSetValue" }, Value: License13b };
         }
         SDK.JQuery.updateRecord(
             CustomerProjectID,
             LastProject,
             "sync_customerprojects",
             function (LastProject) {
                 SYNC.Projects.writeMessage("Last Project Record updated Successfully");
             },
                 SYNC.Projects.errorHandler
             );
     },
     errorHandler: function (error) {
         alert(error.message);
     },

     writeMessage: function (message) {
         alert(message);
         //        $("<li>" + message + "</li>").appendTo(output);
     }
 }