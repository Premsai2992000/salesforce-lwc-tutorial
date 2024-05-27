import { LightningElement, track } from 'lwc';
import empName from '@salesforce/schema/Employee__c.Name'
import empEmail from '@salesforce/schema/Employee__c.Employee_Email__c'
import empPhone from '@salesforce/schema/Employee__c.Employee_Phone__c'
import EmployeeController from '@salesforce/apex/EmployeeController.EmployeeController'
import Toast from 'lightning/toast'

export default class EmployeeLwc extends LightningElement {

    @track empDetails = {
        empName: empName,
        empEmail: empEmail,
        empPhone: empPhone
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
            empName: this.empDetails.empName,
            empEmail: this.empDetails.empEmail,
            empPhone: this.empDetails.empPhone
        }).then(result =>{
            Toast.show({                
                label: `New Employee ${this.empDetails.empName} added`,
                mode: 'dismissiable',
                variant: 'success'
            });
        })
        .catch(error =>{
            Toast.show({
                label: `Error adding new Employee record - ${this.empDetails.empName}`,
                mode: 'dismissiable',
                variant: 'error'
            });
        })
    }
}