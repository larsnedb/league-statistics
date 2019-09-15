import {Component, Input, OnInit} from '@angular/core';
import {Penalty} from '../../models/penalty.model';

@Component({
  selector: 'app-penalties-table',
  templateUrl: './penalties-table.component.html',
  styleUrls: ['./penalties-table.component.css']
})
export class PenaltiesTableComponent implements OnInit {

  constructor() {
  }

  @Input() penalties: Penalty[];

  columnsToDisplay: string[] = ['awayTime', 'homeTime', 'awayPenalty', 'homePenalty'];

  ngOnInit() {
  }

}
