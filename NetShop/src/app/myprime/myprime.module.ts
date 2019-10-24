import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*Imported neccessary PrimeNg Modules */
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    PanelModule,
    TableModule
  ],
  exports: [
    CardModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    PanelModule,
    TableModule
  ]

})
export class MyprimeModule { }
