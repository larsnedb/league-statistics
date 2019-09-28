import {MatchInfo} from './match-info.model';
import {MatchParticipants} from './match-participants.model';
import {MatchPens} from './match-pens.model';
import {GoalsInOrder} from './goals-in-order.model';

export interface ComplexMatchReport {
  info: MatchInfo[];
  participants: MatchParticipants[];
  pens: MatchPens[];
  Goals: GoalsInOrder[];
}
