import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserCredentialsComponent } from './user-credentials/user-credentials.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { LoginComponent } from './login/login.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoanComponent } from './loan/loan.component';


/* Third Party Importing Prime Ng Modules*/
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { FileUploadModule } from 'primeng/fileupload';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/components/common/messageservice';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductDetailsComponent,
    AboutUsComponent,
    LoanComponent,
    LoginComponent,
    LoanDetailsComponent,
    UserCredentialsComponent,
    CustomerHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    PanelModule,
    FileUploadModule,
    MessagesModule,
    MessageModule,
    DropdownModule,
    FormsModule,
    CalendarModule,
    InputTextModule,
    RadioButtonModule,
    ToastModule,
    TableModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
