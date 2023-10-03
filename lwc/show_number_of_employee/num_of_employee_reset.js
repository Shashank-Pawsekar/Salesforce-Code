import NumberOfEmployees from '@salesforce/schema/Account.NumberOfEmployees';
import { LightningElement } from 'lwc';

export default class Num_of_employee_reset extends LightningElement {

    numberOfEmployees = null;

    handleChange(event){
        this.numberOfEmployees = event.detail.value;
    } 

    reset(){
        this.numberOfEmployees = null;
    }
}