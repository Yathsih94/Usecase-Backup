import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  display: boolean = false;
  constructor(private _router: Router, private _service: DataService) { }

  login = () => {
    this._router.navigate(['login'])
  }

  ngOnInit() {
    this.display = this._service.display
  }

}
