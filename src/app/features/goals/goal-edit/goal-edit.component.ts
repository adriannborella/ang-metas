import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal-edit',
  templateUrl: './goal-edit.component.html',
  styleUrls: ['./goal-edit.component.css']
})
export class GoalEditComponent implements OnInit {

  scope: string;
  scopes: string[] = ['Day', 'Week', 'Month', 'Year', 'Life'];

  constructor() { }

  ngOnInit() {
  }

}
