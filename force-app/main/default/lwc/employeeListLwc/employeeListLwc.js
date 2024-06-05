import { LightningElement, wire } from 'lwc';
import empListData from '@salesforce/apex/EmpDataTableController.EmpList'
import deleteRecord from '@salesforce/apex/EmployeeController.deleteRecord'
import Toast from 'lightning/toast'

const label = [
    {label: 'Id', fieldName: 'Id'},
    {label: 'Name', fieldName: 'Name'},
    {label: 'Phone', fieldName: 'Employee_Phone__c'},
    {label: 'LinkedIn Url', fieldName: 'LinkedIn_Url__c'},
    {label: 'Email', fieldName: 'Employee_Email__c'}
];

export default class EmployeeListLwc extends LightningElement {
    columnList = label;
    dataList = [];

    @wire(empListData)
    // Apex method has to be added in EmployeeDataTableController.cls
    // public static List<Employee__c> EmpList() {
    // }
    wiredData({data,error}) {
        if(data){
            this.dataList = data;
            console.log('dataList',this.dataList)
        }
        else{
            console.log('error',error);
        }
    }

    recordEdit(){
        console.log('event')
        console.log('edit',event.currentTarget.dataset.id);
    }

    recordDelete(event){
        console.log('delete',event.currentTarget.dataset.id);
        console.log('typeof id',typeof(event.currentTarget.dataset.id));
        const deleteId = event.currentTarget.dataset.id;
        console.log('delete',deleteId);
        deleteRecord({recordName: deleteId}).then((result) => {
            console.log('delete' - result)
            Toast.show({                
                label: `Employee deleted - Employee name ${deleteId}`,
                mode: 'dismissiable',
                variant: 'success'
            });
        }).catch((error) => {
            console.log('delete error',error);
            Toast.show({
                label: `Error deleting Employee - ${deleteId}`,
                mode: 'dismissiable',
                variant: 'error'
            });
        }).finally(() => {
            this.isLoading = false;
        });
    }

}