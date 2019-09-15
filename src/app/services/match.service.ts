import {Injectable} from '@angular/core';
import {MatchReport} from '../models/match-report.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor() {
  }

  matches: MatchReport[] = [
    {
      info: [
        {
          ActivityAreaId: 210993,
          TournamentUrl: 'PageTournamentDetails.aspx?LinkId=383884&SeasonId=200834',
          TournamentId: 383884,
          Referees: [{
            PersonId: 4886969,
            WebPartUrl: 'PagePersonDetail.aspx?LinkId=VCtmOG56YzVxajR4RGlGcnplRm9Mdz090',
            RefereeId: 226843,
            Name: 'Dommer Rune Davidsen'
          }, {
            PersonId: 7736256,
            WebPartUrl: 'PagePersonDetail.aspx?LinkId=eWVrVjBHNnZIOURNY0JHMGhEdGZxZz090',
            RefereeId: 223625,
            Name: 'Dommer Jon Åge Meller'
          }],
          HomeTeamName: 'Grei',
          ActivityAreaName: 'Apalløkka 1',
          EventTeamInfo: 'Grei - Lillestrøm',
          MatchDate: '2018-09-15T00:00:00',
          ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=210993',
          LinkId: 6861083,
          Public: '62',
          MatchNo: '1331202001',
          MatchDateFormatted: '15.09.2018',
          ResultsFormatted: '4-13 (1-1, 2-6, 1-6)',
          SeasonId: 200834,
          ActivityName: 'Innebandy',
          RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=383884&roundId=1',
          PartialResult: ' 1-1, 2-6, 1-6',
          Time: '16:00 - 18:00',
          AwayTeamName: 'Lillestrøm',
          AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          RoundId: 1,
          HasMatchReportFile: true,
          HomeTeamId: 504455,
          HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
          MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6861083',
          MatchId: 6861083,
          RoundName: 'Runde 1',
          AwayTeamId: 581696,
          TournamentName: '1. div. østland menn - NBF',
          EndResult: '4-13'
        }],
      participants: [
        {
          AwayOwnGoals: [],
          AwayGoalies: [{
            ShirtNo: '35',
            Goals: 4,
            Shots: 18,
            IsAlternateCaptain: false,
            FullName: 'Peter Ingemar Danielsson',
            IsCaptain: false
          }, {
            ShirtNo: '99',
            Goals: 0,
            Shots: 0,
            IsAlternateCaptain: false,
            FullName: 'Christian Hylen Beck',
            IsCaptain: false
          }
          ],
          HomeGoalies: [{
            ShirtNo: '1',
            Goals: 13,
            Shots: 29,
            IsAlternateCaptain: false,
            FullName: 'Kavinthan Gunaratnam',
            IsCaptain: false
          }],
          AwayPlayers: [{
            ShirtNo: '2',
            SquadIndividualCategoryId: 1,
            Points: 3,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 2,
            IsAlternateCaptain: false,
            FullName: 'Patrik Haugland',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '4',
            SquadIndividualCategoryId: 1,
            Points: 3,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 2,
            IsAlternateCaptain: false,
            FullName: 'Thomas Camillo Christiansen',
            IsCaptain: false,
            Penalties: 2
          }, {
            ShirtNo: '11',
            SquadIndividualCategoryId: 1,
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 2,
            IsAlternateCaptain: false,
            FullName: 'Kenneth Rønningen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '13',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Thomas Hildre Hartvig',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '16',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Christer Andre Nydahl',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '17',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Kristian Wiker Holmemo',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '22',
            SquadIndividualCategoryId: 1,
            Points: 5,
            SquadIndividualTypeId: 1006,
            Assists: 4,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Anders Nordhagen',
            IsCaptain: true,
            Penalties: 0
          }, {
            ShirtNo: '23',
            SquadIndividualCategoryId: 1,
            Points: 3,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 2,
            IsAlternateCaptain: false,
            FullName: 'Joakim Melvold',
            IsCaptain: false,
            Penalties: 2
          }, {
            ShirtNo: '31',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Per Nils Pontus Lundberg',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '33',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Filip Pokorny',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '34',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Ole Bastian Kolstad Løchen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '35',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1011,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Peter Ingemar Danielsson',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '42',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Sondre Stokke',
            IsCaptain: false,
            Penalties: 2
          }, {
            ShirtNo: '44',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'John Einar Luther',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '46',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Daniel Dixon',
            IsCaptain: false,
            Penalties: 4
          }, {
            ShirtNo: '88',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Kimsander Ingebretsen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '91',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Tomas Heggelund',
            IsCaptain: false,
            Penalties: 2
          }, {
            ShirtNo: '99',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1011,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Christian Hylen Beck',
            IsCaptain: false,
            Penalties: 0
          }],
          HomeCoaches: [
            {FullName: 'Claus Jørgen Kvasnes'},
            {FullName: 'Steinar Engebretsen'}
          ],
          AwayCoaches: [
            {FullName: 'Kim Tobias Härnlund'}
          ],
          HomeOwnGoals: [],
          HomePlayers: [{
            ShirtNo: '1',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1011,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Kavinthan Gunaratnam',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '6',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Joakim Ikiza Amundsen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '10',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Stig Mjaasund Øyen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '14',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Daniel Gundersen Engebretsen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '17',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Jimmi Benteson Bruland',
            IsCaptain: false,
            Penalties: 2
          }, {
            ShirtNo: '18',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Stian Teksdal',
            IsCaptain: true,
            Penalties: 2
          }, {
            ShirtNo: '19',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Lasse Kvasnes',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '25',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Robin Aleksander Gærup',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '26',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Christoffer Ellingham',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '28',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Christoffer Maarud Lundgreen',
            IsCaptain: false,
            Penalties: 2
          }, {
            ShirtNo: '44',
            SquadIndividualCategoryId: 1,
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 2,
            IsAlternateCaptain: false,
            FullName: 'Marko Johannes Länsman',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '48',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Eivind Hindrum',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '72',
            SquadIndividualCategoryId: 1,
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 2,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Eirik Østvedt',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '79',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Jørgen Kvasnes',
            IsCaptain: false,
            Penalties: 0
          }]
        }],
      pens: [{
        AwayTeam: 'Lillestrøm',
        HomeTeam: 'Grei',
        Penalties: [{
          AwayTime: '1 - 08:10',
          HomeTime: '3 - 02:31',
          HomePenalty: '17. Jimmi Benteson Bruland, 2 min, Ulovlig dytt (mot vant eller målbur)',
          AwayPenalty: '42. Sondre Stokke, 2 min, Låsing av kølle'
        }, {
          AwayTime: '1 - 10:57',
          HomeTime: '3 - 02:31',
          HomePenalty: '28. Christoffer Maarud Lundgreen, 2 min, Slag',
          AwayPenalty: '23. Joakim Melvold, 2 min, Liggende spill'
        }, {
          AwayTime: '1 - 14:31',
          HomeTime: '3 - 13:43',
          HomePenalty: '18. Stian Teksdal, 2 min, Slag',
          AwayPenalty: '46. Daniel Dixon, 2 min, Slag'
        }, {
          AwayTime: '2 - 16:00',
          HomeTime: '',
          HomePenalty: '',
          AwayPenalty: '46. Daniel Dixon, 2 min, Låsing av kølle'
        }, {
          AwayTime: '2 - 17:47',
          HomeTime: '',
          HomePenalty: '',
          AwayPenalty: '91. Tomas Heggelund, 2 min, Liggende spill'
        }, {
          AwayTime: '3 - 17:47',
          HomeTime: '',
          HomePenalty: '',
          AwayPenalty: '4. Thomas Camillo Christiansen, 2 min, Låsing av kølle'
        }]
      }],
      goals: [{
        goalsInOrder: [{
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Assist: '',
          TeamName: 'Lillestrøm Innebandyklubb',
          IsOwnGoal: false,
          PartialResult: '0-1',
          Scorer: '23. Joakim Melvold',
          Time: '1 - 07:38',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
          Assist: '72. Eirik Østvedt',
          TeamName: 'Grei',
          IsOwnGoal: false,
          PartialResult: '1-1',
          Scorer: '44. Marko Johannes Länsman',
          Time: '1 - 09:30',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
          Assist: '72. Eirik Østvedt',
          TeamName: 'Grei',
          IsOwnGoal: false,
          PartialResult: '2-1',
          Scorer: '25. Robin Aleksander Gærup',
          Time: '2 - 02:34',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: true,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Assist: '',
          TeamName: 'Lillestrøm Innebandyklubb',
          IsOwnGoal: false,
          PartialResult: '2-2',
          Scorer: '13. Thomas Hildre Hartvig (Straffeslag)',
          Time: '2 - 03:22',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
          Assist: '10. Stig Mjaasund Øyen',
          TeamName: 'Grei',
          IsOwnGoal: false,
          PartialResult: '3-2',
          Scorer: '48. Eivind Hindrum',
          Time: '2 - 05:32',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Assist: '',
          TeamName: 'Lillestrøm Innebandyklubb',
          IsOwnGoal: false,
          PartialResult: '3-3',
          Scorer: '4. Thomas Camillo Christiansen',
          Time: '2 - 11:06',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Assist: '22. Anders Nordhagen',
          TeamName: 'Lillestrøm Innebandyklubb',
          IsOwnGoal: false,
          PartialResult: '3-4',
          Scorer: '2. Patrik Haugland',
          Time: '2 - 13:46',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Assist: '4. Thomas Camillo Christiansen',
          TeamName: 'Lillestrøm Innebandyklubb',
          IsOwnGoal: false,
          PartialResult: '3-5',
          Scorer: '16. Christer Andre Nydahl',
          Time: '2 - 15:50',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Assist: '22. Anders Nordhagen',
          TeamName: 'Lillestrøm Innebandyklubb',
          IsOwnGoal: false,
          PartialResult: '3-6',
          Scorer: '4. Thomas Camillo Christiansen',
          Time: '2 - 18:20',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Assist: '2. Patrik Haugland',
          TeamName: 'Lillestrøm Innebandyklubb',
          IsOwnGoal: false,
          PartialResult: '3-7',
          Scorer: '22. Anders Nordhagen',
          Time: '2 - 18:56',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Assist: '',
          TeamName: 'Lillestrøm Innebandyklubb',
          IsOwnGoal: false,
          PartialResult: '3-8',
          Scorer: '23. Joakim Melvold',
          Time: '3 - 03:41',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Assist: '17. Kristian Wiker Holmemo',
          TeamName: 'Lillestrøm Innebandyklubb',
          IsOwnGoal: false,
          PartialResult: '3-9',
          Scorer: '11. Kenneth Rønningen',
          Time: '3 - 04:56',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Assist: '22. Anders Nordhagen',
          TeamName: 'Lillestrøm Innebandyklubb',
          IsOwnGoal: false,
          PartialResult: '3-10',
          Scorer: '2. Patrik Haugland',
          Time: '3 - 10:15',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Assist: '23. Joakim Melvold',
          TeamName: 'Lillestrøm Innebandyklubb',
          IsOwnGoal: false,
          PartialResult: '3-11',
          Scorer: '34. Ole Bastian Kolstad Løchen',
          Time: '3 - 10:44',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Assist: '22. Anders Nordhagen',
          TeamName: 'Lillestrøm Innebandyklubb',
          IsOwnGoal: false,
          PartialResult: '3-12',
          Scorer: '42. Sondre Stokke',
          Time: '3 - 13:58',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Assist: '88. Kimsander Ingebretsen',
          TeamName: 'Lillestrøm Innebandyklubb',
          IsOwnGoal: false,
          PartialResult: '3-13',
          Scorer: '11. Kenneth Rønningen',
          Time: '3 - 17:31',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
          Assist: '18. Stian Teksdal',
          TeamName: 'Grei',
          IsOwnGoal: false,
          PartialResult: '4-13',
          Scorer: '44. Marko Johannes Länsman',
          Time: '3 - 19:22',
          IsHomeGoal: true
        }]
      }]
    }



    /*{id: 1, date: new Date(2019, 9, 21), homeTeam: 'BMIL', awayTeam: 'Grei', location: 'Skøyenhallen'},
    {id: 2, date: new Date(2019, 9, 26), homeTeam: 'Øreåsen', awayTeam: 'BMIL', location: 'Øreåsenhallen'},
    {id: 3, date: new Date(2019, 10, 12), homeTeam: 'BMIL', awayTeam: 'Ajer', location: 'Skøyenhallen'},
    {id: 4, date: new Date(2019, 10, 27), homeTeam: 'Ull/Kisa', awayTeam: 'BMIL', location: 'Jessheim is og flerbrukshall'}*/
  ];

  getAllMatches(): MatchReport[] {
    return this.matches;
  }

  getMatch(id: number): MatchReport {
    return this.matches
      .find(match => parseInt(match.info[0].MatchNo, 10) === id);
  }
}
