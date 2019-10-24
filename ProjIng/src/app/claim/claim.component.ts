/**
 * Importing angular core modules
 */
import { Component, OnInit } from '@angular/core';
/**
 * Importing Users Model 
 */
import { Users } from '../models/User';
/**
 * Importing data service from the Model layer
 */
import { DataService } from '../data.service';
/**
 * Importing third party primeNg components
 */
import { MessageService } from 'primeng/api';
/**
 * Importing environment component from the src
 */
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})

/**
 * Creating the class to write the claim for the user
 */
export class ClaimComponent implements OnInit {

  /**
   * @var:user,dischargeDates,rerenceid,listHospital,ailmentList,msgs,baseApiUrl.
   */
  user: Users;
  dischargeDates: Date;
  referenceId: string;
  listHospital: Array<object>;
  ailmentList: Array<object>;
  msgs: Array<object>;
  baseApiUrl: string;


  constructor(private _service: DataService, private messageService: MessageService) {
    /**
     * creating instance for the Users model
     * Assigning empty array to the msgs variable
     * Assigning gloabal baseApiUrl to the local baseApiUrl variable
     */
    this.user = new Users();
    this.msgs = [];
    this.baseApiUrl = environment.baseApiUrl;

  }

  /**
   *Method to validate the date
   *Applied the logic that discharge date should be greater than or equal to addmisiion date
   */
  dateValidation = () => {
    this.dischargeDates = this.user.admissionDate;
  }

  /**
   * Writing method to submit the claim application to the backend
   * 
   */
  submitClaim = () => {
    /**
     * Calling httpPostRequest method of data service to post the claim details as request to the service
     * @param:baseApiUrl
     */
    this._service.httpPostRequest(this.baseApiUrl + `api/claims`, this.user).subscribe((data) => {
      if (data['statusCode'] == 200) {
        this.referenceId = data['claimId'];
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Note Down Your Reference Id To Track the status of your application', detail: data['claimId'] });
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: data['message'] });
      }
      else {
        this.messageService.add({ severity: 'warn', summary: 'Warn Message', detail: data['message'] });
      }
    })
  }

  /**
   * This is the default method which is called by the angular when the component is loaded
   */
  ngOnInit() {
    /**
     * Calling httpGetRequest method of data service to get the list of hospitals as response from the service
     * @param:baseApiUrl
     */
    this._service.httpGetRequest(this.baseApiUrl + `api/hospitals`).subscribe((data) => {
      this.listHospital = data;
    });

    /**
     * Calling httpGetRequest method of data service to get the list of ailments as response from the service
     * @param:baseApiUrl
     */
    this._service.httpGetRequest(this.baseApiUrl + `api/ailments/`).subscribe((data) => {
      if (data['statusCode'] == 200) {
        this.ailmentList = data['ailmentList'];
      }
    })


  }

}
