import {MatchPlayer} from '../../models/match-player.model';

export interface MatchData {
  homeTeam: string;
  homePlayers: MatchPlayer[];
  awayTeam: string;
  awayPlayers: MatchPlayer[];
}
