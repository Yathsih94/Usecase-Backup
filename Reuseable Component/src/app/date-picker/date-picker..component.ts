import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  tableData = [];
  constructor(private _service: DataService) { }

  refresh = () => {
    this.callTableData();
  }
  callTableData = () => {
    this._service.getDataFromApi().subscribe((data) => {
      this.tableData = data;
      console.log(this.tableData)
      this.tableData.forEach((element) => {
        console.log(element);
        if (element[0]) {

        }
      })


    })
  }

  ngOnInit() {
    this.callTableData();
  }

}
