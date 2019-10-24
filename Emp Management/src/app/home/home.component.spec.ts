import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { HomeComponent } from './home.component';

import { HeadingComponent } from '../heading/heading.component';
import { DailogBoxComponent } from '../dailog-box/dailog-box.component';

import { TableModule } from 'primeng/table';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, HeadingComponent, DailogBoxComponent],
      imports: [TableModule, ConfirmDialogModule, ToastModule, DialogModule, FormsModule, HttpClientModule, RouterTestingModule.withRoutes([])],
      providers: [MessageService, ConfirmationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Call Show function', () => {
    expect(component.show());
  });

  it('Should Call Show Dailog function', () => {
    let id, sapId, name, mail, qual, desig, phone;
    expect(component.showDialog(id, sapId, name, mail, qual, desig, phone));
  });

  it('Should Call addEmp function', () => {
    let obj;
    expect(component.addEmp(obj));
  });

  it('Should Call getEmpData function', () => {

    expect(component.getEmpData());
  });

  it('Should match auto generated Sap ID', () => {
    let autoGen = 50000000;
    expect(component.autoGenId).toBe(autoGen);
  });

});
