import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [MessageService]

})
export class PaymentComponent implements OnInit {

  constructor(private _router: Router, private messageService: MessageService, private _cartService: CartService) { }
  captcha: string;
  captchaVal: string;
  amount: number = 0;
  generateCaptcha = () => {
    let alphabets = ["a", "b", "c", "d"
      , "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
      "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ]
    let a = Math.floor(Math.random() * 10)
    let b = Math.floor(Math.random() * 10)
    let c = Math.floor(Math.random() * 10)
    let d = Math.floor(Math.random() * 10)
    let e = Math.floor(Math.random() * 10)
    return a + "" + alphabets[b] + "" + alphabets[c] + "" + d + "" + e



  }

  refresh = () => {

    this.captcha = this.generateCaptcha()
  }


  pay = () => {
    if (this.captcha == this.captchaVal) {
      this.messageService.add({ severity: 'info', summary: 'Order Placed Successfully' });
      this._cartService.selectedItems = [];
      this._cartService.cartCount = 0;

      setTimeout(() => {
        this._cartService.counts.next(-1);
        this._router.navigate(['home/product'])
      }, 2000)


    }
    else {

      this.messageService.add({ severity: 'error', summary: 'Invalid Captcha...Please Re-enter..!' });
      this.captchaVal = ""
      this.generateCaptcha();
    }
  }

  ngOnInit() {
    this.amount = this._cartService.cartAmount
    this.captcha = this.generateCaptcha();
  }
}
