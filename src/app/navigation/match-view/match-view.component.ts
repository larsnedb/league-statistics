import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../services/match.service';
import {MatchReport} from '../../models/match-report.model';
import {MatchInfo} from '../../models/match-info.model';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent implements OnInit {

  matches: MatchReport[];
  matchInfo: MatchInfo;
  columnsToDisplay: string[] = ['date', 'homeTeam', 'awayTeam', 'location'];

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
    this.matches = this.matchService.getAllMatches();
    this.matchInfo = this.matches[0].info[0];
  }
}
