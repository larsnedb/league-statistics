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

  // todo Now groups all matches per player. Need to filter by team data.
  // Only fetch data for specific team name and present nicely in a table

  pointsPerPlayer: Map<string, MatchPlayer[]>;

  constructor(private matchService: MatchService,
              private matchesPerPlayerService: MatchSmallerService,
              private playerInfoService: ExtractPlayerInfoService) {
  }

  ngOnInit() {
    const allMatches: MatchReport[] = this.matchService.getAllMatches();
    const pointsPerPlayer: Map<string, MatchPlayer[]> = new Map();
    allMatches.forEach(match => {
      const matchData = this.playerInfoService.getPlayersPerTeamName(match);

      this.pointsPerPlayer = this.groupPointsByPlayer(pointsPerPlayer, matchData.homePlayers);
      this.pointsPerPlayer = this.groupPointsByPlayer(pointsPerPlayer, matchData.awayPlayers);
    });
  }

  private groupPointsByPlayer(pointsPerPlayer: Map<string, MatchPlayer[]>, players: MatchPlayer[]): Map<string, MatchPlayer[]> {
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
