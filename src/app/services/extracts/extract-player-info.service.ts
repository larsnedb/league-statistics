import {Injectable} from '@angular/core';
import {MatchReport} from '../../models/match-report.model';
import {MatchData} from './matchData.model';

@Injectable({
  providedIn: 'root'
})
export class ExtractPlayerInfoService {

  constructor() {
  }

  getPlayersPerTeamName(matchReport: MatchReport): MatchData {
    return {
      homeTeam: matchReport.info.HomeTeamName,
      homePlayers: matchReport.participants.HomePlayers,
      awayTeam: matchReport.info.AwayTeamName,
      awayPlayers: matchReport.participants.AwayPlayers
    };
  }

}
