import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-credentials',
  templateUrl: './user-credentials.component.html',
  styleUrls: ['./user-credentials.component.css']
})
export class UserCredentialsComponent implements OnInit {
  userObject = [];
  constructor(private _service: DataService) { }



  ngOnInit() {
    this.userObject = this._service.userObj;
    console.log(this.userObject);
  }

}
