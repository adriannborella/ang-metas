import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalEditComponent } from './features/goals/goal-edit/goal-edit.component';


const routes: Routes = [
  { path: 'goal-edit', component: GoalEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
