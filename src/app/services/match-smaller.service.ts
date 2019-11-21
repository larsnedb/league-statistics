import {Injectable} from '@angular/core';
import {ComplexMatchReport} from '../models/complex-match-report.model';
import {MatchReport} from '../models/match-report.model';
import {Goal} from '../models/goal.model';

@Injectable({
  providedIn: 'root'
})
export class MatchSmallerService {

  constructor() {
  }

  matches: ComplexMatchReport[] = [
    {
      info: [],
      participants: [],
      pens: [],
      goals: [{
        GoalsInOrder: [{
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Assist: '',
          TeamName: 'BMIL Herrer 1',
          IsOwnGoal: false,
          PartialResult: '0-1',
          Scorer: '19. Michael Zlatan Sven Åsberg',
          Time: '1 - 09:41',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '68. Henrik Svanæs',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '1-1',
          Scorer: '7. Lars Petter Kandre',
          Time: '1 - 11:48',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '88. Per Konrad Bergetoft-Karlsson',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '2-1',
          Scorer: '66. Patrik Mikael Joakim Ohlsson',
          Time: '2 - 00:40',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '23. Kim Peter Åke Lönn',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '3-1',
          Scorer: '14. Oskar Kristoffer Persson',
          Time: '2 - 09:00',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Assist: '',
          TeamName: 'BMIL Herrer 1',
          IsOwnGoal: false,
          PartialResult: '3-2',
          Scorer: '10. Thomas Bergsmark',
          Time: '2 - 10:40',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '19. Nicklas Regin',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '4-2',
          Scorer: '23. Kim Peter Åke Lönn',
          Time: '2 - 12:05',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '69. Espen Kjerup Jørgensen',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '5-2',
          Scorer: '23. Kim Peter Åke Lönn',
          Time: '3 - 01:30',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '7. Lars Petter Kandre',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '6-2',
          Scorer: '23. Kim Peter Åke Lönn',
          Time: '3 - 04:10',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Assist: '9. Sondre Knudsen Røstgård',
          TeamName: 'BMIL Herrer 1',
          IsOwnGoal: false,
          PartialResult: '6-3',
          Scorer: '20. Andre Antonio Valente',
          Time: '3 - 09:01',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '7-3',
          Scorer: '88. Per Konrad Bergetoft-Karlsson',
          Time: '3 - 13:31',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Assist: '31. Kim Haldorsen Straumsnes',
          TeamName: 'BMIL Herrer 1',
          IsOwnGoal: false,
          PartialResult: '7-4',
          Scorer: '9. Sondre Knudsen Røstgård',
          Time: '3 - 14:39',
          IsHomeGoal: false
        }]
      }]
    },
    {
      info: [],
      participants: [],
      pens: [],
      goals: [{
        GoalsInOrder: [
          {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
            Assist: '44. Marko Johannes Länsman',
            TeamName: 'Grei',
            IsOwnGoal: false,
            PartialResult: '0-1',
            Scorer: '18. Stian Teksdal',
            Time: '1 - 12:14',
            IsHomeGoal: false
          },
          {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
            Assist: '50. Emil Varre Sandøy',
            TeamName: 'BMIL Herrer 1',
            IsOwnGoal: false,
            PartialResult: '1-1',
            Scorer: '60. Bendik Fürst Mustad',
            Time: '1 - 13:43',
            IsHomeGoal: true
          },
          {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
            Assist: '40. Sigurd Angell Berg',
            TeamName: 'BMIL Herrer 1',
            IsOwnGoal: false,
            PartialResult: '2-1',
            Scorer: '37. Lars Olav Davidsen Nedberg',
            Time: '2 - 05:37',
            IsHomeGoal: true
          },
          {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
            Assist: '60. Bendik Fürst Mustad',
            TeamName: 'BMIL Herrer 1',
            IsOwnGoal: false,
            PartialResult: '3-1',
            Scorer: '37. Lars Olav Davidsen Nedberg',
            Time: '2 - 06:45',
            IsHomeGoal: true
          },
          {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
            Assist: '60. Bendik Fürst Mustad',
            TeamName: 'BMIL Herrer 1',
            IsOwnGoal: false,
            PartialResult: '4-1',
            Scorer: '10. Thomas Bergsmark',
            Time: '2 - 09:15',
            IsHomeGoal: true
          },
          {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
            Assist: '18. Stian Teksdal',
            TeamName: 'Grei',
            IsOwnGoal: false,
            PartialResult: '4-2',
            Scorer: '6. Joakim Ikiza Amundsen',
            Time: '2 - 13:06',
            IsHomeGoal: false
          },
          {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
            Assist: '44. Marko Johannes Länsman',
            TeamName: 'Grei',
            IsOwnGoal: false,
            PartialResult: '4-3',
            Scorer: '18. Stian Teksdal',
            Time: '2 - 17:10',
            IsHomeGoal: false
          },
          {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
            Assist: '50. Emil Varre Sandøy',
            TeamName: 'BMIL Herrer 1',
            IsOwnGoal: false,
            PartialResult: '5-3',
            Scorer: '10. Thomas Bergsmark',
            Time: '3 - 04:10',
            IsHomeGoal: true
          },
          {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
            Assist: '25. Frederic Ringvold Westheim',
            TeamName: 'BMIL Herrer 1',
            IsOwnGoal: false,
            PartialResult: '6-3',
            Scorer: '18. Aksel Tjøtta Stenvold',
            Time: '3 - 07:26',
            IsHomeGoal: true
          },
          {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
            Assist: '26. Tom Egil Arnesen',
            TeamName: 'BMIL Herrer 1',
            IsOwnGoal: false,
            PartialResult: '7-3',
            Scorer: '18. Aksel Tjøtta Stenvold',
            Time: '3 - 16:41',
            IsHomeGoal: true
          },
          {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
            Assist: '44. Marko Johannes Länsman',
            TeamName: 'Grei',
            IsOwnGoal: false,
            PartialResult: '7-4',
            Scorer: '6. Joakim Ikiza Amundsen',
            Time: '3 - 18:58',
            IsHomeGoal: false
          }
        ]
      }]
    }
  ];

  getAllMatches(): MatchReport[] {
    const simples = [];
    this.matches.forEach(complex => {
      simples.push(this.simplifyMatchObject(complex));
    });
    return simples;
  }

  private simplifyMatchObject(matchReport: ComplexMatchReport): MatchReport {
    return {
      info: matchReport.info[0],
      pens: matchReport.pens[0],
      Goals: matchReport.goals[0],
      participants: matchReport.participants[0]
    };
  }

  getGoalsFromAllMatches(matchReports: MatchReport[]): Goal[] {
    const goals: Goal[] = [];
    matchReports.forEach(match => {
      goals.push.apply(goals, this.getGoalsFromMatch(match));
    });
    return goals;
  }


  getGoalsFromMatch(matchReport: MatchReport): Goal[] {
    const goals: Goal[] = [];
    matchReport.Goals.GoalsInOrder.forEach(goal => {
      goals.push(goal);
    });
    return goals;
  }

  groupGoalsPerMatch(matchReports: MatchReport[]): Map<number, Goal[]> {
    let counter = 1;
    const goalsPerMatch: Map<number, Goal[]> = new Map();
    matchReports.forEach(match => {
      goalsPerMatch.set(counter++, this.getGoalsFromMatch(match));
    });

    goalsPerMatch.forEach((key, value) => {
      console.log('Match number: ' + key);
      console.log('Goals: ' + JSON.stringify(value));
    });

    return goalsPerMatch;
  }
}

