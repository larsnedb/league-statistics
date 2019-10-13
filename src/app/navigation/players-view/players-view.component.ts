import {Component, OnInit, ViewChild} from '@angular/core';
import {MatchService} from '../../services/match.service';
import {MatchParticipants} from '../../models/match-participants.model';
import {MatchPlayer} from '../../models/match-player.model';
import {StatPerPlayer} from '../../models/stat-per-player.model';
import {MatchInfo} from '../../models/match-info.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material';

@Component({
  selector: 'app-players-view',
  templateUrl: './players-view.component.html',
  styleUrls: ['./players-view.component.css']
})
export class PlayersViewComponent implements OnInit {

  constructor(private matchService: MatchService) {
  }

  columnsToDisplay = ['playername', 'teamName', 'matchesPlayed', 'goals', 'assists', 'points'];
  dataSource: any;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    const matchDataPerPlayer: Map<string, StatPerPlayer> = this.extractPlayersFromMatches();
    const playerStats: StatPerPlayer[] = this.convertMapToList(matchDataPerPlayer);

    this.dataSource = new MatTableDataSource(playerStats);
    this.dataSource.sort = this.sort;
  }

  private extractPlayersFromMatches(): Map<string, StatPerPlayer> {
    const statPerPlayer: Map<string, StatPerPlayer> = new Map<string, StatPerPlayer>();
    this.matchService.getAllMatches().forEach(match => {
      const participants: MatchParticipants = match.participants;
      const matchInfo: MatchInfo = match.info;

      this.extractInfoFromPlayers(statPerPlayer, participants.HomePlayers, matchInfo.HomeTeamName);
      this.extractInfoFromPlayers(statPerPlayer, participants.AwayPlayers, matchInfo.AwayTeamName);
    });
    return statPerPlayer;
  }

  private extractInfoFromPlayers(statPerPlayer: Map<string, StatPerPlayer>, players: MatchPlayer[], teamName: string) {
    players.forEach(player => {

      if (statPerPlayer.get(player.FullName)) {
        const existingStat = statPerPlayer.get(player.FullName);
        existingStat.matchesPlayed++;
        existingStat.points += player.Points;
        existingStat.goals += player.Goals;
        existingStat.assists += player.Assists;
      } else {
        const newStat: StatPerPlayer = {
          teamName,
          matchesPlayed: 1,
          points: player.Points,
          goals: player.Goals,
          assists: player.Assists
        };
        statPerPlayer.set(player.FullName, newStat);
      }
    });
  }

  private convertMapToList(matchDataPerPlayer: Map<string, StatPerPlayer>) {
    const players: StatPerPlayer[] = [];
    matchDataPerPlayer.forEach((value, key) => {
      players.push({
        name: key,
        teamName: value.teamName,
        points: value.points,
        goals: value.goals,
        assists: value.assists,
        matchesPlayed: value.matchesPlayed
      });
    });
    return players.sort(((a, b) => this.comparePlayersSortByPoints(a, b)));
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
