import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  selecetedProd: Array<object> = [];
  urlPid: number;
  constructor(private _service: DataService, private _route: ActivatedRoute, private _router: Router) { }

  /*Getting Seleceted product*/
  getSelectedProd = () => {
    this._service.getSelectedProd(this.urlPid).subscribe((data) => {
      this.selecetedProd.push(data.productDescriptionDto);
    })
  }

  /*Redirecting to Customer Info Page*/
  applyForLoan = () => {
    this._router.navigate(['loan']);
  }

  ngOnInit() {
    this.urlPid = this._route.snapshot.params['id'];
    this.getSelectedProd();
  }

}
