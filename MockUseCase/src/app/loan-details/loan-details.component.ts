import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {
  cols: any[];
  loanId: number;
  loanDetails;
  constructor(private _service: DataService, private _route: ActivatedRoute) {
    this.cols = [

      { field: 'paymentDate', header: 'Payment Date' },
      { field: 'beginningBalance', header: 'Beginning Balance' },
      { field: 'scheduledPayment', header: 'Scheduled Payment' },
      { field: 'principalAmount', header: 'Principal Amount' },
      { field: 'interestAmount', header: 'Interest Amount' },
      { field: 'endingBalance', header: 'Ending Balance' },
      { field: 'status', header: 'Payment Status' },

    ]
  }

  ngOnInit() {
    this.loanId = this._route.snapshot.params['id'];
    console.log("loanid in component", this.loanId)
    this._service.getLoanDetails(this.loanId).subscribe((data) => {
      console.log(data);

      if (data['statusCode'] == 200) {
        console.log("hello", data['loanDetail']);
        this.loanDetails = data['loanDetail'];
      }

    })
  }

}
