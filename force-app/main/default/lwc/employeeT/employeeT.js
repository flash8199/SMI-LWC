import { LightningElement, api } from 'lwc';

export default class EmployeeT extends LightningElement {


    @api employeeRecord;

    pictureUrl = 'http://drive.google.com/uc?id=1iMOoH1ZcG_u-PUjFVQoVjePMexjEvGUf';


    handleDetails(){
        
    }

    handleOpenRecordClick() {
        
        this.dispatchEvent(new CustomEvent('employeeview', { detail: { value: this.employeeRecord.Name}}));
        
    }



}