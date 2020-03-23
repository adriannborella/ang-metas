import { TestBed } from '@angular/core/testing';

import { ScopesService } from './scopes.service';

describe('ScopesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScopesService = TestBed.get(ScopesService);
    expect(service).toBeTruthy();
  });
});
