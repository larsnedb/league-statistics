import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatchService} from '../../services/match.service';
import {MatchReport} from '../../models/match-report.model';
import {Goal} from '../../models/goal.model';
import {MatchPens} from '../../models/match-pens.model';
import {MatchInfo} from '../../models/match-info.model';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {

  constructor(private matchService: MatchService,
              private activatedRoute: ActivatedRoute) {
  }

  match: MatchReport;
  goals: Goal[];
  penalties: MatchPens;
  matchInfo: MatchInfo;

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.match = this.matchService.getMatch(parseInt(id, 10));
    this.goals = this.match.Goals[0].GoalsInOrder;
    this.penalties = this.match.pens[0];
    this.matchInfo = this.match.info[0];
  }

  // todo larsne All matchReport properties are wrapped in single list. Annoying when propagating data to view, to always do [0]
}
