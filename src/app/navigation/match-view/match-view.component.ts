import {Component, OnInit} from '@angular/core';
import {Match} from '../../models/match';
import {MatchService} from '../../services/match.service';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent implements OnInit {

  dataSource: Match[];
  columnsToDisplay: string[] = ['date', 'homeTeam', 'awayTeam', 'location'];

  constructor(private matchSerice: MatchService) {
  }

  ngOnInit() {
    this.dataSource = this.matchSerice.getAllMatches();
  }
}
