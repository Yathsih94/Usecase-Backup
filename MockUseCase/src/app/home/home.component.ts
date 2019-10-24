import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories;

  products;
  constructor(private _router: Router, private _service: DataService) { }

  /*Navigating to Description Page*/
  goToDesc = (id) => {
    console.log(id);
    this._router.navigate(['/products', id]);
  }

  /*getting all the categories from the service*/
  getCategories = () => {
    this._service.getAllCategories().subscribe((data) => {
      console.log(data.categories);

      if (data != null && data != undefined) {
        this.categories = data.categories;
      }
      else {
        console.log("Failure Response");

      }
    })
  }

  /*getting all the products from the service*/
  getProducts = (catId) => {
    console.log("catid", catId)
    this._service.getAllProducts(catId).subscribe((data) => {
      console.log(data.productDetails);
      if (data != null && data != undefined) {
        this.products = data.productDetails
      }
      else {
        console.log("Failure Response")
      }
    })
  }

  ngOnInit() {
    this.getCategories();

  }

}
