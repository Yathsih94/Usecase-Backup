import { Component, OnInit } from '@angular/core';
import { CartService } from '../home/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count: number = 0;
  constructor(private _service: CartService) { }


  ngOnInit() {
    this._service.counts.subscribe((resp) => {
      if (resp == true) {
        this.count++;
      }
      else if (resp == false) {
        this.count--
      }
      else if (resp == -1) {
        this.count = 0
      }



    });
  }

}
