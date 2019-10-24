import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /**
   * @var :email,password
   */
  email: string;
  password: string;
  constructor(private _service: DataService, private _route: Router) { }

  /**
   * Sending credentials to backend and getting response
   */
  logIn = () => {
    this._service.getLoginUser(this.email, this.password).subscribe((data) => {
      console.log(data);
      if (data['statusCode'] == 200) {
        sessionStorage.setItem("key", data['userId']);
        this._service.updateLoginStatus(false);
        this._route.navigate(['home'])
      }
      else {
        alert(data['message']);
      }
    })
  }

  ngOnInit() {
  }

}
