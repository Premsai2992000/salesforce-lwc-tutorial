import { LightningElement,wire } from 'lwc';
import getAccountName from '@salesforce/apex/AccountController.getAccountName';

export default class WireDecorExample extends LightningElement {

    listOfAccountName = [];

    @wire(getAccountName)
    getAccountsHandler(response){
        const {data,error} = response;
        console.log("data sample",data)

        if(data){
            this.listOfAccountName = data;
        }
        else{
            console.error(error)
        }
    }
}