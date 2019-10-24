import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

/**
 * Creating class for Header
 */
export class HeaderComponent implements OnInit {
  /**
   * @var :display
   */
  display: boolean;
  constructor(private _service: DataService) { }

  /**
   * Method to subscribe the login status and assigning the response data to display variable
   * @var :display
   */
  getLoginStatus = () => {
    this._service.loginStatus.subscribe(data => {
      this.display = data;
    })
  }
  ngOnInit() {
    // this._service.check();
    this.getLoginStatus();

  }

}
