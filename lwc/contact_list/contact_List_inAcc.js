import { LightningElement,api,track,wire} from 'lwc';
import conlistQuery from '@salesforce/apex/contact_list_acc.contactsQuery';
export default class Contact_List_inAcc extends LightningElement {

    @api recordId;
    @track columns = 
                [ 
                    {label:'Account Id', fieldName:'AccountId', type:'text', sortable:true},
                    {label:'First Name', fieldName:'FirstName', type:'text', sortable:true},
                    {label:'Last Name', fieldName:'LastName', type:'text', sortable:true},
                    {label:'Email', fieldName:'Email', type:'email', sortable:true}
                ];

    @wire(conlistQuery,{accId:'$recordId'}) contacts;
    
}