import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../services/match.service';
import {MatchReport} from '../../models/match-report.model';

@Component({
  selector: 'app-teams-view',
  templateUrl: './teams-view.component.html',
  styleUrls: ['./teams-view.component.css']
})
export class TeamsViewComponent implements OnInit {

  constructor(private matchService: MatchService) {
  }

  matches: MatchReport[];
  teamNames: string[] = [];
  columnsToDisplay: string[] = ['teamName', 'matches', 'victories', 'victory-penalty', 'loss-penalty', 'loss', 'goalDiff', 'points'];

  ngOnInit() {
    this.matches = this.matchService.getAllMatches();

    const teams = new Set<string>();
    this.matches.forEach(match => {
      teams.add(match.info[0].HomeTeamName);
      teams.add(match.info[0].AwayTeamName);
    });

    teams.forEach(name => this.teamNames.push(name));

  }

}
