import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModule } from 'primeng/dialog';

import { DailogBoxComponent } from './dailog-box.component';
import { FormsModule } from '@angular/forms';

describe('DailogBoxComponent', () => {
  let component: DailogBoxComponent;
  let fixture: ComponentFixture<DailogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DialogModule, FormsModule],
      declarations: [DailogBoxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
