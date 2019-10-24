import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  rangeDates: Date[];
  startDate: Date;
  endDate: Date;
  userData: Array<object>;
  minDateValue = new Date();
  invalidDates: Array<Date>;
  msgs: Array<object> = [];
  retArray = [];


  constructor(private _service: DataService, private _router: Router) { }

  applyLeave = () => {
    this.startDate = this.rangeDates[0]
    this.endDate = this.rangeDates[1]

    this._service.getDataFromApi().subscribe((data) => {
      this.userData = data;
    })

    this._service.postLeavesToApi(this.startDate, this.endDate).subscribe((data) => console.log(data))
    this.msgs.push({ severity: 'info', summary: 'Leave Applied Successfully' });
    this.invalidDates = this.getDateArray(this.startDate, this.endDate)
    this._router.navigate(['leave/data'])


  }

  getDateArray = (startDate, endDate) => {

    let
      arr = new Array(),
      dt = new Date(startDate);

    while (dt <= endDate) {
      arr.push(new Date(dt));
      dt.setDate(dt.getDate() + 1);
    }

    return arr

  }

  getDateRangeFromApi = () => {
    this._service.getDataFromApi().subscribe((data) => {
      var len = data.length;
      var retArr = [];
      for (let i = 0; i <= len - 1; i++) {
        var sdate = new Date(data[i].start);
        var edate = new Date(data[i].end);
        retArr = this.getDateArray(sdate, edate)
      }


      console.log("returned array", retArr)
      this.invalidDates = retArr;
      console.log("disabled array", this.invalidDates)

    })


  }


  ngOnInit() {
    this.minDateValue.setDate(this.minDateValue.getDate())
    this.getDateRangeFromApi();
  }

}
