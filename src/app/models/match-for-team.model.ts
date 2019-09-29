import {MatchResult} from './match-result.enum';

export interface MatchForTeam {
  teamName: string;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  matchResult: MatchResult;
  penalties: boolean;
}
