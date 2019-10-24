import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {
  cif: number;
  loans;
  loanId: number;
  cols: any[];
  constructor(private _route: ActivatedRoute, private _service: DataService, private _router: Router) {
    this.cols = [

      { field: 'loanId', header: 'Loan ID' },
      { field: 'propertyAddress', header: 'Property Address' }
    ];
  }

  /*Function to navigate to loan details page*/
  viewLoanDetails = () => {
    this._router.navigate(['loan-details', this.loanId]);
  }

  ngOnInit() {
    this.cif = this._route.snapshot.params['id'];
    this._service.getLoans(this.cif).subscribe((data) => {
      console.log("custome home data", data['loanDetailsResponse'])
      this.loans = data['loanDetailsResponse'];
      this.loanId = this.loans[0].loanId;
      console.log("loan idddd", this.loanId)
    })

  }

}
