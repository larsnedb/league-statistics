import {Component, Input} from '@angular/core';
import {LeagueEntry} from '../../../models/league-entry.model';
import {DataSeriesUtil} from '../../utils/data-series.util';

@Component({
  selector: 'app-table-standings',
  templateUrl: './table-standings.component.html',
  styleUrls: ['./table-standings.component.css']
})
export class TableStandingsComponent {

  constructor() {
  }

  @Input() matchData: LeagueEntry[];

  columnsToDisplay: string[] = ['teamName', 'matches', 'victories', 'victory-penalty', 'loss-penalty', 'loss', 'goalsFor',
    'goalsAgainst', 'goalDiff', 'points'];

  private getSum(numbers: number[]): number {
    return DataSeriesUtil.sumValues(numbers);
  }
}
