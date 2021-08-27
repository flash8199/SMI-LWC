public with sharing class employeeController {
    public employeeController() {



    }


    @AuraEnabled(cacheable=true)
    public static List<sObject> searchEmployee(String searchParam){
        String likeParam = '%' +searchParam+'%';
        String Query = '';
       
        if(searchParam != null){
           Query  = 'Select Name, Employee__c, Mentor_Home__c From Junction_User_Mentor_Home__c Where Name Like :likeParam LIMIT 50 ';
        }else{
           Query  = 'Select Name, Employee__c, Mentor_Home__c From Junction_User_Mentor_Home__c LIMIT 50 '; 
        }
        
        List<SObject> sObjectList = Database.query(Query);
        return sObjectList;
    }

}
