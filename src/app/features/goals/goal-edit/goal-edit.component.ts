import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/entities/category.entity';
import { CategoriesService } from '../../../services/categories.service';
import { ScopesService } from 'src/app/services/scopes.service';
import { Scope } from 'src/app/entities/scope.entity';
import { GoalState } from 'src/app/entities/goal-state.entity';
import { GoalStatesService } from 'src/app/services/goal-states.service';
import { Goal } from 'src/app/entities/goal.entity';
import { GoalsService } from 'src/app/services/goals.service';

@Component({
  selector: 'app-goal-edit',
  templateUrl: './goal-edit.component.html',
  styleUrls: ['./goal-edit.component.css']
})
export class GoalEditComponent implements OnInit {

  goal: Goal;
  scopes: Scope[];
  states: GoalState[];
  categories: Category[];

  constructor(
    private goalsService: GoalsService,
    categoriesService: CategoriesService,
    scopesService: ScopesService,
    goalStatesService: GoalStatesService) {
    this.categories = categoriesService.getAll();
    this.scopes = scopesService.getAll();
    this.states = goalStatesService.getAll();
  }

  ngOnInit() {
    this.clear();
  }

  save(): void {
    this.goalsService.add(this.goal).then(() => this.clear());
  }

  clear(): void {
    this.goal = new Goal();
  }

}
