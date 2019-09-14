import {Component, OnInit} from '@angular/core';
import {Match} from '../../models/match';
import {ActivatedRoute} from '@angular/router';
import {MatchService} from '../../services/match.service';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  constructor(private matchService: MatchService,
              private activatedRoute: ActivatedRoute) {
  }

  match: Match;

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.match = this.matchService.getMatch(parseInt(id, 10));
  }
}
