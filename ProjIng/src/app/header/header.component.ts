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
import { ConfirmationService } from 'primeng/api';
/**
 * Importing router service from the angular/router module
 */
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ConfirmationService]
})

/**
 * Creating class for Header Component
 */
export class HeaderComponent implements OnInit {
  /**
   * @var :display,username
   */
  display: boolean;
  userName: string;
  constructor(
    private _service: DataService,
    private confirmationService: ConfirmationService,
    private _router: Router
  ) { this.userName = 'Admin' }

  /**
   * Method to subscribe the login status and assigning the response data to display variable
   * @var :display
   */
  getLoginStatus = () => {
    this._service.loginStatus.subscribe(data => {
      this.display = data;
    })
  }

  /**
   * Creating logout method to come out from the loggedin session and navigatinfg to login page
   */
  logout = () => {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Log-out?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        sessionStorage.removeItem('key');
        this._service.updateLoginStatus(false);
        this._router.navigate(['login']);
      }
    });
  }

  /**
   * Creating login method to navigate to login page
   */
  login = () => {
    /**
     * Navigating to login page
     */
    this._router.navigate(['login']);
  }

  ngOnInit() {
    /**
     * Calling getLoginStatus method when the component is loaded.
     */
    this.getLoginStatus();

  }

}
