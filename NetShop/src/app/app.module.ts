import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './home/product/product.component';
import { CartComponent } from './home/cart/cart.component';
import { PaymentComponent } from './home/payment/payment.component';
import { HttpClientModule } from '@angular/common/http';


/*Imported custom module for third party components */
import { MyprimeModule } from './myprime/myprime.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    CartComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MyprimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
