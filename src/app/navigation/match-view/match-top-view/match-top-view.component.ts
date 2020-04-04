import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../../services/match.service';
import {MatchReport} from '../../../models/match-report.model';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-top-view.component.html',
  styleUrls: ['./match-top-view.component.css']
})
export class MatchTopViewComponent implements OnInit {

  matches: MatchReport[];
  columnsToDisplay: string[] = ['date', 'homeTeam', 'awayTeam', 'location', 'result'];

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
    this.matches = this.matchService.getAllMatches();
  }
}
