import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../services/match.service';
import {LeagueEntry} from '../../models/league-entry.model';

@Component({
  selector: 'app-teams-view',
  templateUrl: './teams-view.component.html',
  styleUrls: ['./teams-view.component.css']
})
export class TeamsViewComponent implements OnInit {


  constructor(private matchService: MatchService) {
  }

  matches: LeagueEntry[];
  columnsToDisplay: string[] = ['teamName', 'matches', 'victories', 'victory-penalty', 'loss-penalty', 'loss', 'goalsFor',
    'goalsAgainst', 'goalDiff', 'points'];

  ngOnInit() {
    this.matches = this.matchService.getLeagueTableSummaryPerTeam()
      .sort((a, b) =>
        (a.stats.points < b.stats.points)
          ? 1 : (this.getGoalDifference(a) < this.getGoalDifference(b)) ? 1 : -1);
  }

  private getGoalDifference(entry: LeagueEntry) {
    return entry.stats.goalsFor - entry.stats.goalsAgainst;
  }
}
