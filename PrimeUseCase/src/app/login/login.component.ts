import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:string;
pass:string;

  constructor(private _service:DataService,private _router:Router,private messageService: MessageService) { }

 
  login=()=>{
  
    this._service.getDataFromApi(this.email).subscribe((data)=>{
     console.log(data.length)
    if(data.length>0){
      if(this.pass==data[0].pass)
      {
        this._router.navigate(['home'])
        sessionStorage.setItem("key",data[0].name)
      }
      else{
       
       this.clearUser()
      }
    }
    else{
     
      this.clearUser()
    } 
    })  
  }

  clearUser=()=>{
    this.messageService.add({severity:'error', summary: 'Invalid Credentials', detail:'Please Try Again..!'});
    this.email=""
    this.pass=""
  }

  ngOnInit() {
  }

}
