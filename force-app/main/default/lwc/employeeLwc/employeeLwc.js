import { LightningElement, track } from 'lwc';
import empId from '@salesforce/schema/Employee__c.Employee_Id__c'
import empName from '@salesforce/schema/Employee__c.Name'
import empEmail from '@salesforce/schema/Employee__c.Employee_Email__c'
import empPhone from '@salesforce/schema/Employee__c.Employee_Phone__c'
import EmployeeController from '@salesforce/apex/EmployeeController.EmployeeController'
import Toast from 'lightning/toast'

export default class EmployeeLwc extends LightningElement {

    @track empDetails = {
        empId: empId,
        empName: empName,
        empEmail: empEmail,
        empPhone: empPhone
    }

    empIdHandler(){
        this.empDetails.empId = event.target.value;
    }

    empNameHandler(){
        this.empDetails.empName = event.target.value;
    }

    empEmailHandler(){
        this.empDetails.empEmail = event.target.value;
    }

    empPhoneHandler(){
        this.empDetails.empPhone = event.target.value;
    }


    addEmployeeHandler(){
        EmployeeController({
            empId: this.empDetails.empId,
            empName: this.empDetails.empName,
            empEmail: this.empDetails.empEmail,
            empPhone: this.empDetails.empPhone
        }).then(result =>{
            console.log('create -',result)
            Toast.show({                
                label: `New Employee ${this.empDetails.empName} added`,
                mode: 'dismissiable',
                variant: 'success'
            });
        })
        .catch(error =>{
            console.log('error - ',error)
            Toast.show({
                label: `Error adding new Employee record - ${this.empDetails.empName}`,
                mode: 'dismissiable',
                variant: 'error'
            });
        })
    }
}