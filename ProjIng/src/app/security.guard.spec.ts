import { TestBed, async, inject } from '@angular/core/testing';

import { SecurityGuard } from './security.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('SecurityGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [SecurityGuard]
    });
  });

  it('should ...', inject([SecurityGuard], (guard: SecurityGuard) => {
    expect(guard).toBeTruthy();
  }));
});
