import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmationService } from 'primeng/api';


import { HeadingComponent } from './heading.component';


describe('HeadingComponent', () => {
  let component: HeadingComponent;
  let fixture: ComponentFixture<HeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ConfirmDialogModule, RouterTestingModule.withRoutes([])],
      declarations: [HeadingComponent],
      providers: [ConfirmationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
