import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dailog-box',
  templateUrl: './dailog-box.component.html',
  styleUrls: ['./dailog-box.component.css']
})
export class DailogBoxComponent implements OnInit {

  @Input() show: boolean = false;
  @Input() isUpdate: boolean = false;
  @Input() header: string;

  @Input() id;
  @Input() sapid;
  @Input() name;
  @Input() email;
  @Input() qual;
  @Input() desig;
  @Input() phone;

  @Output() addEmpFun = new EventEmitter();
  @Output() updateEmpFun = new EventEmitter();

  constructor() { }

  addEmp(sapid, name, email, qual, desig, phone) {
    let obj = {
      sapid: sapid,
      name: name,
      email: email,
      qualification: qual,
      designation: desig,
      phone: phone,
    }
    this.addEmpFun.emit(obj);
  }

  updateEmp(ids, sapid, name, email, qual, desig, phone) {


    let obj = {
      id: ids,
      sapid: sapid,
      name: name,
      email: email,
      qualification: qual,
      designation: desig,
      phone: phone,
    }
    this.updateEmpFun.emit(obj);

  }



  ngOnInit() {


  }

}
