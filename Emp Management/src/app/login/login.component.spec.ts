import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ConfirmDialogModule, FormsModule, ToastModule, HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [LoginComponent],
      providers: [MessageService, ConfirmationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Email should be undefined', () => {
    expect(component.email).toBeUndefined();
  });

  it('Password should be undefined', () => {
    expect(component.pass).toBeUndefined();
  });

  it('Should Call Clear User function', () => {
    expect(component.clearUser());
  });

  it('Should Call Login function', () => {
    expect(component.login());
  });




});
