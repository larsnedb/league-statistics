import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../services/match.service';
import {LeagueEntry} from '../../models/league-entry.model';
import {DataSeriesUtil} from '../utils/data-series.util';

@Component({
  selector: 'app-teams-view',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css']
})
export class StandingsComponent implements OnInit {


  constructor(private matchService: MatchService) {
  }

  matches: LeagueEntry[];
  columnsToDisplay: string[] = ['teamName', 'matches', 'victories', 'victory-penalty', 'loss-penalty', 'loss', 'goalsFor',
    'goalsAgainst', 'goalDiff', 'points'];

  ngOnInit() {
    this.matches = this.matchService.getSummaryPerTeam()
      .sort((a, b) =>
        (a.stats.points < b.stats.points)
          ? 1 : (this.getGoalDifference(a) < this.getGoalDifference(b)) ? 1 : -1);
  }

  private getGoalDifference(entry: LeagueEntry) {
    return this.getSum(entry.stats.goalsFor) - this.getSum(entry.stats.goalsAgainst);
  }

  private getSum(values: number[]) {
    return DataSeriesUtil.sumValues(values);
  }
}
