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
        console.log('edit',event.target.dataset.id);
    }

    recordDelete(event){
        console.log('delete');
        console.log('delete',event.target.dataset.id);
        console.log('typeof id',typeof(event.target.dataset.id));
        const deleteId = event.target.dataset.id;
        deleteRecord(deleteId).then((result) => {
            console.log('delete' - result)
            Toast.show({                
                label: `New Employee ${event.target.dataset.name} added`,
                mode: 'dismissiable',
                variant: 'success'
            });
        }).catch((error) => {
            console.log('delete error',error);
            Toast.show({
                label: `Error adding new Employee record - ${event.target.dataset.name}`,
                mode: 'dismissiable',
                variant: 'error'
            });
        })
    }

}