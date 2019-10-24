/**
 * Importing all the necessary modules from the angular core module
 */
import { Component, OnInit } from '@angular/core';
/**
 * Importing data service from the Model layer
 */
import { DataService } from '../data.service';
/**
 * Importing router method from angular/router package
 */
import { Router } from '@angular/router';
/**
 * Importing FormBuilder,validators method from angular/forms package 
 */
import { FormBuilder, Validators } from '@angular/forms';
/**
 * Importing third party primeNg components
 */
import { MessageService } from 'primeng/api';
/**
 * Importing environment component from the src
 */
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/**
 * Creating login class for user to login
 */
export class LoginComponent implements OnInit {
  /**
   * Creating Variables for email and password field 
   * @var :email,password,baseApiUrl;
   */
  email: string;
  password: string;
  baseApiUrl: string;
  constructor(
    private _service: DataService,
    private _route: Router,
    private _builder: FormBuilder,
    private messageService: MessageService) {
    /**
     * Assigning global baseApiUrl to the local variable 
     */
    this.baseApiUrl = environment.baseApiUrl;
  }

  /**
   * Sending credentials to backend and getting response
   */
  logIn = () => {
    let requestObject = {
      email: this.email,
      password: this.password
    }

    /**
     * Calling httpPostRequest to post the request object to verify the emailid and password
     */
    this._service.httpPostRequest(this.baseApiUrl + 'login', requestObject).subscribe((data) => {

      if (data['statusCode'] == 200) {
        sessionStorage.setItem("User", data['userId']);
        this._service.updateLoginStatus(true);
        this._route.navigate(['dashboard'])
      }
      else {
        this.messageService.add({ severity: 'warn', summary: 'Warn Message', detail: data['message'] });
      }
    });
  }

  /**
   * Writting validation for email and password using reactive form validations
   */
  loginForm = this._builder.group({
    mail: ['', Validators.required],
    password: ['', Validators.required],
  })

  ngOnInit() {
  }

}
