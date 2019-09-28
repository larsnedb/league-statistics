import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../services/match.service';
import {MatchForTeam} from '../../models/match-for-team.model';

@Component({
  selector: 'app-teams-view',
  templateUrl: './teams-view.component.html',
  styleUrls: ['./teams-view.component.css']
})
export class TeamsViewComponent implements OnInit {

  constructor(private matchService: MatchService) {
  }

  matches: MatchForTeam[];
  columnsToDisplay: string[] = ['teamName', 'matches', 'victories', 'victory-penalty', 'loss-penalty', 'loss', 'goalsFor',
    'goalsAgainst', 'goalDiff', 'points'];

  ngOnInit() {
    this.matches = this.matchService.getAllMatchesList();
  }

}
