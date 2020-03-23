import { TestBed } from '@angular/core/testing';

import { GoalStatesService } from './goal-states.service';

describe('GoalStatesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoalStatesService = TestBed.get(GoalStatesService);
    expect(service).toBeTruthy();
  });
});
