import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ColorPickerModule } from 'primeng/colorpicker';

import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { SecurityGuard } from './security.guard';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { AdminComponent } from './admin/admin.component';
import { VipComponent } from './vip/vip.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent,
    canActivate: [SecurityGuard]
  },
  {
    path: 'admin', component: AdminComponent,
    canActivate: [SecurityGuard]
  },
  {
    path: 'vip', component: VipComponent,
    canActivate: [SecurityGuard]
  },
  {
    path: '**', redirectTo: 'login'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    VipComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    CardModule, DialogModule,
    ConfirmDialogModule,
    MenubarModule,
    ToastModule,
    HttpClientModule,
    TabViewModule,
    ToggleButtonModule,
    DropdownModule,
    ColorPickerModule


  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
