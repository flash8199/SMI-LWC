public with sharing class mentorController {
    public mentorController() {

    }

    @AuraEnabled(cacheable = true)
    public static List<Mentor_Home__c> getAllCases(){
        
        List<Mentor_Home__c> mentorList = [Select Name FROM Mentor_Home__c];
        
        return mentorList;
    }
}


