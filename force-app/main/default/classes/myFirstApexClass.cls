public with sharing class myFirstApexClass {
    public List<Account> getAccountName() {
        return [SELECT name FROM Account];
    }
}