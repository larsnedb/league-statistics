import {Referee} from './referee.model';

export interface MatchInfo {
  ActivityAreaId: number;
  TournamentUrl: string;
  TournamentId: number;
  Referees: Referee[];
  HomeTeamName: string;
  ActivityAreaName: string;
  EventTeamInfo: string;
  MatchDate: string;
  ActivityAreaUrl: string;
  LinkId: number;
  Public: string;
  MatchNo: string;
  MatchDateFormatted: string;
  ResultsFormatted: string;
  SeasonId: number;
  ActivityName: string;
  RoundUrl: string;
  PartialResult: string;
  Time: string;
  AwayTeamName: string;
  AwayTeamUrl: string;
  RoundId: number;
  HasMatchReportFile: boolean;
  HomeTeamId: number;
  HomeTeamUrl: string;
  MatchReportUrl: string;
  MatchId: number;
  RoundName: string;
  AwayTeamId: number;
  TournamentName: string;
  EndResult: string;
}
