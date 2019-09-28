import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../services/match.service';
import {ComplexMatchReport} from '../../models/complex-match-report.model';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent implements OnInit {

  matches: ComplexMatchReport[];
  columnsToDisplay: string[] = ['date', 'homeTeam', 'awayTeam', 'location'];

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
    this.matches = this.matchService.getAllMatches();
  }
}
