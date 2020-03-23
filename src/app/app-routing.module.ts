import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalEditComponent } from './features/goals/goal-edit/goal-edit.component';


const routes: Routes = [
  { path: 'goal-edit', component: GoalEditComponent },
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
