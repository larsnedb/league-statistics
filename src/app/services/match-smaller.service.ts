import {Injectable} from '@angular/core';
import {ComplexMatchReport} from '../models/complex-match-report.model';
import {MatchReport} from '../models/match-report.model';
import {Goal} from '../models/goal.model';
import {MatchUtils} from '../utils/match-extract.util';

@Injectable({
  providedIn: 'root'
})
export class MatchSmallerService {

  constructor() {
  }

  matches: ComplexMatchReport[] = [
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
        GoalsInOrder: [{
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
    },
    {
      info: [{
        ActivityAreaId: 210993,
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=383884&SeasonId=200834',
        TournamentId: 383884,
        Referees: [{
          PersonId: 5689960,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=ekFWZGhFcS9lYnZxVDFzL3drYmtzdz090',
          RefereeId: 300590,
          Name: 'Dommer Espen Sjetne'
        }, {
          PersonId: 7736233,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=WXdscytTalhLc0xQcTl3QWhuUHdEQT090',
          RefereeId: 300591,
          Name: 'Dommer Torbjørn Tveit Alvestrand'
        }],
        HomeTeamName: 'Grei',
        ActivityAreaName: 'Apalløkka 1',
        EventTeamInfo: 'Grei - Lyn',
        MatchDate: '2018-09-29T00:00:00',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=210993',
        LinkId: 6861091,
        Public: '25',
        MatchNo: '1331202009',
        MatchDateFormatted: '29.09.2018',
        ResultsFormatted: '3-10 (0-3, 1-4, 2-3)',
        SeasonId: 200834,
        ActivityName: 'Innebandy',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=383884&roundId=3',
        PartialResult: ' 0-3, 1-4, 2-3',
        Time: '13:00 - 15:03',
        AwayTeamName: 'Lyn',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
        RoundId: 3,
        HasMatchReportFile: true,
        HomeTeamId: 504455,
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6861091',
        MatchId: 6861091,
        RoundName: 'Runde 3',
        AwayTeamId: 581673,
        TournamentName: '1. div. østland menn - NBF',
        EndResult: '3-10'
      }], participants: [{
        AwayOwnGoals: [],
        AwayGoalies: [{
          ShirtNo: '1',
          Goals: 3,
          Shots: 18,
          IsAlternateCaptain: false,
          FullName: 'Kimmy Emil Christensen',
          IsCaptain: false
        }, {ShirtNo: '81', Goals: 0, Shots: 0, IsAlternateCaptain: false, FullName: 'Itrat Zishan', IsCaptain: false}],
        HomeGoalies: [{
          ShirtNo: '1',
          Goals: 10,
          Shots: 27,
          IsAlternateCaptain: false,
          FullName: 'Kavinthan Gunaratnam',
          IsCaptain: false
        }, {ShirtNo: '74', Goals: 0, Shots: 0, IsAlternateCaptain: false, FullName: 'Thomas-Andre Larsen', IsCaptain: false}],
        AwayPlayers: [{
          ShirtNo: '1',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1011,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Kimmy Emil Christensen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '4',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Julia Paulina Johannesson',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '5',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Leif Robert Vincent Blom',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '7',
          SquadIndividualCategoryId: 1,
          Points: 3,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 2,
          IsAlternateCaptain: false,
          FullName: 'Lars Petter Kandre',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '9',
          SquadIndividualCategoryId: 1,
          Points: 4,
          SquadIndividualTypeId: 1006,
          Assists: 3,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Simon Thomas Persson',
          IsCaptain: false,
          Penalties: 2
        }, {
          ShirtNo: '19',
          SquadIndividualCategoryId: 1,
          Points: 6,
          SquadIndividualTypeId: 1006,
          Assists: 3,
          Goals: 3,
          IsAlternateCaptain: false,
          FullName: 'Nicklas Regin',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '23',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Kim Peter Åke Lönn',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '44',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Knut Røse',
          IsCaptain: false,
          Penalties: 2
        }, {
          ShirtNo: '66',
          SquadIndividualCategoryId: 1,
          Points: 2,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Patrik Mikael Joakim Ohlsson',
          IsCaptain: false,
          Penalties: 2
        }, {
          ShirtNo: '76',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Per Hampus Johnsson',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '81',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1011,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Itrat Zishan',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '88',
          SquadIndividualCategoryId: 1,
          Points: 3,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 3,
          IsAlternateCaptain: false,
          FullName: 'Per Konrad Bergetoft-Karlsson',
          IsCaptain: true,
          Penalties: 0
        }],
        // tslint:disable-next-line:max-line-length
        HomeCoaches: [{FullName: 'Andreas Neofytou'}, {FullName: 'Claus Jørgen Kvasnes'}, {FullName: 'Steinar Engebretsen'}, {FullName: 'Stig Mjaasund Øyen'}],
        AwayCoaches: [{FullName: 'Kenneth Lorentzen'}],
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
          ShirtNo: '14',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Daniel Gundersen Engebretsen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '17',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Jimmi Benteson Bruland',
          IsCaptain: false,
          Penalties: 4
        }, {
          ShirtNo: '18',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Stian Teksdal',
          IsCaptain: true,
          Penalties: 20
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
          ShirtNo: '24',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Patrik Hammerås Marong',
          IsCaptain: false,
          Penalties: 2
        }, {
          ShirtNo: '25',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Lars Arne Rønningen',
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
          FullName: 'Elias Samuel Pennström',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '27',
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
          Penalties: 0
        }, {
          ShirtNo: '29',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Glenn Børmarken',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '44',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Marko Johannes Länsman',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '48',
          SquadIndividualCategoryId: 1,
          Points: 2,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 2,
          IsAlternateCaptain: false,
          FullName: 'Eivind Hindrum',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '74',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1011,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Thomas-Andre Larsen',
          IsCaptain: false,
          Penalties: 2
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
          Penalties: 2
        }]
      }], pens: [{
        AwayTeam: 'Lyn',
        HomeTeam: 'Grei',
        Penalties: [{
          AwayTime: '1 - 07:58',
          HomeTime: '1 - 07:39',
          HomePenalty: '18. Stian Teksdal, 2 min, Hardt spill',
          AwayPenalty: '9. Simon Thomas Persson, 2 min, Slag'
        }, {
          AwayTime: '3 - 06:31',
          HomeTime: '1 - 11:18',
          HomePenalty: '79. Jørgen Kvasnes, 2 min, Slag',
          AwayPenalty: '44. Knut Røse, 2 min, For mange spillere på banen'
        }, {
          AwayTime: '3 - 17:29',
          HomeTime: '1 - 16:28',
          HomePenalty: '24. Patrik Hammerås Marong, 2 min, Feil bytte',
          AwayPenalty: '66. Patrik Mikael Joakim Ohlsson, 2 min, Feil bytte'
        }, {
          AwayTime: '',
          HomeTime: '1 - 16:28',
          HomePenalty: '17. Jimmi Benteson Bruland, 2 min, Spill med høy kølle',
          AwayPenalty: ''
        }, {AwayTime: '', HomeTime: '2 - 15:43', HomePenalty: '18. Stian Teksdal, 2 min, Hardt spill', AwayPenalty: ''}, {
          AwayTime: '',
          HomeTime: '3 - 01:00',
          HomePenalty: '74. Thomas-Andre Larsen, 2 min, Protest',
          AwayPenalty: ''
        }, {AwayTime: '', HomeTime: '3 - 01:00', HomePenalty: '18. Stian Teksdal, 2 min, Hardt spill', AwayPenalty: ''}, {
          AwayTime: '',
          HomeTime: '3 - 01:00',
          HomePenalty: '18. Stian Teksdal, 12 min, ',
          AwayPenalty: ''
        }, {AwayTime: '', HomeTime: '3 - 01:00', HomePenalty: '18. Stian Teksdal, 2 min, ', AwayPenalty: ''}, {
          AwayTime: '',
          HomeTime: '3 - 06:13',
          HomePenalty: '17. Jimmi Benteson Bruland, 2 min, Slag',
          AwayPenalty: ''
        }]
      }], goals: [{
        GoalsInOrder: [{
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '19. Nicklas Regin',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '0-1',
          Scorer: '9. Simon Thomas Persson',
          Time: '1 - 17:25',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '19. Nicklas Regin',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '0-2',
          Scorer: '88. Per Konrad Bergetoft-Karlsson',
          Time: '1 - 17:47',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '0-3',
          Scorer: '19. Nicklas Regin',
          Time: '1 - 17:53',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '0-4',
          Scorer: '66. Patrik Mikael Joakim Ohlsson',
          Time: '2 - 04:10',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
          Assist: '14. Daniel Gundersen Engebretsen',
          TeamName: 'Grei',
          IsOwnGoal: false,
          PartialResult: '1-4',
          Scorer: '17. Jimmi Benteson Bruland',
          Time: '2 - 09:51',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '7. Lars Petter Kandre',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '1-5',
          Scorer: '19. Nicklas Regin',
          Time: '2 - 10:23',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '19. Nicklas Regin',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '1-6',
          Scorer: '88. Per Konrad Bergetoft-Karlsson',
          Time: '2 - 17:24',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '9. Simon Thomas Persson',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '1-7',
          Scorer: '7. Lars Petter Kandre',
          Time: '2 - 19:00',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '9. Simon Thomas Persson',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '1-8',
          Scorer: '88. Per Konrad Bergetoft-Karlsson',
          Time: '3 - 01:15',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '9. Simon Thomas Persson',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '1-9',
          Scorer: '7. Lars Petter Kandre',
          Time: '3 - 02:13',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
          Assist: '',
          TeamName: 'Grei',
          IsOwnGoal: false,
          PartialResult: '2-9',
          Scorer: '48. Eivind Hindrum',
          Time: '3 - 06:48',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Assist: '66. Patrik Mikael Joakim Ohlsson',
          TeamName: 'Lyn Innebandy',
          IsOwnGoal: false,
          PartialResult: '2-10',
          Scorer: '19. Nicklas Regin',
          Time: '3 - 09:05',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
          Assist: '44. Marko Johannes Länsman',
          TeamName: 'Grei',
          IsOwnGoal: false,
          PartialResult: '3-10',
          Scorer: '48. Eivind Hindrum',
          Time: '3 - 14:51',
          IsHomeGoal: true
        }]
      }]
    }
  ];

  getAllMatches(): MatchReport[] {
    const simples = [];
    this.matches.forEach(complex => {
      simples.push(MatchUtils.simplifyMatchObject(complex));
    });
    return simples;
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

  getGoalsFromMatch(matchReport: MatchReport): Goal[] {
    const goals: Goal[] = [];
    matchReport.Goals.GoalsInOrder.forEach(goal => {
      goals.push(goal);
    });
    return goals;
  }
}
