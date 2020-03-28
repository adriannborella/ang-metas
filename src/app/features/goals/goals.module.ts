import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalEditComponent } from './goal-edit/goal-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsHomeComponent } from './goals-home/goals-home.component';
import { GoalsNavComponent } from './goals-nav/goals-nav.component';

@NgModule({
  declarations: [GoalEditComponent, GoalsHomeComponent, GoalsNavComponent],
  imports: [
    CommonModule,
    SharedModule,
    GoalsRoutingModule
  ]
})
export class GoalsModule { }
