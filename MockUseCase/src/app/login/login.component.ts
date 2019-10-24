import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  constructor(private _service: DataService, private _router: Router, private messageService: MessageService) { }

  login = () => {
    this._service.getUser(this.userName, this.password).subscribe((data) => {

      if (data['statusCode'] == 200) {
        this._service.display = false;
        this._router.navigate(['customer-home', data['cif']]);
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Invalid Credentials', detail: 'Please Try again..!' });
        this.userName = "";
        this.password = "";
      }


    })

  }

  ngOnInit() {
  }

}
