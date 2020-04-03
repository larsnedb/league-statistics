import {Component, Input, OnInit} from '@angular/core';
import {LeagueEntry} from '../../../models/league-entry.model';
import {DataSeriesUtil} from '../../utils/data-series.util';

@Component({
  selector: 'app-cummulative-standings',
  templateUrl: './cummulative-standings.component.html',
  styleUrls: ['./cummulative-standings.component.css']
})
export class CummulativeStandingsComponent implements OnInit {

  @Input() matchData: LeagueEntry[];
  perMatchTitle = 'Cummulative standings - league progress';
  data = [];

  constructor() { }

  ngOnInit() {
    this.matchData.forEach(leagueEntry => {
      this.data.push({
        name: leagueEntry.teamName,
        series: DataSeriesUtil.mapToCummulativeDataSeries(leagueEntry.stats.points)
      });
    });
  }

}
