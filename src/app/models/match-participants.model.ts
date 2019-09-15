import {MatchGoalie} from './match-goalie.model';
import {MatchPlayer} from './match-player.model';
import {MatchCoach} from './match-coach.model';

export interface MatchParticipants {
  AwayOwnGoals?: any[];
  AwayGoalies: MatchGoalie[];
  HomeGoalies: MatchGoalie[];
  AwayPlayers: MatchPlayer[];
  HomeCoaches: MatchCoach[];
  AwayCoaches: MatchCoach[];
  HomeOwnGoals?: any[];
  HomePlayers: MatchPlayer[];
}
