import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../services/match.service';
import {MatchInfo} from '../../models/match-info.model';
import {MatchParticipants} from '../../models/match-participants.model';
import {MatchPlayer} from '../../models/match-player.model';

@Component({
  selector: 'app-players-view',
  templateUrl: './players-view.component.html',
  styleUrls: ['./players-view.component.css']
})
export class PlayersViewComponent implements OnInit {

  constructor(private matchService: MatchService) {
  }

  matchInfo: MatchInfo;
  participants: MatchParticipants;
  columnsToDisplay = ['playername', 'points', 'goals', 'assists'];

  homePlayers: MatchPlayer[];


  ngOnInit() {
    const match = this.matchService.getMatch(1331202005);

    this.matchInfo = match.info;
    this.participants = match.participants;

    this.homePlayers = match.participants.HomePlayers
      .sort(this.comparePlayersSortByPoints);
  }

  private comparePlayersSortByPoints(a: MatchPlayer, b: MatchPlayer) {
    if (a.Points > b.Points) {
      return -1;
    } else if (a.Points === b.Points) {
      if (a.Goals > b.Goals) {
        return -1;
      } else if (a.Goals === b.Goals) {
        if (a.Assists > b.Assists) {
          return -1;
        }
      }
      return 1;
    }
  }
}
