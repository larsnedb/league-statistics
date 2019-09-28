import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../services/match.service';
import {MatchReport} from '../../models/match-report.model';
import {LeagueEntry} from '../../models/league-entry.model';

@Component({
  selector: 'app-teams-view',
  templateUrl: './teams-view.component.html',
  styleUrls: ['./teams-view.component.css']
})
export class TeamsViewComponent implements OnInit {

  constructor(private matchService: MatchService) {
  }

  // matches: MatchReport[];
  columnsToDisplay: string[] = ['teamName', 'matches', 'victories', 'victory-penalty', 'loss-penalty', 'loss', 'goalsFor',
    'goalsAgainst', 'goalDiff', 'points'];
  league: LeagueEntry = {};
  standings: LeagueEntry[] = [];
  match: MatchReport;


  ngOnInit() {
    this.match = this.matchService.getMatch(1331202005);


    const league: LeagueEntry = {};
    // this.matches.forEach(match => {

    const homeTeam = this.match.info[0].HomeTeamName;
    const awayTeam = this.match.info[0].AwayTeamName;
    const endResult = this.match.info[0].EndResult.split('-');


    league.teamName = homeTeam;

    if (!league.stats) {
      this.initStats(league);
    }

    if (endResult[0] > endResult[1]) {
      league.stats.goalsAgainst += parseInt(endResult[1], 10);
      league.stats.goalsFor += parseInt(endResult[0], 10);
      league.stats.points += 3;
      league.stats.matchesPlayed++;
      league.stats.victories++;

    } else if (endResult[0] < endResult[1]) {


    }
    this.standings.push(league);

  }

  private initStats(league: LeagueEntry) {
    league.stats = {
      matchesPlayed: 0,
      victories: 0,
      penaltyVictories: 0,
      losses: 0,
      lossPenalties: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      points: 0
    };
  }
}
