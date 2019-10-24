import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SecurityGuard } from './security.guard';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';

import {ToastModule} from 'primeng/toast';
import { ForgotComponent } from './forgot/forgot.component';


const routes:Routes=[
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  },
  {
    path:'home', component:HomeComponent,
    canActivate:[SecurityGuard]
  },
  {
    path:'forgotPassword', component:ForgotComponent
  },
  {
    path:'**', redirectTo:'login'
  }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    CardModule,DialogModule,
    ConfirmDialogModule,
    MenubarModule,
    ToastModule,
    ReactiveFormsModule
  ],

  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
