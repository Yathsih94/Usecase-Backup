import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  constructor(private _router: Router, private confirmationService: ConfirmationService) { }

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Logout?',
      accept: () => {
        sessionStorage.removeItem("key")
        this._router.navigate(['login'])
      }
    });
  }

  ngOnInit() {
  }

}
