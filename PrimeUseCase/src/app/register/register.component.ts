import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './User';
import { DataService } from '../data.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User;
  display: boolean = false;

  constructor(private _router:Router,private _service:DataService,private messageService: MessageService) {
    this.user=new User()
   }

   register=()=>{
     
    console.log(this.user)
    if((this.user.name&&this.user.email&&this.user.pass&&this.user.phone)==null)
    {
      this.messageService.add({severity:'error', summary: 'All the fields are mandatory', detail:'Please Enter all the fields..!'});
    }
    else{
    this._service.postDataToApi(this.user).subscribe((data)=>console.log(data))
    this.display = true;
    //this._router.navigate(["/login"])

    }

  
  
  }
  confirm=()=>{
    this.display=false;
    this._router.navigate(["/login"])
  }

  
  ngOnInit() {
  }

}
