/**
 * Importing all the necessary modules from the angular core module
 */
import { Component, OnInit } from '@angular/core';
/**
 * Importing data service from the Model layer
 */
import { DataService } from '../data.service';
/**
 * Importing environment component from the src
 */
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-claim-status',
  templateUrl: './claim-status.component.html',
  styleUrls: ['./claim-status.component.css']
})

/**
 * Creating CliamStatus class to get the status of the user claims.
 */
export class ClaimStatusComponent implements OnInit {
  /**
   * @var:claimId,activeIndex,items,status,baseApiUrl
   */
  claimId: number;
  activeIndex: number;
  items: Array<object>;
  status: string;
  baseApiUrl: string;
  constructor(private _service: DataService) {
    /**
     * Assigning empty array to the items variable
     * Assigning gloabal baseApiUrl to the local baseApiUrl variable
     */
    this.items = [];
    this.baseApiUrl = environment.baseApiUrl;
  }

  /**
   * Method to get the status of the cliam by providing claimId.
   */
  tarckstatus = () => {
    /**
     * Calling httpGetRequest method of data service by injecting it to this component.
     * While calling passing the baseApiUrl,claimId as an argument.
     * @param:baseApiUrl,claimId
     * calling getStatusMessage to get the updated status of the particular claim
     */
    this._service.httpGetRequest(this.baseApiUrl + `api/claims/${this.claimId}/status`).subscribe((data) => {
      this.status = data['statusMessage'];
      this.getStatusMessage();
    })
  }

  /**
   * Method to get the status of the claimed application
   */
  getStatusMessage = () => {
    this.items = [{
      label: 'Pending',
      command: () => {
        this.activeIndex = 0;
      }
    },
    {
      label: '1st Level Approval',
      command: () => {
        this.activeIndex = 1;
      },

    },
    {
      label: 'Approved',
      command: () => {
        this.activeIndex = 2;
      },

    },
    {
      label: 'Rejected',
      command: () => {
        this.activeIndex = 3;
      }
    }
    ];
    /**
     * Writing switch case to compare the status and assigning the index value based on the status
     */
    switch (this.status) {
      case "PENDING":
        this.activeIndex = 0;
        break;
      case "FIRST_LEVEL_APPROVED":
        this.activeIndex = 1;
        break;
      case "SECOND_LEVEL_APPROVED":
        this.activeIndex = 2;
        break;
      case "FIRST_LEVEL_REJECTED":
        this.activeIndex = 3;
        break;
      case "SECOND_LEVEL_REJECTED":
        this.activeIndex = 3;
        break;
    }
  }

  /**
    * This is the default method which is called by the angular when the component is loaded
    */
  ngOnInit() {
    /**
     * calling getStatusMessage method while the component is loaded
     */
    this.getStatusMessage();
  }

}
