import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalEditComponent } from './goal-edit/goal-edit.component';


const routes: Routes = [
    {
        path: '',
        component: GoalEditComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalsRoutingModule { }
