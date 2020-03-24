import { Category } from './category.entity';
import { Scope } from './scope.entity';
import { GoalState } from './goal-state.entity';

export class Goal {
    name: string;
    category: string;
    scope: string;
    state: string;
    finishBy: Date;
}
