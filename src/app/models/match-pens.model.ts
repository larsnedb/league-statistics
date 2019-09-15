import {Penalty} from './penalty.model';

export interface MatchPens {
  AwayTeam: string;
  HomeTeam: string;
  Penalties: Penalty[];
}
