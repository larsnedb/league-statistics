import {Component, Input, OnInit} from '@angular/core';
import {MatchPens} from '../../models/match-pens.model';
import {PenaltyObject} from '../../models/penalty-object.model';

@Component({
  selector: 'app-penalties-table',
  templateUrl: './penalties-table.component.html',
  styleUrls: ['./penalties-table.component.css']
})
export class PenaltiesTableComponent implements OnInit {

  constructor() {
  }

  @Input() matchPenalties: MatchPens;

  columnsToDisplay: string[] = ['time', 'player', 'penaltyDuration', 'reason', 'team'];

  penalties: PenaltyObject[] = [];

  ngOnInit() {

    const homeTeam = this.matchPenalties.HomeTeam;
    const awayTeam = this.matchPenalties.AwayTeam;

    this.matchPenalties.Penalties.forEach(penalty => {
      if (penalty.HomeTime && penalty.HomePenalty) {
        this.penalties.push(this.createPenaltyObject(homeTeam, penalty.HomeTime, penalty.HomePenalty));
      }
      if (penalty.AwayTime && penalty.AwayPenalty) {
        this.penalties.push(this.createPenaltyObject(awayTeam, penalty.AwayTime, penalty.AwayPenalty));
      }
    });

    this.penalties.sort(((a, b) => this.compare(a.time, b.time)));
  }

  private createPenaltyObject(team: string, time: string, penalty: string): PenaltyObject {
    const penaltyStrings = penalty.split(',');
    const player = penaltyStrings[0];
    const penaltyDuration = penaltyStrings[1];
    const reason = penaltyStrings[2];
    return {team, time, player, penaltyDuration, reason};
  }


  private compare(a: string, b: string) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
}
