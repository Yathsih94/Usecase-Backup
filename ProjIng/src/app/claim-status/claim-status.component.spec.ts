import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimStatusComponent } from './claim-status.component';
import { FormsModule } from '@angular/forms';
import { StepsModule } from 'primeng/steps';
import { HttpClientModule } from '@angular/common/http';

describe('ClaimStatusComponent', () => {
  let component: ClaimStatusComponent;
  let fixture: ComponentFixture<ClaimStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimStatusComponent],
      imports: [FormsModule, StepsModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
