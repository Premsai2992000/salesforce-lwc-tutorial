public class accountNameList {
	public List<Account> getAccountName() {
        return [SELECT name FROM Account];
    }
}