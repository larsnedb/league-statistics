import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../services/match.service';
import {Referee} from '../../models/referee.model';

@Component({
  selector: 'app-referee-view',
  templateUrl: './referee-view.component.html',
  styleUrls: ['./referee-view.component.css']
})
export class RefereeViewComponent implements OnInit {

  refData: Map<string, number> = new Map<string, number>();
  totalMatches = 0;

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
    const matches = this.matchService.getAllMatches();

    matches.forEach(match => {
      match.info.Referees.forEach(referee => {
        this.getRefName(referee);
      });
    });
  }

  private getRefName(referee: Referee) {
    this.totalMatches++;
    const refName = referee.Name.split('Dommer ')[1];
    if (this.refData.has(refName)) {
      let numberOfMatches = this.refData.get(refName);
      numberOfMatches += 1;
      this.refData.set(refName, numberOfMatches);
    } else {
      this.refData.set(refName, 1);
    }
  }
}
