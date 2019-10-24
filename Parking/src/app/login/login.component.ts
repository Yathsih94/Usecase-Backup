import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  pass: string;


  constructor(private _service: DataService, private _router: Router, private messageService: MessageService) { }


  login = () => {

    this._service.getDataFromApi(this.email).subscribe((data) => {
      console.log(data.length)


      if (data.length > 0) {
        console.log(this.pass);
        debugger;
        if (this.pass == data[0].pass) {
          if (data[0].role == "employee") {
            this._router.navigate(['home'])
          }
          else if (data[0].role == "admin") {
            this._router.navigate(['admin'])
          }
          else if (data[0].role == "vip") {
            this._router.navigate(['vip'])
          }

          localStorage.setItem("user", JSON.stringify(data))
          sessionStorage.setItem("key", data[0].name)
        }
        else {
          this.clearUser()
        }
      }
      else {
        this.clearUser()
      }
    })
  }

  clearUser = () => {
    this.messageService.add({ severity: 'error', summary: 'Invalid Credentials', detail: 'Please Try Again..!' });
    this.email = ""
    this.pass = ""
  }

  ngOnInit() {
  }
}
