import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

/*Importing PrimeNG Modules */
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LeaveComponent } from './leave/leave.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';

import { HttpClientModule } from '@angular/common/http';
import { DatePickerComponent } from './date-picker/date-picker..component';



@NgModule({
  declarations: [
    AppComponent,
    LeaveComponent,
    DatePickerComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    FormsModule,
    RouterModule,
    RoutingModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    DialogModule,
    MessagesModule,
    MessageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
