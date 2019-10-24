import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, CardModule, ToastModule, HttpClientModule, RouterTestingModule.withRoutes([])],
      providers: [MessageService]
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

  it('should have base url', () => {
    expect(component.baseApiUrl).toEqual(environment.baseApiUrl);
  })

  it('should call login method', () => {
    expect(component.logIn).toBeTruthy();
  })
});
