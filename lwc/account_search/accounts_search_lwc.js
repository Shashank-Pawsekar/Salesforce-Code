import { LightningElement,wire } from 'lwc';
import accQuery from '@salesforce/apex/accouontsearch_lwc_class.accQuery';

export default class Accounts_search_lwc extends LightningElement {
    numberOfEmployee=null;
    handlechange(event){
        this.numberOfEmployee = event.detail.value;
    }
    reset(){
        this.numberOfEmployee = null;
    }
    @wire(accQuery,{numberOfEmp: '$numberOfEmployee'}) accounts;
}