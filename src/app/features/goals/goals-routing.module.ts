import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalEditComponent } from './goal-edit/goal-edit.component';
import { GoalsHomeComponent } from './goals-home/goals-home.component';
import { GoalsNavComponent } from './goals-nav/goals-nav.component';


const routes: Routes = [
    {
      path: '',
      component: GoalsNavComponent,
      children: [
        {
          path: '',
          component: GoalsHomeComponent
        },
        {
          path: 'edit',
          component: GoalEditComponent
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }
