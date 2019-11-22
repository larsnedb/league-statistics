import {Component, OnInit} from '@angular/core';
import {MatchSmallerService} from '../../services/match-smaller.service';
import {MatchService} from '../../services/match.service';
import {MatchReport} from '../../models/match-report.model';
import {ExtractPlayerInfoService} from '../../services/extracts/extract-player-info.service';
import {MatchPlayer} from '../../models/match-player.model';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {

  pointsPerPlayer: Map<string, MatchPlayer[]>;

  constructor(private matchService: MatchService,
              private matchesPerPlayerService: MatchSmallerService,
              private playerInfoService: ExtractPlayerInfoService) {
  }

  ngOnInit() {
    const allMatches: MatchReport[] = this.matchesPerPlayerService.getAllMatches();
    const selectedMatch = allMatches[0];

    const matches = this.playerInfoService.getPlayersPerTeamName(selectedMatch);
    const homeData = matches.values().next();
    this.pointsPerPlayer = this.groupPointsByPlayer(homeData.value);
  }

  private groupPointsByPlayer(players: MatchPlayer[]): Map<string, MatchPlayer[]> {
    const pointsPerPlayer: Map<string, MatchPlayer[]> = new Map();
    players.forEach(player => {
      if (pointsPerPlayer.get(player.FullName)) {
        const existingPlayer = pointsPerPlayer.get(player.FullName);
        existingPlayer.push(player);
      } else {
        pointsPerPlayer.set(player.FullName, [player]);
      }
    });
    return pointsPerPlayer;
  }

}
