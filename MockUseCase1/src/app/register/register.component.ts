import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { confirmPassValid } from './validations'
import { DataService } from '../data.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})

/**
 * RegisterComponent class to Register User
 */
export class RegisterComponent implements OnInit {
  user: User
  cpassword: string;
  constructor(private _router: Router, private _builder: FormBuilder, private _service: DataService, private messageService: MessageService) {
    this.user = new User()
  }

  /**
   * Assigning group method of FormBuilder service to a register form for validations.
   */
  regForm = this._builder.group({
    name: ['', Validators.required],
    mobile: ['', Validators.required],
    mailid: ['', Validators.required],
    pword: ['', Validators.required],
    cpword: ['', Validators.required]
  }, { validator: confirmPassValid })

  /**
   * register method to send the registered data to service file
   */
  register = () => {
    console.log(this.user)

    localStorage.setItem(this.user.email, JSON.stringify(this.user));
    this._service.postRegister(this.user).subscribe((data) => {
      console.log(data);
      if (data['statusCode'] == 200) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registered Successfully' });
        setTimeout(() => {
          this._router.navigate(['login'])
        }, 2500)
      }
      else {
        console.log("error");
      }
    })
  }


  ngOnInit() {

  }
}
