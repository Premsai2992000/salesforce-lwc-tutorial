public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountName()  {       
        try {
            return [SELECT Id, Name FROM Account ORDER BY Name ASC LIMIT 5];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}