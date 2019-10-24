import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimComponent } from './claim.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


describe('ClaimComponent', () => {
  let component: ClaimComponent;
  let fixture: ComponentFixture<ClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimComponent],
      imports: [FormsModule, HttpClientModule, CalendarModule, DropdownModule, MessagesModule, ToastModule],
      providers: [MessageService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
