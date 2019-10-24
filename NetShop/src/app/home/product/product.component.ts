import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CartService } from '../cart/cart.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService]
})
export class ProductComponent implements OnInit {
  products;
  selectedItems = [];
  count = 0;
  searchText: string;
  constructor(private _service: DataService, private _cartService: CartService, private messageService: MessageService) { }

  loadProducts = () => {
    this._service.getProductsFromApi().subscribe((data) => this.products = data)
  }

  addToCart = (product) => {


    let index = this._cartService.selectedItems.findIndex((data) => data.name == product.name);
    if (index != -1) {
      if (this._cartService.selectedItems[index].quantity < 5) {
        this._cartService.selectedItems[index].quantity++

        this.messageService.add({ severity: 'info', summary: product.name + ' added to cart' });
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Only 5 quantities are allowed to add to cart for each product' });
      }

    }
    else {
      this._cartService.selectedItems.push(product)
      this.count = this._cartService.selectedItems.length;
      this._cartService.cartCount = this.count;
      this._cartService.counts.next(true)
      this.messageService.add({ severity: 'info', summary: product.name + ' added to cart' });
    }

  }
  search = () =>
    this.products = this.products.filter
      (prod => prod.name.toLocaleLowerCase().split(" ")
        .join("").includes(this.searchText.toLocaleLowerCase()
          .split(" ").join("")))

  ngOnInit() {
    this.count = this._cartService.cartCount;
    this.loadProducts();
  }

}
