public with sharing class EmployeeController {

    @AuraEnabled
    public static void EmployeeController(String empName, String empEmail, String empPhone) {
        try {

            Employee__c emp = new Employee__c();
            emp.name = empName;
            emp.Employee_Email__c = empEmail;
            emp.Employee_Phone__c = empPhone;
            insert emp;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

    }
}