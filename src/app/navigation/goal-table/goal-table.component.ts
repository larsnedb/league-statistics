import {Component, Input, OnInit} from '@angular/core';
import {Goal} from '../../models/goal.model';

@Component({
  selector: 'app-goal-table',
  templateUrl: './goal-table.component.html',
  styleUrls: ['./goal-table.component.css']
})
export class GoalTableComponent implements OnInit {

  constructor() {
  }

  @Input() goals: Goal[];

  columnsToDisplay = ['time', 'scorer', 'assist', 'team', 'partial_result'];

  ngOnInit() {
  }

}
