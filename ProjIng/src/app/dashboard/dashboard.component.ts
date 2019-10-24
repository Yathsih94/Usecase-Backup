/**
 * Importing all the necessary modules from the angular core module
 */
import { Component, OnInit } from '@angular/core';
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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService]
})

/**
 * Creating class for approver dashboard 
 */
export class DashboardComponent implements OnInit {
  /**
   * Creating variables
   * @var :userid,response,display,display1 and  baseApiUrl
   */
  userId: number;
  response: Array<object>;
  display: boolean;
  display1: boolean;
  baseApiUrl: string;
  constructor(private _service: DataService, private messageService: MessageService) {
    /**
     * Assianing values to the variable
     * Assigning global baseApiUrl to the local variable 
     */
    this.display = false;
    this.display1 = false;
    this.baseApiUrl = environment.baseApiUrl;
  }

  /**
   * Creating get claims method to get all the claim details from the service 
   */
  getClaims = () => {
    /**
     * Calling httpGetRequest method of data service to get the claims list as response from the service
     * @param:baseApiUrl,userid
     */
    this._service.httpGetRequest(this.baseApiUrl + `api/users/${this.userId}/claims`).subscribe((data) => {
      this.response = data;
    })
  }

  /**
   * Cancel method to hide the popup
   */
  cancel = () => {
    this.display1 = true;
  }

  /**
   * reject method to reject the claim by approver after the application review
   * @param:claimid,reason
   */
  reject = (claimId, reason) => {
    let requsetObject = {
      claimId: claimId,
      claimStatus: 'REJECT',
      comments: reason
    }
    /**
     * Calling httpPutRequest method of data service to update the claim status as reject
     * @param:baseApiUrl,userId,requestObject
     */
    this._service.httpPutRequest(this.baseApiUrl + `api/users/${this.userId}/claims`, requsetObject).subscribe((data) => {
      if (data['statusCode'] == 200) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: data['statusMessage'] });
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: data['Message'] });
      }
    })
    this.display1 = false;
    setTimeout(() => {
      this.getClaims();
    }, 3000)
  }

  /**
   * Method to display the popup
   */
  openPopUp = () => {
    this.display = true;
  }

  /**
   * Method to approve the claim by approver after application review
   */
  approves = (claimId, comments) => {
    let requestObject = {
      claimId: claimId,
      claimStatus: 'APPROVE',
      comments: comments
    }
    /**
     * Calling httpPutRequest method of data service to update the claim status as approve
     * @param:baseApiUrl,userId,requestObject
     */
    this._service.httpPutRequest(this.baseApiUrl + `api/users/${this.userId}/claims`, requestObject).subscribe((data) => {
      if (data['statusCode'] == 200) {
        this.messageService.add({ severity: 'success', summary: 'Success Message', detail: data['statusMessage'] });
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error Message', detail: data['Message'] });
      }
    })
    this.display = false;
    setTimeout(() => {
      this.getClaims();
    }, 3000)
  }

  /**
   * This is the default method which is called by the angular when the component is loaded
   */
  ngOnInit() {
    /**
     * Getting the userId from the session storage and assigning it to userId variable
     */
    this.userId = JSON.parse(sessionStorage.getItem("User"));
    /**
     * Calling getClaims method to get the claims list.
     */
    this.getClaims();
  }
}
