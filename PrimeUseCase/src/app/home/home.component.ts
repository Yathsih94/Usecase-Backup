import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userName:string;
movies:any;

display: boolean = false;
items: MenuItem[];
  constructor(private _router:Router,private confirmationService: ConfirmationService,private _service:MovieService) { }

  logout=()=>{
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

  ngOnInit() {
  this.userName=sessionStorage.getItem("key")
  this._service.getMoviesFromAPI().subscribe((data)=>
  {
    console.log(data)
    this.movies=data
    console.log(this.movies)
  })
   }
  
  }


