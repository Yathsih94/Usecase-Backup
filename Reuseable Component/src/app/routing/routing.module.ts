import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LeaveComponent } from '../leave/leave.component';
import { AppComponent } from '../app.component';
import { DatePickerComponent } from '../date-picker/date-picker..component';


/*Routing Configuaration */

const routes: Routes = [
  {
    path: 'leave', component: LeaveComponent,
    children: [{
      path: 'data', component: DatePickerComponent
    }]
  }



]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
