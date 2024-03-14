if (typeof (SIT) === "undefined") {
    SIT = {
        __namespace: true
    };
}
if (typeof (SIT.Library) === "undefined") {
    SIT.Library = {
        __namespace: true
    };
}
//Check Jquery is available or not
if (typeof ($) === "undefined") {
    $ = parent.$;
    jQuery = parent.jQuery;
}
var syncStatus = {
    "RegulationProject":
    {
        "medicalCosmeticsProjectStatus": [
            { text: 'מנותב לפני תחילת עבודה', value: 709250010 }, // Transfer sheets
            { text: 'תיק בבחינה', value: 709250020 }, // File under review
            { text: 'חוו"ד לאחר בחינה', value: 709250030 }, // H.V.D. after an exam
            { text: 'מנותב לפני איסוף מסמכים', value: 709250040 }, // routed before document collection
            { text: 'איסוף מסמכים', value: 709250050 }, // Document collection
            { text: 'הגשה', value: 709250070 }, // submission
            { text: 'השלמות', value: 709250080 }, // perfection 
            { text: 'הגשה לאחר השלמות', value: 709250090 },
            { text: 'סיום טיפול – התקבל אישור', value: 709250130 },
            { text: 'סיום טיפול – לא התקבל אישור', value: 709250140 }]
    },
    "RegulationMinistryProject":
    {
        "ministryDefenceProjectStatus": [
            { text: 'מנותב לפני איסוף מסמכים', value: 709250040 },
            { text: 'נשלח בדואר / מייל', value: 709250060 },
            { text: 'הגשה', value: 709250070 },
            { text: 'איסוף מסמכים', value: 709250050 },
            { text: 'קבלת מספר ספק', value: 709250110 },
            { text: 'סיום טיפול', value: 709250120 }
        ]
    },
    "QualityProject":
    {
        "qualityProjectStatus": [
            { text: 'מנותב לפני תחילת עבודה', value: 709250010 },
            { text: 'בטיפול', value: 709250170 },
            { text: 'סיום טיפול – התקבל אישור', value: 709250130 },
            { text: 'סיום טיפול – לא התקבל אישור', value: 709250140 },
            { text: 'מוקפא לפי דרישת לקוח', value: 709250150 },
            { text: 'מוקפא ולקוח עודכן', value: 709250160 },
            { text: 'סיום תפעול', value: 100000000 },
            { text: 'לאחר מבדק', value: 709250001 }
        ]
    },
    "AllStatus": {
        "All":
            [
                { text: 'מנותב לפני תחילת עבודה', value: 709250010 },
                { text: 'תיק בבחינה', value: 709250020 },
                { text: 'חוו"ד לאחר בחינה', value: 709250030 },
                { text: 'מנותב לפני איסוף מסמכים', value: 709250040 },
                { text: 'איסוף מסמכים', value: 709250050 },
                { text: 'נשלח בדואר / מייל', value: 709250060 },
                { text: 'הגשה', value: 709250070 },
                { text: 'השלמות', value: 709250080 },
                { text: 'נשלח לאחר השלמות, טרם נקלט', value: 709250000 },
                { text: 'הגשה לאחר השלמות', value: 709250090 },
                { text: "קב''ט", value: 709250100 },
                { text: 'קבלת מספר ספק', value: 709250110 },
                { text: 'בטיפול', value: 709250170 },
                { text: 'לאחר מבדק', value: 709250001 },
                { text: 'סיום טיפול', value: 709250120 },
                { text: 'סיום טיפול – התקבל אישור', value: 709250130 },
                { text: 'סיום טיפול – לא התקבל אישור', value: 709250140 },
                { text: 'מוקפא לפי דרישת לקוח', value: 709250150 },
                { text: 'מוקפא ולקוח עודכן', value: 709250160 },
                { text: 'סיום תפעול', value: 100000000 }
            ]
    }
};
var syncClass = {
    "approvalCE":
    {
        "ceClass": [
            { text: 'I', value: 709250001 },
            { text: 'lm', value: 709250006 },
            { text: 'ls', value: 709250007 },
            { text: 'lla', value: 709250008 },
            { text: 'llb', value: 709250009 },
            { text: 'lll', value: 709250010 },
            { text: 'other', value: 709250013 },
            { text: 'self test', value: 709250014 },
            { text: 'list A', value: 709250011 },
            { text: 'list B', value: 709250012 },
            { text: 'A', value: 907700000 },
            { text: 'B', value: 907700001 },
            { text: 'C', value: 907700002 },
            { text: 'D', value: 907700003 }

        ]
    },
    "approvalFDA":
    {
        "fdaClass": [
            { text: 'I', value: 709250001 },
            { text: 'II', value: 709250002 },
            { text: 'III', value: 709250003 }
        ]
    },
    "approvalHealthCanada":
    {
        "headlthcanadaClass": [
            { text: 'I', value: 709250001 },
            { text: 'II', value: 709250002 },
            { text: 'III', value: 709250003 }
        ]
    },
    "approvalMHRA":
    {


        "mhraClass": [
            { text: 'I', value: 709250001 },
            { text: 'lla', value: 709250008 },
            { text: 'llb', value: 709250009 },
            { text: 'A', value: 907700000 },
            { text: 'B', value: 907700001 }

        ]
    },
    "approvalTGA":
    {


        "tgaClass": [
            { text: 'I', value: 709250001 },
            { text: 'lla', value: 709250008 },
            { text: 'llb', value: 709250009 },
            { text: 'lll', value: 709250010 },
            { text: 'A', value: 907700000 },
            { text: 'B', value: 907700001 }

        ]
    },
    "approvalFreeSale":
    {
        "freesaleClass": [
            { text: 'I', value: 709250001 },
            { text: 'lm', value: 709250006 },
            { text: 'ls', value: 709250007 },
            { text: 'lla', value: 709250008 },
            { text: 'llb', value: 709250009 },
            { text: 'lll', value: 709250010 }
        ]
    },
    "approvalAll":
    {
        "allClass": [
            { text: 'I', value: 709250001 },
            { text: 'II', value: 709250002 },
            { text: 'III', value: 709250003 },
            { text: 'lm', value: 709250006 },
            { text: 'ls', value: 709250007 },
            { text: 'lla', value: 709250008 },
            { text: 'llb', value: 709250009 },
            { text: 'lll', value: 709250010 },
            { text: 'other', value: 709250013 },
            { text: 'self test', value: 709250014 },
            { text: 'list A', value: 709250011 },
            { text: 'list B', value: 709250012 },
            { text: 'A', value: 907700000 },
            { text: 'B', value: 907700001 },
            { text: 'C', value: 907700002 },
            { text: 'D', value: 907700003 },
            { text: 'I Measure', value: 709250000 },
            { text: 'I Sterile', value: 709250004 },
            { text: 'IIa', value: 709250005 },
            { text: 'IIb', value: 709250015 }

        ]
    }
};
SIT.Library.Project = {
    //on save of quality project change value of certification institute & reviwer fields of account
    ChangeLookupFieldValue: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var certificationId = (formContext.getAttribute('sit_sync_projects_account').getValue() != null) ? formContext.getAttribute('sit_sync_projects_account').getValue()[0].id : null;
        var reviwerId = (formContext.getAttribute('sync_reviewercontactid').getValue() != null) ? formContext.getAttribute('sync_reviewercontactid').getValue()[0].id : null;
        if (certificationId != null && reviwerId != null) {
            certificationId = certificationId.replace("{", "").replace("}", "");
            reviwerId = reviwerId.replace("{", "").replace("}", "");
            var accountId = (formContext.getAttribute('sync_account').getValue() != null) ? formContext.getAttribute('sync_account').getValue()[0].id : null;
            if (accountId != null) {
                accountId = accountId.replace("{", "").replace("}", "");
                var entity = {};
                entity["sync_auditorid@odata.bind"] = "/contacts(" + reviwerId + ")";
                entity["sync_institue_acc_id_account@odata.bind"] = "/accounts(" + certificationId + ")";
                Xrm.WebApi.online.updateRecord("account", accountId, entity).then(
                    function success(result) {
                        var updatedEntityId = result.id;
                    },
                    function (error) {
                        Xrm.Utility.alertDialog(error.message);
                    }
                );
            }

        }
    },
    //Set certification institute & reviewer field values on change of customer name
    SetLookupFieldValue: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var accountId = (formContext.getAttribute('sync_account').getValue() != null) ? formContext.getAttribute('sync_account').getValue()[0].id : null;
        if (accountId != null) {
            accountId = accountId.replace("{", "").replace("}", "");
            Xrm.WebApi.online.retrieveRecord("account", accountId, "?$select=_sync_auditorid_value,_sync_institue_acc_id_value").then(
                function success(result) {
                    if (result["_sync_auditorid_value"] != null || result["_sync_auditorid_value"] == undefined) {
                        var certificationId = result["_sync_auditorid_value"];
                        var certificationName = result["_sync_auditorid_value@OData.Community.Display.V1.FormattedValue"];
                        var certificationEntity = result["_sync_auditorid_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
                        var certificationInstitute = new Array();
                        certificationInstitute[0] = new Object();
                        certificationInstitute[0].id = certificationId;
                        certificationInstitute[0].name = certificationName;
                        certificationInstitute[0].entityType = certificationEntity;
                        formContext.getAttribute('sync_reviewercontactid').setValue(certificationInstitute);
                    }

                    if (result["_sync_institue_acc_id_value"] != null || result["_sync_institue_acc_id_value"] == undefined) {
                        var instituteId = result["_sync_institue_acc_id_value"];
                        var institudeName = result["_sync_institue_acc_id_value@OData.Community.Display.V1.FormattedValue"];
                        var institudeEntity = result["_sync_institue_acc_id_value@Microsoft.Dynamics.CRM.lookuplogicalname"];
                        var institute = new Array();
                        institute[0] = new Object();
                        institute[0].id = instituteId;
                        institute[0].name = institudeName;
                        institute[0].entityType = institudeEntity;
                        if (institute != null) {
                            formContext.getAttribute('sit_sync_projects_account').setValue(institute);
                        }
                    }

                },
                function (error) {
                    Xrm.Utility.alertDialog(error.message);
                }
            );
        }
    },
    //Set OptionSet value according to project type
    SetSyncStatus: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var projectArea = formContext.getAttribute("sync_projecttype") ? formContext.getAttribute("sync_projecttype").getValue() : null;
        var projectType = formContext.getAttribute("sync_regprojecttype") ? formContext.getAttribute("sync_regprojecttype").getValue() : null;

        //if Project Area is Quality
        if (projectArea == 709250000) {
            formContext.getControl("sync_status").clearOptions();
            syncStatus.QualityProject.qualityProjectStatus.forEach(element => formContext.getControl("sync_status").addOption(element));
        }
        //if Project Area is Regulation and Project Type is "Registrar of Contractorsx"
        else if (projectArea == 709250001 && projectType == 709250003) {
            formContext.getControl("sync_status").clearOptions();
            syncStatus.AllStatus.All.forEach(element => formContext.getControl("sync_status").addOption(element));
        }
        //if Project Area is Regulation and Project Type is "Medical Equipment" or "Cosmetics"
        else if (projectArea == 709250001 && (projectType == 709250000 || projectType == 709250001)) {
            formContext.getControl("sync_status").clearOptions();
            syncStatus.RegulationProject.medicalCosmeticsProjectStatus.forEach(element => formContext.getControl("sync_status").addOption(element));
        }
        //if Project Area is Regulation and Project Type is "Ministry of Defence"
        else if (projectArea == 709250001 && projectType == 709250002) {
            formContext.getControl("sync_status").clearOptions();
            syncStatus.RegulationMinistryProject.ministryDefenceProjectStatus.forEach(element => formContext.getControl("sync_status").addOption(element));
        }
        else {
            formContext.getControl("sync_status").clearOptions();
            syncStatus.AllStatus.All.forEach(element => formContext.getControl("sync_status").addOption(element));
        }

        if(projectArea == 709250001 && projectType == 709250001){
            let optionElem = { text: 'נוטיפיקציה', value: 100000000 }
            formContext.getControl("sync_requesttype").addOption(optionElem);
        }

        if(projectArea == 709250001 && projectType == 709250000){
            let optionElem = { text: 'אמ"ר הצהרה', value: 100000001 }
            formContext.getControl("sync_requesttype").addOption(optionElem);
        }

    },
    //Set Sync class according to approval type
    SetSyncClass: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var approvalType = formContext.getAttribute("sync_licensetype") ? formContext.getAttribute("sync_licensetype").getValue() : null;
        //if approvalType is 'CE'
        if (approvalType == 709250000) {
            formContext.getControl("sync_class").clearOptions();
            syncClass.approvalCE.ceClass.forEach(element => formContext.getControl("sync_class").addOption(element))
        }
        //Approval Type is 'MHRA'
        else if (approvalType == 709250006) {

            syncClass.approvalMHRA.mhraClass.forEach(element => formContext.getControl("sync_class").addOption(element))
        }
        //Approval Type is 'FDA 510k'
        else if (approvalType == 709250001) {
            formContext.getControl("sync_class").clearOptions();
            syncClass.approvalFDA.fdaClass.forEach(element => formContext.getControl("sync_class").addOption(element))
        }
        //Approval Type is 'FDA CFG'
        else if (approvalType == 709250002) {
            formContext.getControl("sync_class").clearOptions();
            syncClass.approvalFDA.fdaClass.forEach(element => formContext.getControl("sync_class").addOption(element))
        }
        //Approval Type is 'FDA Establishment'
        else if (approvalType == 709250005) {
            formContext.getControl("sync_class").clearOptions();
            syncClass.approvalFDA.fdaClass.forEach(element => formContext.getControl("sync_class").addOption(element))
        }
        //Approval Type is 'Health Canana'
        else if (approvalType == 709250003) {
            formContext.getControl("sync_class").clearOptions();
            syncClass.approvalHealthCanada.headlthcanadaClass.forEach(element => formContext.getControl("sync_class").addOption(element))
        }
        //Approval Type is 'TGA'
        else if (approvalType == 709250004) {
            formContext.getControl("sync_class").clearOptions();
            syncClass.approvalTGA.tgaClass.forEach(element => formContext.getControl("sync_class").addOption(element))
        }
        //Approval Type is 'Free Sale ×ž×ž×“×™× ×” ×ž×•×›×¨×ª'
        else if (approvalType == 709250007) {
            formContext.getControl("sync_class").clearOptions();
            syncClass.approvalFreeSale.freesaleClass.forEach(element => formContext.getControl("sync_class").addOption(element))
        }
        else {
            formContext.getControl("sync_class").clearOptions();
            syncClass.approvalAll.allClass.forEach(element => formContext.getControl("sync_class").addOption(element))
        }
    },
    //For Quality project if project type is 'ongoing escort' or 'one time escort' then set 'Current audit date' field visible true
    //Currently not in use
    ShowCurrentAuditDate: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var projectType = formContext.getAttribute('sync_regprojecttype') ? formContext.getAttribute('sync_regprojecttype').getValue() : null;
        //ongoing escort : 709250006 ; One Time Escort :  709250024
        if (projectType == 709250006 || projectType == 709250024) {
            formContext.getControl('sit_currentauditdate').setVisible(true);
            formContext.getControl('sync_certtestdate').setVisible(false);
        }
        else {
            formContext.getControl('sync_certtestdate').setVisible(true);
            formContext.getControl('sit_currentauditdate').setVisible(false);
        }
    },
    //On load of Quality project set planning field according to  project type 
    SetPlanningField: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var projectType = formContext.getAttribute('sync_regprojecttype') ? formContext.getAttribute('sync_regprojecttype').getValue() : null;
        var actualHours = formContext.getAttribute('sync_actualhours') ? formContext.getAttribute('sync_actualhours').getValue() : null;

        //if project type is certification than add 32 hours 
        var setHours = '';
        if (projectType == 709250004) {
            setHours = 32;
            formContext.getAttribute('sit_planninghours').setValue(setHours);
            if (actualHours == null || actualHours == undefined) {
                formContext.getAttribute('sync_actualhours').setValue(setHours);
            }
        }
        //if project type is survelliance than add 12 hours
        if (projectType == 709250005) {
            setHours = 12;
            formContext.getAttribute('sit_planninghours').setValue(setHours);
            if (actualHours == null || actualHours == undefined) {
                formContext.getAttribute('sync_actualhours').setValue(setHours);
            }
        }
        //if project type is ongoing escrot or one time escort than add hours manually
        if (projectType == 709250006 || projectType == 709250024) {
            formContext.getControl('sit_planninghours').setDisabled(false);
        }
    },
    //on change of field value calculate planning hours 
    CalculateTotalHours: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var preActualHours = formContext.getAttribute('sync_actualhours') ? formContext.getAttribute('sync_actualhours').getValue() : null;
        var totalExcutedHours = formContext.getAttribute('sync_execution_time_followup') ? formContext.getAttribute('sync_execution_time_followup').getValue() : null;
        var planningHour = formContext.getAttribute('sit_planninghours') ? formContext.getAttribute('sit_planninghours').getValue() : null;
        var moreMeetingDays = formContext.getAttribute('sync_more_meetings') ? formContext.getAttribute('sync_more_meetings').getValue() : null;
        var morePreDays = formContext.getAttribute('sync_more_pre_days') ? formContext.getAttribute('sync_more_pre_days').getValue() : null;
        var moreAuditDays = formContext.getAttribute('sync_more_audit_days') ? formContext.getAttribute('sync_more_audit_days').getValue() : null;
        var totalActualHours = planningHour + (4 * moreMeetingDays) + (8 * morePreDays) + (8 * moreAuditDays);

        formContext.getAttribute('sync_actualhours').setValue(totalActualHours);

    },
    //if project type is regulation project medical equipment and contact type is periodic import permit than show PIA subgrid
    ShowPIASubgrid: function (executionContext) {
        var formContext = executionContext.getFormContext();
        var contactType = formContext.getAttribute('sync_requesttype') ? formContext.getAttribute('sync_requesttype').getValue() : null;
        //709250004 - 
        if (contactType != null && contactType != undefined && contactType == 709250004) {
            formContext.ui.tabs.get("tab_2").sections.get("PIASubgrid").setVisible(true);
        }
        else {
            formContext.ui.tabs.get("tab_2").sections.get("PIASubgrid").setVisible(false);
        }

    },
    __namespace: true

}