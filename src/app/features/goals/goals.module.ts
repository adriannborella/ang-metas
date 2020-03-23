import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalEditComponent } from './goal-edit/goal-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [GoalEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class GoalsModule { }
