import { LightningElement, wire } from 'lwc';
import getAllCases from '@salesforce/apex/mentorController.getAllCases';
export default class WireMethod extends LightningElement {




    @wire(getAllCases) mentor;
}