import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { FormsModule } from '@angular/forms';


/*Importing PrimeNg Modules*/
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DailogBoxComponent } from './dailog-box/dailog-box.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    LoginComponent,
    HomeComponent,
    DailogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    FormsModule,
    ToastModule,
    HttpClientModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    DialogModule
  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
