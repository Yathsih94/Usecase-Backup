import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string;
  userInfo;
  display: boolean = false;
  slots: string;
  days;
  minDateValue = new Date();
  maxDateValue = new Date();
  dateValue: Date;
  noOfDays: number;
  slotsArray = [];
  cslot: string;
  sid: number;
  uid;
  check: boolean = false;
  historyData = [];









  constructor(private _router: Router, private confirmationService: ConfirmationService, private messageService: MessageService, private _service: DataService) {



    this.days = [
      { label: '1 Day', value: '1' },
      { label: '2 Days', value: '2' }
    ]
  }

  logout = () => {
    sessionStorage.removeItem("key")
    this._router.navigate(['login'])
  }



  showDialog() {
    this.display = true;
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Logout?',
      accept: () => {
        sessionStorage.removeItem("key")
        this._router.navigate(['login'])
      }
    });
  }

  requestSlot = () => {

    if (this.noOfDays == 1) {
      this.maxDateValue = this.dateValue
    }

    let reqSlot = {
      "start": this.dateValue,
      "end": this.maxDateValue,
      "status": "booked"
    }

    let updateSlotId = {
      "slotid": this.sid
    }
    this._service.updatetRequestSlot(this.sid, reqSlot).subscribe((data) => {
      if (data != undefined && data != null) {
        setTimeout(() => {
          this._service.updateSlotIdInUser(this.uid, updateSlotId).subscribe((data) => {
            console.log(data)
          })
        }, 1000);
      }
      console.log(data)
      this.historyData.push(data)

    })

    this.display = true;
    setTimeout(() => {
      this.callSlots();
    }, 2000)

  }





  availSlots = () => {

    this._service.getAvailSlots().subscribe((data) => {
      if (data != undefined && data != null) {
        this.slotsArray = data
        this.cslot = this.slotsArray[0].slot
        this.sid = this.slotsArray[0].id
      }
    })
  }

  callSlots = () => {
    this._service.getSlotsFromApi().subscribe((data) => {
      if (data != undefined && data != null) {
        this.slots = data
        console.log("Its called again")
        console.log(this.slots)
      }
    })
  }



  ngOnInit() {
    this.userName = sessionStorage.getItem("key")
    this.userInfo = JSON.parse(localStorage.getItem("user"))
    this.callSlots();
    this.minDateValue.setDate(this.minDateValue.getDate())
    this.maxDateValue.setDate(this.maxDateValue.getDate() + 1)
    this.availSlots();
    this.uid = this.userInfo[0].id;
  }

}