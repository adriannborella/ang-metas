import { Injectable } from '@angular/core';
import { GoalState } from '../entities/goal-state.entity';

@Injectable({
  providedIn: 'root'
})
export class GoalStatesService {

  constructor() { }

  getAll(): GoalState[] {
    const result: GoalState[] = [];

    result.push(new GoalState('Pending', 'timer'));
    result.push(new GoalState('To Do', 'list'));
    result.push(new GoalState('In Progress','double_arrow'));
    result.push(new GoalState('Done', 'done_all'));

    return result;
  }
}
