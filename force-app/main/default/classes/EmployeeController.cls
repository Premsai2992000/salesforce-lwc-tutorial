public with sharing class EmployeeController {

    @AuraEnabled
    public static void EmployeeController(Integer empId,String empName, String empEmail, String empPhone) {
        try {

            Employee__c emp = new Employee__c();
            emp.Employee_Id__c = empId;
            emp.name = empName;
            emp.Employee_Email__c = empEmail;
            emp.Employee_Phone__c = empPhone;
            insert emp;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

    }

    @AuraEnabled
    public void deleteRecord(string recordId){
        try {
            Employee__c emp = [SELECT Id from Employee__C where Id =:recordId];
            delete emp;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}