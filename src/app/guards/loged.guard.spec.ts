import { TestBed, async, inject } from '@angular/core/testing';

import { LogedGuard } from './loged.guard';

describe('LogedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogedGuard]
    });
  });

  it('should ...', inject([LogedGuard], (guard: LogedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
