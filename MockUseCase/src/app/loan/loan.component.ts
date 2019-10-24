import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { User } from './User';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css'],
  providers: [MessageService]
})
export class LoanComponent implements OnInit {
  user: User;
  title = [];
  nationality = [];
  minDate = new Date;
  emptype = [];
  maritalStatus = [];
  tenure = [];
  ages = [];

  display: boolean = false;
  constructor(private messageService: MessageService, private _service: DataService, private _router: Router) {
    this.user = new User();
    this.title = [
      { label: 'Mr.', value: 'Mr' },
      { label: 'Mrs.', value: 'Mrs' },
      { label: 'Ms.', value: 'Ms' },
      { label: 'Dr.', value: 'Dr' }
    ],
      this.nationality = [
        { label: 'India', value: 'india' },
        { label: 'Netherlands', value: 'netherlands' },
        { label: 'Germany', value: 'germany' },
        { label: 'Australia', value: 'australia' },
        { label: 'Spain', value: 'spain' },
        { label: 'Czech Republic', value: 'czech republic' }
      ],
      this.emptype = [
        { label: 'Salaried', value: 'salaried' },
        { label: 'Self Employed', value: 'self' },
        { label: 'Others', value: 'oathers' }
      ],
      this.maritalStatus = [
        { label: 'Single', value: 'Single' },
        { label: 'Married with No Kids', value: 'marriedwithnokid' },
        { label: 'Married with 1 Kid', value: 'marriedwithonekids' },
        { label: 'Married with 2 Kids', value: 'marriedwithtwokids' },
        { label: 'Married with 3 Kids or more', value: 'marriedwiththreekidsormore' },


      ],
      this.tenure = [
        { label: '10(years)', value: '10' },
        { label: '15(years)', value: '15' },
        { label: '20(years)', value: '20' },
        { label: '25(years)', value: '25' },
        { label: '30(years)', value: '30' },

      ],
      this.ages = [
        { label: '18 Year Old', value: '18' }, { label: '19 Year Old', value: '19' }, { label: '20 Year Old', value: '20' },
        { label: '21 Year Old', value: '21' }, { label: '22 Year Old', value: '22' }, { label: '23 Year Old', value: '23' },
        { label: '24 Year Old', value: '24' }, { label: '25 Year Old', value: '25' }, { label: '26 Year Old', value: '26' },
        { label: '27 Year Old', value: '27' }, { label: '28 Year Old', value: '28' }, { label: '29 Year Old', value: '29' },
        { label: '30 Year Old', value: '30' }, { label: '31 Year Old', value: '31' }, { label: '32 Year Old', value: '32' },
        { label: '33 Year Old', value: '33' }, { label: '34 Year Old', value: '34' }, { label: '35 Year Old', value: '35' },
        { label: '36 Year Old', value: '36' }, { label: '37 Year Old', value: '37' }, { label: '38 Year Old', value: '38' },
        { label: '39 Year Old', value: '39' }, { label: '40 Year Old', value: '40' }
      ]
  }

  /*calculating Down Payment and LTV*/
  calcDownPay = () => {

    let loanToValues = (this.user.loanAmount / this.user.purchasePrice) * 100;

    if (this.user.loanAmount > this.user.purchasePrice) {
      this.messageService.add({ severity: 'error', summary: 'Your Loan Amount is greater than purchase price', detail: 'Please Reduce Your Loan Amount' });

    }
    else if (loanToValues > 85) {

      this.messageService.add({ severity: 'error', summary: 'Your LTV is more than 85%', detail: 'Please Reduce Your Loan Amount' });
    }
    this.user.loanToValue = loanToValues;
    this.user.downPayment = this.user.purchasePrice - this.user.loanAmount;


  }


  /*Submitting the loan appllication to the backend and getting cif id and loanid as a response*/
  submitApplication = () => {
    console.log(this.user)
    this._service.postUserApplication(this.user).subscribe((data) => {
      console.log(data);
      if (data['statusCode'] == 200) {
        let userData = data['customerCredential']
        this._service.userObj.push(userData)
        this._router.navigate(['user-credential'])
      } else {
        let errorMsg = data['statusMessage'];
        this.messageService.add({ severity: 'error', summary: errorMsg });
      }
    });

  }

  ngOnInit() {
    this.minDate.setDate(this.minDate.getDate());
  }

}
