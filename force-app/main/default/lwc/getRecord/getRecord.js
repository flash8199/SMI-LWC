import { LightningElement, wire, api} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class GetRecord extends LightningElement {

    @api recordId;
    @wire( getRecord, { recordId: '$recordId',
            layoutTypes: ['Full','Compact'],
            mode: ['View', 'Edit', 'Create']})

        wiredRecord({data, error}){
            if(data){
                console.log('Record Info', data);
            }

            if(error){

                console.log(error);

            }
        }
}