import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MessageService, ConfirmationService } from 'primeng/api';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empData: Array<object>;
  display: boolean = false;
  display1: boolean = false;
  isUpdateForm: boolean = false;
  autoGenId: number = 50000000;

  sapid: number;
  name: string;
  email: string;
  qual: string;
  desig: string;
  phone: string;
  id: number;
  incSapId: number;
  header: string;
  cols: any[];


  constructor(private _service: DataService, private messageService: MessageService) {


  }

  show = () => {
    this.display1 = true;
    this.isUpdateForm = false;
    this.sapid = this.incSapId;
    this.name = "";
    this.email = "";
    this.qual = "";
    this.desig = "";
    this.phone = "";
    this.header = "Enter Employee Details to Add";
  }



  showDialog = (id, sapId, name, mail, qual, desig, phone) => {

    this.isUpdateForm = true;
    this.display1 = false;

    this.id = id;
    this.sapid = sapId;
    this.name = name;
    this.email = mail;
    this.qual = qual;
    this.desig = desig;
    this.phone = phone;
    this.header = "Edit Employee Details";
  }

  addEmp = (obj) => {

    this.display1 = false;
    this._service.addEmpData(obj).subscribe(() => this.getEmpData());
    this.messageService.add({ severity: 'info', summary: 'Employee Details Added Successfully' });
  }

  updateEmp = (obj) => {


    this.isUpdateForm = false;
    this._service.updateEmpData(obj.id, obj).subscribe(() => this.getEmpData());
    this.messageService.add({ severity: 'info', summary: 'Employee Details Updated Successfully' });


  }



  deleteEmp = (id) => {
    this._service.deleteEmpData(id).subscribe(() => this.getEmpData())
    this.messageService.add({ severity: 'info', summary: 'Employee Details Deleted Successfully' });
  }

  getEmpData = () => {
    this._service.getEmployees().subscribe((data) => {
      this.empData = data
      let len = data.length
      if (len == 0) {
        this.incSapId = this.autoGenId;
      }
      else {
        let datas = JSON.parse(JSON.stringify(data[len - 1]));
        this.incSapId = datas.sapid + 1;
      }

    })
  }


  ngOnInit() {

    this.cols = [
      { field: 'sapid', header: 'Sap ID' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
      { field: 'qualification', header: 'Qualification' },
      { field: 'designation', header: 'Designation' },
      { field: 'phone', header: 'Phone No' },
      { header: 'Actions' }


    ];
    this.getEmpData();
  }

}
