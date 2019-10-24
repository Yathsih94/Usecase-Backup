import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { MessageService } from 'primeng/components/common/messageservice';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [MessageService]
})
export class CartComponent implements OnInit {

  cartItems = []
  amount: number = 0;
  count: number = 0;


  constructor(private _router: Router, private _cartService: CartService, private messageService: MessageService) { }

  increaseQuantity = (product) => {
    if (product.quantity < 5) {
      product.quantity++;
      product.subtotal = product.quantity * product.price;
      this.calculateTotal();
    }
    else {

      this.messageService.add({ severity: 'error', summary: 'Only 5 quantities are allowed to add to cart for each product' });
    }

  }
  decreaseQuantity = (product) => {
    if (product.quantity <= 1) {
      this.remove(product);
      this.len();
    }
    else {
      product.quantity--;
      product.subtotal = product.quantity * product.price;
      this.calculateTotal();
    }
  }



  payment = (amount) => {
    this._cartService.cartAmount = amount;
    this._router.navigate(["home/payment"]);
  }

  remove = (product) => {


    let index = this.cartItems.indexOf(product);
    this.cartItems.splice(index, 1);
    this._cartService.cartCount--;
    this.calculateTotal();
    this._cartService.counts.next(false)
    this.len();


  }
  // TO calculate the total amount
  calculateTotal = () => {
    this.amount = 0;

    this._cartService.selectedItems.forEach((item) => {
      this.amount += item.quantity * item.price



    })
  }

  len = () => {
    this.count = this._cartService.cartCount
  }


  ngOnInit() {
    this.calculateTotal();
    this.cartItems = this._cartService.selectedItems
    this.len();

  }

}

