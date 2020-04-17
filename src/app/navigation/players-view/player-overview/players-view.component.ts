import {Component, OnInit, ViewChild} from '@angular/core';
import {MatchService} from '../../../services/match.service';
import {MatchParticipants} from '../../../models/match-participants.model';
import {MatchPlayer} from '../../../models/match-player.model';
import {StatPerPlayer} from '../../../models/stat-per-player.model';
import {MatchInfo} from '../../../models/match-info.model';
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

  columnsToDisplay = ['playername', 'teamName', 'matchesPlayed', 'goals', 'assists', 'points', 'penalties'];
  dataSource: any;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // todo: Sorting by player name does not work

  selectedTeam = 'All teams';
  teamNames: Set<string> = new Set();
  players: StatPerPlayer[] = [];

  ngOnInit() {
    const matchDataPerPlayer: Map<string, StatPerPlayer> = this.extractPlayersFromMatches();
    this.players = this.convertMapToList(matchDataPerPlayer);

    this.dataSource = new MatTableDataSource(this.players);
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
    this.teamNames.add(teamName);
    players.forEach(player => {
      if (statPerPlayer.get(player.FullName)) {
        const existingStat = statPerPlayer.get(player.FullName);
        existingStat.matchesPlayed++;
        existingStat.points.push(player.Points);
        existingStat.goals.push(player.Goals);
        existingStat.assists.push(player.Assists);
        existingStat.penalties.push(player.Penalties);
      } else {
        const newStat: StatPerPlayer = {
          teamName,
          matchesPlayed: 1,
          points: [player.Points],
          goals: [player.Goals],
          assists: [player.Assists],
          penalties: [player.Penalties]
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
        matchesPlayed: value.matchesPlayed,
        penalties: value.penalties
      });
    });
    return players.sort(((a, b) => this.comparePlayersSortForLeaderboard(a, b)));
  }

  private comparePlayersSortForLeaderboard(a: StatPerPlayer, b: StatPerPlayer) {
    const aPoints = this.sumValues(a.points);
    const bPoints = this.sumValues(b.points);
    if (aPoints > bPoints) {
      return -1;
    } else if (aPoints === bPoints) {
      const aGoals = this.sumValues(a.goals);
      const bGoals = this.sumValues(b.goals);
      if (aGoals > bGoals) {
        return -1;
      } else if (aGoals === bGoals) {
        const aAssists = this.sumValues(a.assists);
        const bAssists = this.sumValues(b.assists);
        if (aAssists > bAssists) {
          return -1;
        } else if (aAssists === bAssists) {
          if (a.matchesPlayed < b.matchesPlayed) {
            return -1;
          }
        }
      }
      return 1;
    }
  }

  filterTeam(teamName: string) {
    let selectedPlayers: StatPerPlayer[] = [];
    if (teamName === 'All teams') {
      selectedPlayers = this.players;
    } else {
      selectedPlayers = this.players.filter((player: StatPerPlayer) => player.teamName === teamName);
    }
    this.dataSource = new MatTableDataSource(selectedPlayers);
    this.dataSource.sort = this.sort;
  }

  sumValues(values: number[]) {
    return values.reduce((a, b) => a + b, 0);
  }
}
