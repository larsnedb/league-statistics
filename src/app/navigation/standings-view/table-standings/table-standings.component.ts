import {Component, Input, OnInit} from '@angular/core';
import {LeagueEntry} from '../../../models/league-entry.model';
import {DataSeriesUtil} from '../../utils/data-series.util';

@Component({
  selector: 'app-table-standings',
  templateUrl: './table-standings.component.html',
  styleUrls: ['./table-standings.component.css']
})
export class TableStandingsComponent implements OnInit {

  constructor() {
  }

  @Input() matchData: LeagueEntry[];

  columnsToDisplay: string[] = ['teamName', 'matches', 'victories', 'victory-penalty', 'loss-penalty', 'loss', 'goalsFor',
    'goalsAgainst', 'goalDiff', 'points'];

  ngOnInit() {
    this.matchData
      .sort((a, b) =>
        (this.getSum(a.stats.points) < this.getSum(b.stats.points) ? 1 : -1));
        // this does not account for neither goal difference or innbyrdes oppgjør
  }

  private getSum(numbers: number[]): number {
    return DataSeriesUtil.sumValues(numbers);
  }
}
