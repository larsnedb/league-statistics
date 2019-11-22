import {Injectable} from '@angular/core';
import {MatchReport} from '../../models/match-report.model';
import {MatchPlayer} from '../../models/match-player.model';

@Injectable({
  providedIn: 'root'
})
export class ExtractPlayerInfoService {

  constructor() {
  }

  getPlayersPerTeamName(matchReport: MatchReport): Map<string, MatchPlayer[]> {
    const playersPerTeam: Map<string, MatchPlayer[]> = new Map();
    playersPerTeam.set(matchReport.info.HomeTeamName, matchReport.participants.HomePlayers);
    playersPerTeam.set(matchReport.info.AwayTeamName, matchReport.participants.AwayPlayers);
    return playersPerTeam;
  }

}
