import { LightningElement } from 'lwc';

export default class ConditionalStatementExample extends LightningElement {

    isVisible = true;
    handleClick(){
        if(this.isVisible == true){
            this.isVisible = false;
            console.log("visibility",this.isVisible)
        }
        else{
            this.isVisible = true;
            console.log("visibility",this.isVisible)
        }

    }
}