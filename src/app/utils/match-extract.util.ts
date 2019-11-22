import {ComplexMatchReport} from '../models/complex-match-report.model';
import {MatchReport} from '../models/match-report.model';

export class MatchUtils {

  static simplifyMatchObject(matchReport: ComplexMatchReport): MatchReport {
    return {
      info: matchReport.info[0],
      pens: matchReport.pens[0],
      Goals: matchReport.goals[0],
      participants: matchReport.participants[0]
    };
  }
}
