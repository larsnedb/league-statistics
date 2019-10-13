import {Component, OnInit} from '@angular/core';
import {MatchService} from '../../services/match.service';
import {MatchInfo} from '../../models/match-info.model';
import {MatchParticipants} from '../../models/match-participants.model';
import {MatchPlayer} from '../../models/match-player.model';
import {MatchReport} from '../../models/match-report.model';
import {StatPerPlayer} from '../../models/stat-per-player.model';

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
  columnsToDisplay = ['playername', 'matchesPlayed', 'goals', 'assists', 'points'];

  homePlayers: MatchPlayer[];

  matches: MatchReport[] = [];

  statPerPlayer: Map<string, StatPerPlayer> = new Map<string, StatPerPlayer>();

  players: StatPerPlayer[] = [];

  ngOnInit() {
    this.matches.push(this.matchService.getMatch(1331202005));
    this.matches.push(this.matchService.getMatch(1331202004));

    this.matches.forEach(match => {
      this.matchInfo = match.info;
      this.participants = match.participants;

      if (match.info.HomeTeamName === 'BMIL') {
        this.homePlayers = match.participants.HomePlayers;
      } else if (match.info.AwayTeamName === 'BMIL') {
        this.homePlayers = match.participants.AwayPlayers;
      }

      this.homePlayers.forEach(player => {

        if (this.statPerPlayer.get(player.FullName)) {
          const existingStat = this.statPerPlayer.get(player.FullName);
          existingStat.matchesPlayed++;
          existingStat.points += player.Points;
          existingStat.goals += player.Goals;
          existingStat.assists += player.Assists;
        } else {
          const newStat: StatPerPlayer = {
            matchesPlayed: 1,
            points: player.Points,
            goals: player.Goals,
            assists: player.Assists
          };
          this.statPerPlayer.set(player.FullName, newStat);
        }

      });


    });
    this.convertMapToList();

  }

  private convertMapToList() {
    this.statPerPlayer.forEach((value, key) => {
      this.players.push({
        name: key,
        points: value.points,
        goals: value.goals,
        assists: value.assists,
        matchesPlayed: value.matchesPlayed
      });
    });
    this.players.sort(((a, b) => this.comparePlayersSortByPoints(a, b)));
  }

  private comparePlayersSortByPoints(a: StatPerPlayer, b: StatPerPlayer) {
    if (a.points > b.points) {
      return -1;
    } else if (a.points === b.points) {
      if (a.goals > b.goals) {
        return -1;
      } else if (a.goals === b.goals) {
        if (a.assists > b.assists) {
          return -1;
        }
      }
      return 1;
    }
  }
}
