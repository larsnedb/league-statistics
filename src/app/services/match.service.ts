import {Injectable} from '@angular/core';
import {MatchReport} from '../models/match-report.model';
import {MatchForTeam} from '../models/match-for-team.model';
import {MatchResult} from '../models/match-result.enum';
import {Team} from '../models/team.enum';

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
      Goals: [{
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
        ActivityAreaId: 213920,
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
        HomeTeamName: 'Lyn',
        ActivityAreaName: 'Bjølsen matchbane',
        EventTeamInfo: 'Lyn - BMIL',
        MatchDate: '2018-09-16T00:00:00',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=213920',
        LinkId: 6861086,
        Public: '53',
        MatchNo: '1331202004',
        MatchDateFormatted: '16.09.2018',
        ResultsFormatted: '7-4 (1-1, 3-1, 3-2)',
        SeasonId: 200834,
        ActivityName: 'Innebandy',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=383884&roundId=1',
        PartialResult: ' 1-1, 3-1, 3-2',
        Time: '15:00 - 17:20',
        AwayTeamName: 'BMIL',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
        RoundId: 1,
        HasMatchReportFile: true,
        HomeTeamId: 581673,
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6861086',
        MatchId: 6861086,
        RoundName: 'Runde 1',
        AwayTeamId: 581680,
        TournamentName: '1. div. østland menn - NBF',
        EndResult: '7-4'
      }],
      participants: [{
        AwayOwnGoals: [],
        AwayGoalies: [{
          ShirtNo: '12',
          Goals: 6,
          Shots: 17,
          IsAlternateCaptain: false,
          FullName: 'Lasse Anthonisen',
          IsCaptain: false
        }, {ShirtNo: '97', Goals: 1, Shots: 7, IsAlternateCaptain: false, FullName: 'Jørgen Brevik', IsCaptain: false}],
        HomeGoalies: [{
          ShirtNo: '1',
          Goals: 4,
          Shots: 26,
          IsAlternateCaptain: false,
          FullName: 'Kimmy Emil Christensen',
          IsCaptain: false
        }, {ShirtNo: '81', Goals: 0, Shots: 0, IsAlternateCaptain: false, FullName: 'Itrat Zishan', IsCaptain: false}],
        AwayPlayers: [{
          ShirtNo: '4 ',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Andreas Ervik Heggernes',
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
          FullName: 'Mads Sand Dørstad',
          IsCaptain: true,
          Penalties: 0
        }, {
          ShirtNo: '6',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Truls Eriksen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '9',
          SquadIndividualCategoryId: 1,
          Points: 2,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Sondre Knudsen Røstgård',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '10',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Thomas Bergsmark',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '12',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1011,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Lasse Anthonisen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '13',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Truls Havre',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '15',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Sigurd Angell Berg',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '19',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Michael Zlatan Sven Åsberg',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '20',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Andre Antonio Valente',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '22',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Erik Angell Berg',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '25',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Frederic Ringvold Westheim',
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
          FullName: 'Tom Egil Arnesen',
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
          FullName: 'Bendik Fürst Mustad',
          IsCaptain: false,
          Penalties: 2
        }, {
          ShirtNo: '31',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Kim Haldorsen Straumsnes',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '41',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Georg Bugge',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '50',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Emil Varre Sandøy',
          IsCaptain: false,
          Penalties: 4
        }, {
          ShirtNo: '80',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Sondre Rørvik',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '92',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Aksel Tjøtta Stenvold',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '97',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1011,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Jørgen Brevik',
          IsCaptain: false,
          Penalties: 0
        }],
        HomeCoaches: [{FullName: 'Kenneth Lorentzen'}, {FullName: 'Simon Thomas Persson'}],
        // tslint:disable-next-line:max-line-length
        AwayCoaches: [{FullName: 'Bjørn-Erik Thorp'}, {FullName: 'Erik Dissen'}, {FullName: 'John Kjetil Bergsmark'}, {FullName: 'Rebekka Maria Bondesen'}],
        HomeOwnGoals: [],
        HomePlayers: [{
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
          ShirtNo: '7',
          SquadIndividualCategoryId: 1,
          Points: 2,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Lars Petter Kandre',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '14',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Oskar Kristoffer Persson',
          IsCaptain: true,
          Penalties: 2
        }, {
          ShirtNo: '19',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Nicklas Regin',
          IsCaptain: false,
          Penalties: 2
        }, {
          ShirtNo: '22',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Oscar A Ojala',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '23',
          SquadIndividualCategoryId: 1,
          Points: 4,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 3,
          IsAlternateCaptain: false,
          FullName: 'Kim Peter Åke Lönn',
          IsCaptain: false,
          Penalties: 4
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
          Penalties: 0
        }, {
          ShirtNo: '66',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Patrik Mikael Joakim Ohlsson',
          IsCaptain: false,
          Penalties: 2
        }, {
          ShirtNo: '68',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Henrik Svanæs',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '69',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Espen Kjerup Jørgensen',
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
          Points: 2,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Per Konrad Bergetoft-Karlsson',
          IsCaptain: false,
          Penalties: 0
        }]
      }],
      pens: [{
        AwayTeam: 'BMIL',
        HomeTeam: 'Lyn',
        Penalties: [{
          AwayTime: '2 - 07:32',
          HomeTime: '1 - 05:07',
          HomePenalty: '66. Patrik Mikael Joakim Ohlsson, 2 min, Obstruksjon',
          AwayPenalty: '50. Emil Varre Sandøy, 2 min, Slag'
        }, {
          AwayTime: '2 - 19:24',
          HomeTime: '2 - 13:07',
          HomePenalty: '23. Kim Peter Åke Lönn, 2 min, Forsinkelse av spillet',
          AwayPenalty: '29. Bendik Fürst Mustad, 2 min, Slag'
        }, {
          AwayTime: '3 - 17:37',
          HomeTime: '2 - 14:56',
          HomePenalty: '19. Nicklas Regin, 2 min, Hardt spill',
          AwayPenalty: '50. Emil Varre Sandøy, 2 min, Hardt spill'
        }, {
          AwayTime: '',
          HomeTime: '2 - 18:12',
          HomePenalty: '69. Espen Kjerup Jørgensen, 2 min, Låsing av kølle',
          AwayPenalty: ''
        }, {AwayTime: '', HomeTime: '3 - 06:59', HomePenalty: '14. Oskar Kristoffer Persson, 2 min, Slag', AwayPenalty: ''}, {
          AwayTime: '',
          HomeTime: '3 - 13:56',
          HomePenalty: '23. Kim Peter Åke Lönn, 2 min, Liggende spill',
          AwayPenalty: ''
        }]
      }],
      Goals: [{
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
      info: [{
        ActivityAreaId: 215232,
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=383884&SeasonId=200834',
        TournamentId: 383884,
        Referees: [{
          PersonId: 4360125,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=R2FrcHBCU2VIbU5uYmdzM3RMelR4QT090',
          RefereeId: 223710,
          Name: 'Dommer Morten Isnes'
        }, {
          PersonId: 7749152,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=TzFIOEh2QU9wY2tLQ0R6cWxtVC8zQT090',
          RefereeId: 228670,
          Name: 'Dommer Andreas Femtegjeld Sletten'
        }],
        HomeTeamName: 'Ull/Kisa',
        ActivityAreaName: 'Jessheim is og flerbrukshall - Innebandy B',
        EventTeamInfo: 'Ull/Kisa - Ajer',
        MatchDate: '2018-09-16T00:00:00',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=215232',
        LinkId: 6861084,
        Public: '57',
        MatchNo: '1331202002',
        MatchDateFormatted: '16.09.2018',
        ResultsFormatted: '4-5 (2-3, 1-0, 1-2)',
        SeasonId: 200834,
        ActivityName: 'Innebandy',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=383884&roundId=1',
        PartialResult: ' 2-3, 1-0, 1-2',
        Time: '16:00 - 17:20',
        AwayTeamName: 'Ajer',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
        RoundId: 1,
        HasMatchReportFile: true,
        HomeTeamId: 695873,
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6861084',
        MatchId: 6861084,
        RoundName: 'Runde 1',
        AwayTeamId: 495974,
        TournamentName: '1. div. østland menn - NBF',
        EndResult: '4-5'
      }],
      participants: [{
        AwayOwnGoals: [],
        AwayGoalies: [{
          ShirtNo: '1',
          Goals: 4,
          Shots: 23,
          IsAlternateCaptain: false,
          FullName: 'Ole-Kristian Bakker',
          IsCaptain: false
        }, {ShirtNo: '11', Goals: 0, Shots: 0, IsAlternateCaptain: false, FullName: 'Sverre Mikkelsen Olsbyengen', IsCaptain: false}],
        HomeGoalies: [{ShirtNo: '1', Goals: 5, Shots: 19, IsAlternateCaptain: false, FullName: 'Jørn Gilberg', IsCaptain: false}],
        AwayPlayers: [{
          ShirtNo: '1',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1011,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Ole-Kristian Bakker',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '2',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Andreas Ruud Heggelund',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '3',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Helge Larsen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '7',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Even Tomter',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '10',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Armin-Saentia Zahedi',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '11',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1011,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Sverre Mikkelsen Olsbyengen',
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
          FullName: 'Adrian Aaen Skjærbekk',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '25',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Samuel Tobias Merkelbach Borgnes',
          IsCaptain: false,
          Penalties: 2
        }, {
          ShirtNo: '27',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'William Borza',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '36',
          SquadIndividualCategoryId: 1,
          Points: 3,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 2,
          IsAlternateCaptain: false,
          FullName: 'Tobias Vermund',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '42',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Tobias Nilssen Opedal',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '50',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Robin Jensen Sandlie',
          IsCaptain: false,
          Penalties: 2
        }, {
          ShirtNo: '55',
          SquadIndividualCategoryId: 1,
          Points: 2,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 2,
          IsAlternateCaptain: false,
          FullName: 'Magnus Bredeveien Maller',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '64',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Stian Sønsthagen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '77',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Andréas Øien Jensen',
          IsCaptain: true,
          Penalties: 0
        }],
        HomeCoaches: [{FullName: 'Bjørn Egil Johnsen'}, {FullName: 'Fredrik Andresen'}],
        AwayCoaches: [{FullName: 'Thomas Vermund'}],
        HomeOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '1',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1011,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Jørn Gilberg',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '20',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Ronnie Mikael Alfred Adolfsson',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '23',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Magnus Johnsen',
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
          FullName: 'Erik Marcus Bergström',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '34',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Dag Staffan Lindskog',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '46',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Bendik Bjørgaas Austad',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '54',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Jostein Lund Finberg',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '60',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Jan Erik Siggerud Hagen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '61',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Mathias Gram Larsen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '69',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Vincent Mattsson',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '74',
          SquadIndividualCategoryId: 1,
          Points: 2,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Jonatan Melander',
          IsCaptain: true,
          Penalties: 0
        }, {
          ShirtNo: '80',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Fredrik Alexander Holmvik',
          IsCaptain: false,
          Penalties: 2
        }, {
          ShirtNo: '99',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Per Jonas Christoffer Twilling Carlsson',
          IsCaptain: false,
          Penalties: 0
        }]
      }],
      pens: [{
        AwayTeam: 'Ajer',
        HomeTeam: 'Ull/Kisa',
        Penalties: [{
          AwayTime: '2 - 07:46',
          HomeTime: '2 - 13:05',
          HomePenalty: '80. Fredrik Alexander Holmvik, 2 min, Slag',
          AwayPenalty: '50. Robin Jensen Sandlie, 2 min, Slag'
        }, {AwayTime: '3 - 01:28', HomeTime: '', HomePenalty: '', AwayPenalty: '25. Samuel Tobias Merkelbach Borgnes, 2 min, Slag'}]
      }],
      Goals: [{
        GoalsInOrder: [{
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Assist: '74. Jonatan Melander',
          TeamName: 'Ullensaker/Kisa IL',
          IsOwnGoal: false,
          PartialResult: '1-0',
          Scorer: '80. Fredrik Alexander Holmvik',
          Time: '1 - 02:44',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Assist: '25. Samuel Tobias Merkelbach Borgnes',
          TeamName: 'Ajer',
          IsOwnGoal: false,
          PartialResult: '1-1',
          Scorer: '55. Magnus Bredeveien Maller',
          Time: '1 - 02:58',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Assist: '',
          TeamName: 'Ullensaker/Kisa IL',
          IsOwnGoal: false,
          PartialResult: '2-1',
          Scorer: '74. Jonatan Melander',
          Time: '1 - 07:27',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Assist: '36. Tobias Vermund',
          TeamName: 'Ajer',
          IsOwnGoal: false,
          PartialResult: '2-2',
          Scorer: '10. Armin-Saentia Zahedi',
          Time: '1 - 10:00',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Assist: '',
          TeamName: 'Ajer',
          IsOwnGoal: false,
          PartialResult: '2-3',
          Scorer: '36. Tobias Vermund',
          Time: '1 - 17:34',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Assist: '20. Ronnie Mikael Alfred Adolfsson',
          TeamName: 'Ullensaker/Kisa IL',
          IsOwnGoal: false,
          PartialResult: '3-3',
          Scorer: '25. Erik Marcus Bergström',
          Time: '2 - 12:28',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Assist: '50. Robin Jensen Sandlie',
          TeamName: 'Ajer',
          IsOwnGoal: false,
          PartialResult: '3-4',
          Scorer: '36. Tobias Vermund',
          Time: '3 - 00:32',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Assist: '23. Magnus Johnsen',
          TeamName: 'Ullensaker/Kisa IL',
          IsOwnGoal: false,
          PartialResult: '4-4',
          Scorer: '46. Bendik Bjørgaas Austad',
          Time: '3 - 08:08',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Assist: '77. Andréas Øien Jensen',
          TeamName: 'Ajer',
          IsOwnGoal: false,
          PartialResult: '4-5',
          Scorer: '55. Magnus Bredeveien Maller',
          Time: '3 - 08:40',
          IsHomeGoal: false
        }]
      }]
    },
    {
      info: [{
        ActivityAreaId: 215187,
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
        HomeTeamName: 'Vålerenga',
        ActivityAreaName: 'Teglverket idrettshall',
        EventTeamInfo: 'Vålerenga - Øreåsen',
        MatchDate: '2018-09-16T00:00:00',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=215187',
        LinkId: 6861085,
        Public: '30',
        MatchNo: '1331202003',
        MatchDateFormatted: '16.09.2018',
        ResultsFormatted: '10-5 (1-1, 5-2, 4-2)',
        SeasonId: 200834,
        ActivityName: 'Innebandy',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=383884&roundId=1',
        PartialResult: ' 1-1, 5-2, 4-2',
        Time: '15:00 - 16:48',
        AwayTeamName: 'Øreåsen',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
        RoundId: 1,
        HasMatchReportFile: true,
        HomeTeamId: 580780,
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=580780',
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6861085',
        MatchId: 6861085,
        RoundName: 'Runde 1',
        AwayTeamId: 530254,
        TournamentName: '1. div. østland menn - NBF',
        EndResult: '10-5'
      }],
      participants: [{
        AwayOwnGoals: [],
        AwayGoalies: [{
          ShirtNo: '1',
          Goals: 1,
          Shots: 6,
          IsAlternateCaptain: false,
          FullName: 'Marius Hemstad',
          IsCaptain: false
        }, {ShirtNo: '24', Goals: 0, Shots: 0, IsAlternateCaptain: false, FullName: 'Ole-Martin Egge', IsCaptain: false}, {
          ShirtNo: '69',
          Goals: 9,
          Shots: 24,
          IsAlternateCaptain: false,
          FullName: 'Jonas Lillevik',
          IsCaptain: false
        }],
        HomeGoalies: [{ShirtNo: '32', Goals: 5, Shots: 22, IsAlternateCaptain: false, FullName: 'Kristian Skaug', IsCaptain: false}],
        AwayPlayers: [{
          ShirtNo: '1',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1011,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Marius Hemstad',
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
          FullName: 'Tommy Kristiansen',
          IsCaptain: true,
          Penalties: 2
        }, {
          ShirtNo: '6',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Patrick Gerhard Fladby',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '7',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Atle Repstad Andersen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '8',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Christoffer Mørch Olsen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '11',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Christer Olsen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '13',
          SquadIndividualCategoryId: 1,
          Points: 2,
          SquadIndividualTypeId: 1006,
          Assists: 2,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Daniel Gustav Baronowsky',
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
          FullName: 'Christian Olsen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '15',
          SquadIndividualCategoryId: 1,
          Points: 3,
          SquadIndividualTypeId: 1006,
          Assists: 2,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Niclas Antonsen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '20',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Andreas Nicolai Baggerød',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '24',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1011,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Ole-Martin Egge',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '44',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Ole-Christian Bøhaugen',
          IsCaptain: false,
          Penalties: 2
        }, {
          ShirtNo: '69',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1011,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Jonas Lillevik',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '77',
          SquadIndividualCategoryId: 1,
          Points: 3,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 3,
          IsAlternateCaptain: false,
          FullName: 'Stian Jensen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '87',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Markus Jensen',
          IsCaptain: false,
          Penalties: 0
        }],
        HomeCoaches: [{FullName: 'Kenneth Christian Ahlfors'}, {FullName: 'Syver Andreas Eriksen'}],
        AwayCoaches: [{FullName: 'Espen Jakobsen'}],
        HomeOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '6',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Bengt Mikael Sundberg',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '8',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Magnus Kjell',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '9',
          SquadIndividualCategoryId: 1,
          Points: 3,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 2,
          IsAlternateCaptain: false,
          FullName: 'Hans Lukas Larsson',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '10',
          SquadIndividualCategoryId: 1,
          Points: 4,
          SquadIndividualTypeId: 1006,
          Assists: 4,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Mathias Erik Johan Sjökvist',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '11',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Ola Bråten Lund',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '14',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Jesper Pedersen',
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
          FullName: 'Per Torsten Wångersjö',
          IsCaptain: false,
          Penalties: 2
        }, {
          ShirtNo: '21',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Peter Johannes Holback',
          IsCaptain: false,
          Penalties: 4
        }, {
          ShirtNo: '27',
          SquadIndividualCategoryId: 1,
          Points: 6,
          SquadIndividualTypeId: 1006,
          Assists: 2,
          Goals: 4,
          IsAlternateCaptain: false,
          FullName: 'Niclas Johansson',
          IsCaptain: true,
          Penalties: 0
        }, {
          ShirtNo: '32',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1011,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Kristian Skaug',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '47',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Daniel Kristiansen Selvik',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '52',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Herman Bjørndal-Riis',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '71',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Sindre Sebastian Halvorsen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '74',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Mats Løkken',
          IsCaptain: false,
          Penalties: 0
        }]
      }],
      pens: [{
        AwayTeam: 'Øreåsen',
        HomeTeam: 'Vålerenga',
        Penalties: [{
          AwayTime: '2 - 04:05',
          HomeTime: '1 - 18:47',
          HomePenalty: '21. Peter Johannes Holback, 2 min, Slag',
          AwayPenalty: '5. Tommy Kristiansen, 2 min, Låsing av kølle'
        }, {
          AwayTime: '2 - 15:45',
          HomeTime: '3 - 11:30',
          HomePenalty: '21. Peter Johannes Holback, 2 min, Forsinkelse av spillet',
          AwayPenalty: '44. Ole-Christian Bøhaugen, 2 min, Spill med høy kølle'
        }, {AwayTime: '', HomeTime: '3 - 17:53', HomePenalty: '16. Per Torsten Wångersjö, 2 min, Obstruksjon', AwayPenalty: ''}]
      }],
      Goals: [{
        GoalsInOrder: [{
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580780',
          Assist: '71. Sindre Sebastian Halvorsen',
          TeamName: 'Vålerenga',
          IsOwnGoal: false,
          PartialResult: '1-0',
          Scorer: '74. Mats Løkken',
          Time: '1 - 16:47',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Assist: '15. Niclas Antonsen',
          TeamName: 'Øreåsen',
          IsOwnGoal: false,
          PartialResult: '1-1',
          Scorer: '77. Stian Jensen',
          Time: '1 - 17:04',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Assist: '',
          TeamName: 'Øreåsen',
          IsOwnGoal: false,
          PartialResult: '1-2',
          Scorer: '15. Niclas Antonsen',
          Time: '2 - 02:31',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Assist: '13. Daniel Gustav Baronowsky',
          TeamName: 'Øreåsen',
          IsOwnGoal: false,
          PartialResult: '1-3',
          Scorer: '44. Ole-Christian Bøhaugen',
          Time: '2 - 06:59',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580780',
          Assist: '11. Ola Bråten Lund',
          TeamName: 'Vålerenga',
          IsOwnGoal: false,
          PartialResult: '2-3',
          Scorer: '14. Jesper Pedersen',
          Time: '2 - 09:39',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580780',
          Assist: '9. Hans Lukas Larsson',
          TeamName: 'Vålerenga',
          IsOwnGoal: false,
          PartialResult: '3-3',
          Scorer: '8. Magnus Kjell',
          Time: '2 - 12:12',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580780',
          Assist: '10. Mathias Erik Johan Sjökvist',
          TeamName: 'Vålerenga',
          IsOwnGoal: false,
          PartialResult: '4-3',
          Scorer: '27. Niclas Johansson',
          Time: '2 - 14:03',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580780',
          Assist: '27. Niclas Johansson',
          TeamName: 'Vålerenga',
          IsOwnGoal: false,
          PartialResult: '5-3',
          Scorer: '16. Per Torsten Wångersjö',
          Time: '2 - 16:37',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580780',
          Assist: '10. Mathias Erik Johan Sjökvist',
          TeamName: 'Vålerenga',
          IsOwnGoal: false,
          PartialResult: '6-3',
          Scorer: '27. Niclas Johansson',
          Time: '2 - 20:00',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580780',
          Assist: '27. Niclas Johansson',
          TeamName: 'Vålerenga',
          IsOwnGoal: false,
          PartialResult: '7-3',
          Scorer: '9. Hans Lukas Larsson',
          Time: '3 - 01:20',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580780',
          Assist: '21. Peter Johannes Holback',
          TeamName: 'Vålerenga',
          IsOwnGoal: false,
          PartialResult: '8-3',
          Scorer: '9. Hans Lukas Larsson',
          Time: '3 - 06:18',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580780',
          Assist: '10. Mathias Erik Johan Sjökvist',
          TeamName: 'Vålerenga',
          IsOwnGoal: false,
          PartialResult: '9-3',
          Scorer: '27. Niclas Johansson',
          Time: '3 - 09:25',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Assist: '13. Daniel Gustav Baronowsky',
          TeamName: 'Øreåsen',
          IsOwnGoal: false,
          PartialResult: '9-4',
          Scorer: '77. Stian Jensen',
          Time: '3 - 12:47',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Assist: '15. Niclas Antonsen',
          TeamName: 'Øreåsen',
          IsOwnGoal: false,
          PartialResult: '9-5',
          Scorer: '77. Stian Jensen',
          Time: '3 - 14:32',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580780',
          Assist: '10. Mathias Erik Johan Sjökvist',
          TeamName: 'Vålerenga',
          IsOwnGoal: false,
          PartialResult: '10-5',
          Scorer: '27. Niclas Johansson',
          Time: '3 - 16:29',
          IsHomeGoal: true
        }]
      }]
    },
    {
      info: [{
        ActivityAreaId: 214305,
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=383884&SeasonId=200834',
        TournamentId: 383884,
        Referees: [{
          PersonId: 8714546,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=WFlmem9rSjBHZFVPQXR6eGQ2aG56UT090',
          RefereeId: 226229,
          Name: 'Dommer Håvard Pedersen'
        }, {
          PersonId: 5752258,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=M3oxTFN4a3c0eU1IOE5qWGlYUUZqUT090',
          RefereeId: 226533,
          Name: 'Dommer Endre Pedersen'
        }],
        HomeTeamName: 'Ajer',
        ActivityAreaName: 'Hedmarkshallen',
        EventTeamInfo: 'Ajer - Vålerenga',
        MatchDate: '2018-09-21T00:00:00',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=214305',
        LinkId: 6861090,
        Public: '70',
        MatchNo: '1331202008',
        MatchDateFormatted: '21.09.2018',
        ResultsFormatted: '5-4 (1-1, 0-1, 3-2, 1-0)',
        SeasonId: 200834,
        ActivityName: 'Innebandy',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=383884&roundId=2',
        PartialResult: ' 1-1, 0-1, 3-2, 1-0',
        Time: '19:30 - 21:01',
        AwayTeamName: 'Vålerenga',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=580780',
        RoundId: 2,
        HasMatchReportFile: true,
        HomeTeamId: 495974,
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6861090',
        MatchId: 6861090,
        RoundName: 'Runde 2',
        AwayTeamId: 580780,
        TournamentName: '1. div. østland menn - NBF',
        EndResult: '5-4'
      }],
      participants: [{
        AwayOwnGoals: [],
        AwayGoalies: [{
          ShirtNo: '1',
          Goals: 0,
          Shots: 0,
          IsAlternateCaptain: false,
          FullName: 'Jørgen Skaug',
          IsCaptain: false
        }, {ShirtNo: '32', Goals: 4, Shots: 28, IsAlternateCaptain: false, FullName: 'Kristian Skaug', IsCaptain: false}],
        HomeGoalies: [{
          ShirtNo: '1',
          Goals: 4,
          Shots: 20,
          IsAlternateCaptain: false,
          FullName: 'Ole-Kristian Bakker',
          IsCaptain: false
        }, {ShirtNo: '11', Goals: 0, Shots: 0, IsAlternateCaptain: false, FullName: 'Sverre Mikkelsen Olsbyengen', IsCaptain: false}],
        AwayPlayers: [{
          ShirtNo: '1',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1011,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Jørgen Skaug',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '8',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Magnus Kjell',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '9',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Hans Lukas Larsson',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '10',
          SquadIndividualCategoryId: 1,
          Points: 2,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Mathias Erik Johan Sjökvist',
          IsCaptain: false,
          Penalties: 2
        }, {
          ShirtNo: '11',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Morten Slaatbraaten',
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
          FullName: 'Atle Kolbeinstveit',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '21',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Peter Johannes Holback',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '27',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Niclas Johansson',
          IsCaptain: true,
          Penalties: 0
        }, {
          ShirtNo: '32',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1011,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Kristian Skaug',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '71',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Sindre Sebastian Halvorsen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '93',
          SquadIndividualCategoryId: 1,
          Points: 2,
          SquadIndividualTypeId: 1006,
          Assists: 2,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Olav Rønnestad Birkeland',
          IsCaptain: false,
          Penalties: 0
        }],
        HomeCoaches: [],
        AwayCoaches: [],
        HomeOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '1',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1011,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Ole-Kristian Bakker',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '2',
          SquadIndividualCategoryId: 1,
          Points: 2,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 2,
          IsAlternateCaptain: false,
          FullName: 'Andreas Ruud Heggelund',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '3',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Helge Larsen',
          IsCaptain: false,
          Penalties: 2
        }, {
          ShirtNo: '10',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Armin-Saentia Zahedi',
          IsCaptain: false,
          Penalties: 2
        }, {
          ShirtNo: '11',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1011,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Sverre Mikkelsen Olsbyengen',
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
          FullName: 'Terje Larsen',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '25',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Samuel Tobias Merkelbach Borgnes',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '33',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 1,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Edmunds Eglitis',
          IsCaptain: false,
          Penalties: 2
        }, {
          ShirtNo: '36',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Tobias Vermund',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '50',
          SquadIndividualCategoryId: 1,
          Points: 0,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 0,
          IsAlternateCaptain: false,
          FullName: 'Robin Jensen Sandlie',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '55',
          SquadIndividualCategoryId: 1,
          Points: 1,
          SquadIndividualTypeId: 1006,
          Assists: 0,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Magnus Bredeveien Maller',
          IsCaptain: false,
          Penalties: 0
        }, {
          ShirtNo: '77',
          SquadIndividualCategoryId: 1,
          Points: 3,
          SquadIndividualTypeId: 1006,
          Assists: 2,
          Goals: 1,
          IsAlternateCaptain: false,
          FullName: 'Andréas Øien Jensen',
          IsCaptain: true,
          Penalties: 0
        }]
      }],
      pens: [{
        AwayTeam: 'Vålerenga',
        HomeTeam: 'Ajer',
        Penalties: [{
          AwayTime: '1 - 01:26',
          HomeTime: '1 - 12:16',
          HomePenalty: '33. Edmunds Eglitis, 2 min, Løfting av kølle',
          AwayPenalty: '10. Mathias Erik Johan Sjökvist, 2 min, Hardt spill'
        }, {
          AwayTime: '',
          HomeTime: '3 - 06:14',
          HomePenalty: '10. Armin-Saentia Zahedi, 2 min, Spill uten kølle',
          AwayPenalty: ''
        }, {AwayTime: '', HomeTime: '3 - 19:59', HomePenalty: '3. Helge Larsen, 2 min, Feil avstand', AwayPenalty: ''}]
      }],
      Goals: [{
        GoalsInOrder: [{
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580780',
          Assist: '27. Niclas Johansson',
          TeamName: 'Vålerenga',
          IsOwnGoal: false,
          PartialResult: '0-1',
          Scorer: '10. Mathias Erik Johan Sjökvist',
          Time: '1 - 08:49',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Assist: '77. Andréas Øien Jensen',
          TeamName: 'Ajer',
          IsOwnGoal: false,
          PartialResult: '1-1',
          Scorer: '2. Andreas Ruud Heggelund',
          Time: '1 - 17:49',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580780',
          Assist: '93. Olav Rønnestad Birkeland',
          TeamName: 'Vålerenga',
          IsOwnGoal: false,
          PartialResult: '1-2',
          Scorer: '11. Morten Slaatbraaten',
          Time: '2 - 12:00',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Assist: '33. Edmunds Eglitis',
          TeamName: 'Ajer',
          IsOwnGoal: false,
          PartialResult: '2-2',
          Scorer: '55. Magnus Bredeveien Maller',
          Time: '3 - 00:40',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Assist: '77. Andréas Øien Jensen',
          TeamName: 'Ajer',
          IsOwnGoal: false,
          PartialResult: '3-2',
          Scorer: '2. Andreas Ruud Heggelund',
          Time: '3 - 02:45',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580780',
          Assist: '93. Olav Rønnestad Birkeland',
          TeamName: 'Vålerenga',
          IsOwnGoal: false,
          PartialResult: '3-3',
          Scorer: '13. Atle Kolbeinstveit',
          Time: '3 - 05:26',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580780',
          Assist: '10. Mathias Erik Johan Sjökvist',
          TeamName: 'Vålerenga',
          IsOwnGoal: false,
          PartialResult: '3-4',
          Scorer: '21. Peter Johannes Holback',
          Time: '3 - 07:27',
          IsHomeGoal: false
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Assist: '25. Samuel Tobias Merkelbach Borgnes',
          TeamName: 'Ajer',
          IsOwnGoal: false,
          PartialResult: '4-4',
          Scorer: '77. Andréas Øien Jensen',
          Time: '3 - 09:22',
          IsHomeGoal: true
        }, {
          IsPenaltyGoal: false,
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Assist: '',
          TeamName: 'Ajer',
          IsOwnGoal: false,
          PartialResult: '5-4',
          Scorer: ' ',
          Time: 'Str',
          IsHomeGoal: true
        }]
      }]
    },
    {
      info: [
        {
          ActivityAreaId: 213930,
          TournamentUrl: 'PageTournamentDetails.aspx?LinkId=383884&SeasonId=200834',
          TournamentId: 383884,
          Referees: [
            {
              PersonId: 6174114,
              WebPartUrl: 'PagePersonDetail.aspx?LinkId=aitscEdrVXZ1d1I3Z2d6YXA4RGVVZz090',
              RefereeId: 226815,
              Name: 'Dommer Thomas Rustestuen'
            },
            {
              PersonId: 8481327,
              WebPartUrl: 'PagePersonDetail.aspx?LinkId=QUw0WjAzZWN2QVQ5NDl6SVducmpWZz090',
              RefereeId: 227526,
              Name: 'Dommer Sturla Hagen'
            }
          ],
          HomeTeamName: 'BMIL',
          ActivityAreaName: 'Skøyenhallen',
          EventTeamInfo: 'BMIL - Grei',
          MatchDate: '2018-09-22T00:00:00',
          ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=213930',
          LinkId: 6861087,
          Public: '17',
          MatchNo: '1331202005',
          MatchDateFormatted: '22.09.2018',
          ResultsFormatted: '7-4 (1-1, 3-2, 3-1)',
          SeasonId: 200834,
          ActivityName: 'Innebandy',
          RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=383884&roundId=2',
          PartialResult: ' 1-1, 3-2, 3-1',
          Time: '16:04 - 17:40',
          AwayTeamName: 'Grei',
          AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
          RoundId: 2,
          HasMatchReportFile: true,
          HomeTeamId: 581680,
          HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6861087',
          MatchId: 6861087,
          RoundName: 'Runde 2',
          AwayTeamId: 504455,
          TournamentName: '1. div. østland menn - NBF',
          EndResult: '7-4'
        }
      ],
      participants: [
        {
          AwayOwnGoals: [],
          AwayGoalies: [
            {
              ShirtNo: '1',
              Goals: 7,
              Shots: 38,
              IsAlternateCaptain: false,
              FullName: 'Kavinthan Gunaratnam',
              IsCaptain: false
            },
            {
              ShirtNo: '74',
              Goals: 0,
              Shots: 0,
              IsAlternateCaptain: false,
              FullName: 'Thomas-Andre Larsen',
              IsCaptain: false
            }
          ],
          HomeGoalies: [
            {
              ShirtNo: '12',
              Goals: 0,
              Shots: 0,
              IsAlternateCaptain: false,
              FullName: 'Lasse Anthonisen',
              IsCaptain: false
            },
            {
              ShirtNo: '97',
              Goals: 4,
              Shots: 17,
              IsAlternateCaptain: false,
              FullName: 'Jørgen Brevik',
              IsCaptain: false
            }
          ],
          AwayPlayers: [
            {
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
            },
            {
              ShirtNo: '6',
              SquadIndividualCategoryId: 1,
              Points: 2,
              SquadIndividualTypeId: 1006,
              Assists: 0,
              Goals: 2,
              IsAlternateCaptain: false,
              FullName: 'Joakim Ikiza Amundsen',
              IsCaptain: false,
              Penalties: 2
            },
            {
              ShirtNo: '10',
              SquadIndividualCategoryId: 1,
              Points: 0,
              SquadIndividualTypeId: 1006,
              Assists: 0,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Patrik Hammerås Marong',
              IsCaptain: false,
              Penalties: 0
            },
            {
              ShirtNo: '15',
              SquadIndividualCategoryId: 1,
              Points: 0,
              SquadIndividualTypeId: 1006,
              Assists: 0,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Robin Aleksander Gærup',
              IsCaptain: false,
              Penalties: 0
            },
            {
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
            },
            {
              ShirtNo: '18',
              SquadIndividualCategoryId: 1,
              Points: 3,
              SquadIndividualTypeId: 1006,
              Assists: 1,
              Goals: 2,
              IsAlternateCaptain: false,
              FullName: 'Stian Teksdal',
              IsCaptain: true,
              Penalties: 0
            },
            {
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
            },
            {
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
            },
            {
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
            },
            {
              ShirtNo: '27',
              SquadIndividualCategoryId: 1,
              Points: 0,
              SquadIndividualTypeId: 1006,
              Assists: 0,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Stig Mjaasund Øyen',
              IsCaptain: false,
              Penalties: 0
            },
            {
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
            },
            {
              ShirtNo: '44',
              SquadIndividualCategoryId: 1,
              Points: 3,
              SquadIndividualTypeId: 1006,
              Assists: 3,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Marko Johannes Länsman',
              IsCaptain: false,
              Penalties: 0
            },
            {
              ShirtNo: '48',
              SquadIndividualCategoryId: 1,
              Points: 0,
              SquadIndividualTypeId: 1006,
              Assists: 0,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Eivind Hindrum',
              IsCaptain: false,
              Penalties: 0
            },
            {
              ShirtNo: '74',
              SquadIndividualCategoryId: 1,
              Points: 0,
              SquadIndividualTypeId: 1011,
              Assists: 0,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Thomas-Andre Larsen',
              IsCaptain: false,
              Penalties: 0
            }
          ],
          HomeCoaches: [
            {
              FullName: 'Bjørn-Erik Thorp'
            },
            {
              FullName: 'Erik Dissen'
            },
            {
              FullName: 'John Kjetil Bergsmark'
            }
          ],
          AwayCoaches: [
            {
              FullName: 'Claus Jørgen Kvasnes'
            },
            {
              FullName: 'Glenn Børmarken'
            },
            {
              FullName: 'Steinar Engebretsen'
            }
          ],
          HomeOwnGoals: [],
          HomePlayers: [
            {
              ShirtNo: '5',
              SquadIndividualCategoryId: 1,
              Points: 0,
              SquadIndividualTypeId: 1006,
              Assists: 0,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Mads Sand Dørstad',
              IsCaptain: true,
              Penalties: 0
            },
            {
              ShirtNo: '6',
              SquadIndividualCategoryId: 1,
              Points: 0,
              SquadIndividualTypeId: 1006,
              Assists: 0,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Truls Eriksen',
              IsCaptain: false,
              Penalties: 0
            },
            {
              ShirtNo: '10',
              SquadIndividualCategoryId: 1,
              Points: 2,
              SquadIndividualTypeId: 1006,
              Assists: 0,
              Goals: 2,
              IsAlternateCaptain: false,
              FullName: 'Thomas Bergsmark',
              IsCaptain: false,
              Penalties: 0
            },
            {
              ShirtNo: '12',
              SquadIndividualCategoryId: 1,
              Points: 0,
              SquadIndividualTypeId: 1011,
              Assists: 0,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Lasse Anthonisen',
              IsCaptain: false,
              Penalties: 0
            },
            {
              ShirtNo: '13',
              SquadIndividualCategoryId: 1,
              Points: 0,
              SquadIndividualTypeId: 1006,
              Assists: 0,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Truls Havre',
              IsCaptain: false,
              Penalties: 0
            },
            {
              ShirtNo: '18',
              SquadIndividualCategoryId: 1,
              Points: 2,
              SquadIndividualTypeId: 1006,
              Assists: 0,
              Goals: 2,
              IsAlternateCaptain: false,
              FullName: 'Aksel Tjøtta Stenvold',
              IsCaptain: false,
              Penalties: 0
            },
            {
              ShirtNo: '19',
              SquadIndividualCategoryId: 1,
              Points: 0,
              SquadIndividualTypeId: 1006,
              Assists: 0,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Michael Zlatan Sven Åsberg',
              IsCaptain: false,
              Penalties: 0
            },
            {
              ShirtNo: '25',
              SquadIndividualCategoryId: 1,
              Points: 1,
              SquadIndividualTypeId: 1006,
              Assists: 1,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Frederic Ringvold Westheim',
              IsCaptain: false,
              Penalties: 0
            },
            {
              ShirtNo: '26',
              SquadIndividualCategoryId: 1,
              Points: 1,
              SquadIndividualTypeId: 1006,
              Assists: 1,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Tom Egil Arnesen',
              IsCaptain: false,
              Penalties: 0
            },
            {
              ShirtNo: '37',
              SquadIndividualCategoryId: 1,
              Points: 2,
              SquadIndividualTypeId: 1006,
              Assists: 0,
              Goals: 2,
              IsAlternateCaptain: false,
              FullName: 'Lars Olav Davidsen Nedberg',
              IsCaptain: false,
              Penalties: 0
            },
            {
              ShirtNo: '40',
              SquadIndividualCategoryId: 1,
              Points: 1,
              SquadIndividualTypeId: 1006,
              Assists: 1,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Sigurd Angell Berg',
              IsCaptain: false,
              Penalties: 0
            },
            {
              ShirtNo: '50',
              SquadIndividualCategoryId: 1,
              Points: 2,
              SquadIndividualTypeId: 1006,
              Assists: 2,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Emil Varre Sandøy',
              IsCaptain: false,
              Penalties: 0
            },
            {
              ShirtNo: '60',
              SquadIndividualCategoryId: 1,
              Points: 3,
              SquadIndividualTypeId: 1006,
              Assists: 2,
              Goals: 1,
              IsAlternateCaptain: false,
              FullName: 'Bendik Fürst Mustad',
              IsCaptain: false,
              Penalties: 0
            },
            {
              ShirtNo: '78',
              SquadIndividualCategoryId: 1,
              Points: 0,
              SquadIndividualTypeId: 1006,
              Assists: 0,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Erik Angell Berg',
              IsCaptain: false,
              Penalties: 0
            },
            {
              ShirtNo: '97',
              SquadIndividualCategoryId: 1,
              Points: 0,
              SquadIndividualTypeId: 1011,
              Assists: 0,
              Goals: 0,
              IsAlternateCaptain: false,
              FullName: 'Jørgen Brevik',
              IsCaptain: false,
              Penalties: 0
            }
          ]
        }
      ],
      pens: [
        {
          AwayTeam: 'Grei',
          HomeTeam: 'BMIL',
          Penalties: [
            {
              AwayTime: '1 - 18:07',
              HomeTime: '',
              HomePenalty: '',
              AwayPenalty: '6. Joakim Ikiza Amundsen, 2 min, Slag'
            },
            {
              AwayTime: '3 - 19:10',
              HomeTime: '',
              HomePenalty: '',
              AwayPenalty: '17. Jimmi Benteson Bruland, 2 min, Ulovlig dytt (mot vant eller målbur)'
            }
          ]
        }
      ],
      Goals: [
        {
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
        }
      ]
    },
    /*  {
        info: [{
          ActivityAreaId: 214411,
          TournamentUrl: 'PageTournamentDetails.aspx?LinkId=383884&SeasonId=200834',
          TournamentId: 383884,
          Referees: [{
            PersonId: 4360125,
            WebPartUrl: 'PagePersonDetail.aspx?LinkId=R2FrcHBCU2VIbU5uYmdzM3RMelR4QT090',
            RefereeId: 223710,
            Name: 'Dommer Morten Isnes'
          }, {
            PersonId: 7749152,
            WebPartUrl: 'PagePersonDetail.aspx?LinkId=TzFIOEh2QU9wY2tLQ0R6cWxtVC8zQT090',
            RefereeId: 228670,
            Name: 'Dommer Andreas Femtegjeld Sletten'
          }],
          HomeTeamName: 'Lillestrøm',
          ActivityAreaName: 'Skedsmohallen A',
          EventTeamInfo: 'Lillestrøm - Lyn',
          MatchDate: '2018-09-23T00:00:00',
          ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=214411',
          LinkId: 6861089,
          Public: '69',
          MatchNo: '1331202007',
          MatchDateFormatted: '23.09.2018',
          ResultsFormatted: '5-4 (1-0, 1-1, 3-3)',
          SeasonId: 200834,
          ActivityName: 'Innebandy',
          RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=383884&roundId=2',
          PartialResult: ' 1-0, 1-1, 3-3',
          Time: '17:00 - 18:20',
          AwayTeamName: 'Lyn',
          AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          RoundId: 2,
          HasMatchReportFile: true,
          HomeTeamId: 581696,
          HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6861089',
          MatchId: 6861089,
          RoundName: 'Runde 2',
          AwayTeamId: 581673,
          TournamentName: '1. div. østland menn - NBF',
          EndResult: '5-4'
        }],
        participants: [{
          AwayOwnGoals: [],
          AwayGoalies: [{
            ShirtNo: '1',
            Goals: 5,
            Shots: 27,
            IsAlternateCaptain: false,
            FullName: 'Kimmy Emil Christensen',
            IsCaptain: false
          }, {ShirtNo: '81', Goals: 0, Shots: 0, IsAlternateCaptain: false, FullName: 'Itrat Zishan', IsCaptain: false}],
          HomeGoalies: [{
            ShirtNo: '35',
            Goals: 4,
            Shots: 17,
            IsAlternateCaptain: false,
            FullName: 'Peter Ingemar Danielsson',
            IsCaptain: false
          }, {ShirtNo: '99', Goals: 0, Shots: 0, IsAlternateCaptain: false, FullName: 'Christian Hylen Beck', IsCaptain: false}],
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
            ShirtNo: '9',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Simon Thomas Persson',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '14',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Oskar Kristoffer Persson',
            IsCaptain: true,
            Penalties: 0
          }, {
            ShirtNo: '19',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Nicklas Regin',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '22',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Oscar A Ojala',
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
            Penalties: 0
          }, {
            ShirtNo: '66',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Patrik Mikael Joakim Ohlsson',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '68',
            SquadIndividualCategoryId: 1,
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 2,
            IsAlternateCaptain: false,
            FullName: 'Henrik Svanæs',
            IsCaptain: false,
            Penalties: 4
          }, {
            ShirtNo: '69',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Espen Kjerup Jørgensen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '76',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 1,
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
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 2,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Per Konrad Bergetoft-Karlsson',
            IsCaptain: false,
            Penalties: 2
          }],
          HomeCoaches: [{FullName: 'Kim Tobias Härnlund'}],
          AwayCoaches: [{FullName: 'Katrina-Marie Nordnes Skjelvik'}, {FullName: 'Kenneth Lorentzen'}, {FullName: 'Kim Peter Åke Lönn'}],
          HomeOwnGoals: [],
          HomePlayers: [{
            ShirtNo: '2',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Patrik Haugland',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '4',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Thomas Camillo Christiansen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '11',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Kenneth Rønningen',
            IsCaptain: false,
            Penalties: 2
          }, {
            ShirtNo: '13',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
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
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Kristian Wiker Holmemo',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '22',
            SquadIndividualCategoryId: 1,
            Points: 3,
            SquadIndividualTypeId: 1006,
            Assists: 2,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Anders Nordhagen',
            IsCaptain: true,
            Penalties: 0
          }, {
            ShirtNo: '23',
            SquadIndividualCategoryId: 1,
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 2,
            IsAlternateCaptain: false,
            FullName: 'Joakim Melvold',
            IsCaptain: false,
            Penalties: 0
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
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
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
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Sondre Stokke',
            IsCaptain: false,
            Penalties: 12
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
            Penalties: 0
          }, {
            ShirtNo: '88',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Kimsander Ingebretsen',
            IsCaptain: false,
            Penalties: 0
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
          }]
        }],
        pens: [{
          AwayTeam: 'Lyn',
          HomeTeam: 'Lillestrøm',
          Penalties: [{
            AwayTime: '1 - 03:58',
            HomeTime: '2 - 07:26',
            HomePenalty: '11. Kenneth Rønningen, 2 min, Obstruksjon',
            AwayPenalty: '68. Henrik Svanæs, 2 min, Slag'
          }, {
            AwayTime: '2 - 08:16',
            HomeTime: '3 - 16:21',
            HomePenalty: '42. Sondre Stokke, 12 min, Usportslig opptreden',
            AwayPenalty: '88. Per Konrad Bergetoft-Karlsson, 2 min, Hardt spill'
          }, {
            AwayTime: '3 - 06:23',
            HomeTime: '',
            HomePenalty: '',
            AwayPenalty: '68. Henrik Svanæs, 2 min, Ulovlig dytt (mot vant eller målbur)'
          }]
        }],
        Goals: [{
          GoalsInOrder: [{
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
            Assist: '4. Thomas Camillo Christiansen',
            TeamName: 'Lillestrøm Innebandyklubb',
            IsOwnGoal: false,
            PartialResult: '1-0',
            Scorer: '22. Anders Nordhagen',
            Time: '1 - 17:52',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
            Assist: '88. Per Konrad Bergetoft-Karlsson',
            TeamName: 'Lyn Innebandy',
            IsOwnGoal: false,
            PartialResult: '1-1',
            Scorer: '68. Henrik Svanæs',
            Time: '2 - 06:30',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
            Assist: '',
            TeamName: 'Lillestrøm Innebandyklubb',
            IsOwnGoal: false,
            PartialResult: '2-1',
            Scorer: '23. Joakim Melvold',
            Time: '2 - 14:39',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
            Assist: '22. Anders Nordhagen',
            TeamName: 'Lillestrøm Innebandyklubb',
            IsOwnGoal: false,
            PartialResult: '3-1',
            Scorer: '16. Christer Andre Nydahl',
            Time: '3 - 00:53',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
            Assist: '88. Per Konrad Bergetoft-Karlsson',
            TeamName: 'Lyn Innebandy',
            IsOwnGoal: false,
            PartialResult: '3-2',
            Scorer: '68. Henrik Svanæs',
            Time: '3 - 03:11',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
            Assist: '66. Patrik Mikael Joakim Ohlsson',
            TeamName: 'Lyn Innebandy',
            IsOwnGoal: false,
            PartialResult: '3-3',
            Scorer: '14. Oskar Kristoffer Persson',
            Time: '3 - 04:07',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
            Assist: '13. Thomas Hildre Hartvig',
            TeamName: 'Lillestrøm Innebandyklubb',
            IsOwnGoal: false,
            PartialResult: '4-3',
            Scorer: '23. Joakim Melvold',
            Time: '3 - 11:08',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
            Assist: '69. Espen Kjerup Jørgensen',
            TeamName: 'Lyn Innebandy',
            IsOwnGoal: false,
            PartialResult: '4-4',
            Scorer: '76. Per Hampus Johnsson',
            Time: '3 - 11:56',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
            Assist: '22. Anders Nordhagen',
            TeamName: 'Lillestrøm Innebandyklubb',
            IsOwnGoal: false,
            PartialResult: '5-4',
            Scorer: '2. Patrik Haugland',
            Time: '3 - 16:21',
            IsHomeGoal: true
          }]
        }]
      },
      {
        info: [{
          ActivityAreaId: 214809,
          TournamentUrl: 'PageTournamentDetails.aspx?LinkId=383884&SeasonId=200834',
          TournamentId: 383884,
          Referees: [{
            PersonId: 7749329,
            WebPartUrl: 'PagePersonDetail.aspx?LinkId=bUZsVVlXbkRFUTVFTFlxM2YzcXVMQT090',
            RefereeId: 223153,
            Name: 'Dommer Bjørn Einar Rønningen'
          }, {
            PersonId: 7736256,
            WebPartUrl: 'PagePersonDetail.aspx?LinkId=eWVrVjBHNnZIOURNY0JHMGhEdGZxZz090',
            RefereeId: 223625,
            Name: 'Dommer Jon Åge Meller'
          }],
          HomeTeamName: 'Øreåsen',
          ActivityAreaName: 'Øreåsenhallen',
          EventTeamInfo: 'Øreåsen - Ull/Kisa',
          MatchDate: '2018-09-23T00:00:00',
          ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=214809',
          LinkId: 6861088,
          Public: '50',
          MatchNo: '1331202006',
          MatchDateFormatted: '23.09.2018',
          ResultsFormatted: '4-12 (1-4, 2-4, 1-4)',
          SeasonId: 200834,
          ActivityName: 'Innebandy',
          RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=383884&roundId=2',
          PartialResult: ' 1-4, 2-4, 1-4',
          Time: '14:00 - 15:20',
          AwayTeamName: 'Ull/Kisa',
          AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          RoundId: 2,
          HasMatchReportFile: true,
          HomeTeamId: 530254,
          HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6861088',
          MatchId: 6861088,
          RoundName: 'Runde 2',
          AwayTeamId: 695873,
          TournamentName: '1. div. østland menn - NBF',
          EndResult: '4-12'
        }],
        participants: [{
          AwayOwnGoals: [],
          AwayGoalies: [{
            ShirtNo: '1',
            Goals: 1,
            Shots: 10,
            IsAlternateCaptain: false,
            FullName: 'Jørn Gilberg',
            IsCaptain: false
          }, {ShirtNo: '30', Goals: 3, Shots: 9, IsAlternateCaptain: false, FullName: 'Thomas Ommen Hansen', IsCaptain: false}],
          HomeGoalies: [{
            ShirtNo: '1',
            Goals: 6,
            Shots: 12,
            IsAlternateCaptain: false,
            FullName: 'Marius Hemstad',
            IsCaptain: false
          }, {ShirtNo: '24', Goals: 0, Shots: 0, IsAlternateCaptain: false, FullName: 'Ole-Martin Egge', IsCaptain: false}, {
            ShirtNo: '69',
            Goals: 6,
            Shots: 20,
            IsAlternateCaptain: false,
            FullName: 'Jonas Lillevik',
            IsCaptain: false
          }],
          AwayPlayers: [{
            ShirtNo: '1',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1011,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Jørn Gilberg',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '7',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Fabian Pettersson',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '8',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Aatu Iisakki Pärkkä',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '20',
            SquadIndividualCategoryId: 1,
            Points: 4,
            SquadIndividualTypeId: 1006,
            Assists: 2,
            Goals: 2,
            IsAlternateCaptain: false,
            FullName: 'Ronnie Mikael Alfred Adolfsson',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '23',
            SquadIndividualCategoryId: 1,
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 2,
            IsAlternateCaptain: false,
            FullName: 'Magnus Johnsen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '25',
            SquadIndividualCategoryId: 1,
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Erik Marcus Bergström',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '27',
            SquadIndividualCategoryId: 1,
            Points: 5,
            SquadIndividualTypeId: 1006,
            Assists: 2,
            Goals: 3,
            IsAlternateCaptain: false,
            FullName: 'Tuomas Pelo',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '30',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1011,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Thomas Ommen Hansen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '34',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Dag Staffan Lindskog',
            IsCaptain: false,
            Penalties: 2
          }, {
            ShirtNo: '46',
            SquadIndividualCategoryId: 1,
            Points: 3,
            SquadIndividualTypeId: 1006,
            Assists: 2,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Bendik Bjørgaas Austad',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '54',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Jostein Lund Finberg',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '69',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Vincent Mattsson',
            IsCaptain: false,
            Penalties: 2
          }, {
            ShirtNo: '74',
            SquadIndividualCategoryId: 1,
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Jonatan Melander',
            IsCaptain: true,
            Penalties: 0
          }, {
            ShirtNo: '80',
            SquadIndividualCategoryId: 1,
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 2,
            IsAlternateCaptain: false,
            FullName: 'Fredrik Alexander Holmvik',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '99',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Per Jonas Christoffer Twilling Carlsson',
            IsCaptain: false,
            Penalties: 4
          }],
          HomeCoaches: [{FullName: 'Espen Jakobsen'}],
          AwayCoaches: [{FullName: 'Bjørn Egil Johnsen'}, {FullName: 'Fredrik Andresen'}],
          HomeOwnGoals: [],
          HomePlayers: [{
            ShirtNo: '1',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1011,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Marius Hemstad',
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
            FullName: 'Tommy Kristiansen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '7',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Atle Repstad Andersen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '8',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Christoffer Mørch Olsen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '11',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Christer Olsen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '13',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Daniel Gustav Baronowsky',
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
            FullName: 'Sander Sørby Pedersen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '15',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Niclas Antonsen',
            IsCaptain: false,
            Penalties: 2
          }, {
            ShirtNo: '17',
            SquadIndividualCategoryId: 1,
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Christian Olsen',
            IsCaptain: true,
            Penalties: 0
          }, {
            ShirtNo: '22',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Patrick Gerhard Fladby',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '24',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1011,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Ole-Martin Egge',
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
            FullName: 'Hans Petter Hasle Nilsen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '69',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1011,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Jonas Lillevik',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '77',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Stian Jensen',
            IsCaptain: false,
            Penalties: 2
          }, {
            ShirtNo: '87',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Markus Jensen',
            IsCaptain: false,
            Penalties: 0
          }]
        }],
        pens: [{
          AwayTeam: 'Ull/Kisa',
          HomeTeam: 'Øreåsen',
          Penalties: [{
            AwayTime: '1 - 13:16',
            HomeTime: '1 - 13:16',
            HomePenalty: '15. Niclas Antonsen, 2 min, Obstruksjon',
            AwayPenalty: '69. Vincent Mattsson, 2 min, For mange spillere på banen'
          }, {
            AwayTime: '1 - 13:16',
            HomeTime: '2 - 04:35',
            HomePenalty: '77. Stian Jensen, 2 min, Løfting av kølle',
            AwayPenalty: '99. Per Jonas Christoffer Twilling Carlsson, 2 min, Hardt spill'
          }, {
            AwayTime: '2 - 17:15',
            HomeTime: '',
            HomePenalty: '',
            AwayPenalty: '34. Dag Staffan Lindskog, 2 min, Låsing av kølle'
          }, {
            AwayTime: '3 - 09:37',
            HomeTime: '',
            HomePenalty: '',
            AwayPenalty: '99. Per Jonas Christoffer Twilling Carlsson, 2 min, Gjentatte forseelser'
          }]
        }],
        Goals: [{
          GoalsInOrder: [{
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
            Assist: '25. Erik Marcus Bergström',
            TeamName: 'Ullensaker/Kisa IL',
            IsOwnGoal: false,
            PartialResult: '0-1',
            Scorer: '46. Bendik Bjørgaas Austad',
            Time: '1 - 00:35',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
            Assist: '20. Ronnie Mikael Alfred Adolfsson',
            TeamName: 'Ullensaker/Kisa IL',
            IsOwnGoal: false,
            PartialResult: '0-2',
            Scorer: '23. Magnus Johnsen',
            Time: '1 - 05:54',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
            Assist: '8. Christoffer Mørch Olsen',
            TeamName: 'Øreåsen',
            IsOwnGoal: false,
            PartialResult: '1-2',
            Scorer: '17. Christian Olsen',
            Time: '1 - 09:12',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
            Assist: '8. Aatu Iisakki Pärkkä',
            TeamName: 'Ullensaker/Kisa IL',
            IsOwnGoal: false,
            PartialResult: '1-3',
            Scorer: '27. Tuomas Pelo',
            Time: '1 - 16:48',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
            Assist: '27. Tuomas Pelo',
            TeamName: 'Ullensaker/Kisa IL',
            IsOwnGoal: false,
            PartialResult: '1-4',
            Scorer: '80. Fredrik Alexander Holmvik',
            Time: '1 - 19:12',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
            Assist: '20. Ronnie Mikael Alfred Adolfsson',
            TeamName: 'Ullensaker/Kisa IL',
            IsOwnGoal: false,
            PartialResult: '1-5',
            Scorer: '74. Jonatan Melander',
            Time: '2 - 02:18',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
            Assist: '46. Bendik Bjørgaas Austad',
            TeamName: 'Ullensaker/Kisa IL',
            IsOwnGoal: false,
            PartialResult: '1-6',
            Scorer: '25. Erik Marcus Bergström',
            Time: '2 - 04:39',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: true,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
            Assist: '',
            TeamName: 'Ullensaker/Kisa IL',
            IsOwnGoal: false,
            PartialResult: '1-7',
            Scorer: '27. Tuomas Pelo (Straffeslag)',
            Time: '2 - 07:22',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
            Assist: '',
            TeamName: 'Øreåsen',
            IsOwnGoal: false,
            PartialResult: '2-7',
            Scorer: '15. Niclas Antonsen',
            Time: '2 - 13:55',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
            Assist: '27. Tuomas Pelo',
            TeamName: 'Ullensaker/Kisa IL',
            IsOwnGoal: false,
            PartialResult: '2-8',
            Scorer: '80. Fredrik Alexander Holmvik',
            Time: '2 - 15:51',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
            Assist: '7. Atle Repstad Andersen',
            TeamName: 'Øreåsen',
            IsOwnGoal: false,
            PartialResult: '3-8',
            Scorer: '87. Markus Jensen',
            Time: '2 - 18:37',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
            Assist: '46. Bendik Bjørgaas Austad',
            TeamName: 'Ullensaker/Kisa IL',
            IsOwnGoal: false,
            PartialResult: '3-9',
            Scorer: '20. Ronnie Mikael Alfred Adolfsson',
            Time: '3 - 03:06',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
            Assist: '34. Dag Staffan Lindskog',
            TeamName: 'Ullensaker/Kisa IL',
            IsOwnGoal: false,
            PartialResult: '3-10',
            Scorer: '27. Tuomas Pelo',
            Time: '3 - 04:17',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
            Assist: '74. Jonatan Melander',
            TeamName: 'Ullensaker/Kisa IL',
            IsOwnGoal: false,
            PartialResult: '3-11',
            Scorer: '23. Magnus Johnsen',
            Time: '3 - 08:30',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
            Assist: '',
            TeamName: 'Ullensaker/Kisa IL',
            IsOwnGoal: false,
            PartialResult: '3-12',
            Scorer: '20. Ronnie Mikael Alfred Adolfsson',
            Time: '3 - 12:07',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
            Assist: '17. Christian Olsen',
            TeamName: 'Øreåsen',
            IsOwnGoal: false,
            PartialResult: '4-12',
            Scorer: '11. Christer Olsen',
            Time: '3 - 19:07',
            IsHomeGoal: true
          }]
        }]
      },
      {
        info: [{
          ActivityAreaId: 214305,
          TournamentUrl: 'PageTournamentDetails.aspx?LinkId=383884&SeasonId=200834',
          TournamentId: 383884,
          Referees: [{
            PersonId: 4360125,
            WebPartUrl: 'PagePersonDetail.aspx?LinkId=R2FrcHBCU2VIbU5uYmdzM3RMelR4QT090',
            RefereeId: 223710,
            Name: 'Dommer Morten Isnes'
          }, {
            PersonId: 7749152,
            WebPartUrl: 'PagePersonDetail.aspx?LinkId=TzFIOEh2QU9wY2tLQ0R6cWxtVC8zQT090',
            RefereeId: 228670,
            Name: 'Dommer Andreas Femtegjeld Sletten'
          }],
          HomeTeamName: 'Ajer',
          ActivityAreaName: 'Hedmarkshallen',
          EventTeamInfo: 'Ajer - Øreåsen',
          MatchDate: '2018-09-28T00:00:00',
          ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=214305',
          LinkId: 6861094,
          Public: '45',
          MatchNo: '1331202012',
          MatchDateFormatted: '28.09.2018',
          ResultsFormatted: '11-2 (5-1, 3-0, 3-1)',
          SeasonId: 200834,
          ActivityName: 'Innebandy',
          RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=383884&roundId=3',
          PartialResult: ' 5-1, 3-0, 3-1',
          Time: '19:30 - 21:15',
          AwayTeamName: 'Øreåsen',
          AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          RoundId: 3,
          HasMatchReportFile: true,
          HomeTeamId: 495974,
          HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6861094',
          MatchId: 6861094,
          RoundName: 'Runde 3',
          AwayTeamId: 530254,
          TournamentName: '1. div. østland menn - NBF',
          EndResult: '11-2'
        }],
        participants: [{
          AwayOwnGoals: [],
          AwayGoalies: [{ShirtNo: '69', Goals: 8, Shots: 33, IsAlternateCaptain: false, FullName: 'Jonas Lillevik', IsCaptain: false}],
          HomeGoalies: [{
            ShirtNo: '1',
            Goals: 1,
            Shots: 16,
            IsAlternateCaptain: false,
            FullName: 'Ole-Kristian Bakker',
            IsCaptain: false
          }, {ShirtNo: '11', Goals: 1, Shots: 13, IsAlternateCaptain: false, FullName: 'Sverre Mikkelsen Olsbyengen', IsCaptain: false}],
          AwayPlayers: [{
            ShirtNo: '7',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Atle Repstad Andersen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '11',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Christer Olsen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '13',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Daniel Gustav Baronowsky',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '15',
            SquadIndividualCategoryId: 1,
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 2,
            IsAlternateCaptain: false,
            FullName: 'Niclas Antonsen',
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
            FullName: 'Christian Olsen',
            IsCaptain: true,
            Penalties: 0
          }, {
            ShirtNo: '19',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Marcus Skillebekk Halvorsen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '20',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Andreas Nicolai Baggerød',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '22',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Patrick Gerhard Fladby',
            IsCaptain: false,
            Penalties: 4
          }, {
            ShirtNo: '69',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1011,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Jonas Lillevik',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '77',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Stian Jensen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '87',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Markus Jensen',
            IsCaptain: false,
            Penalties: 0
          }],
          HomeCoaches: [],
          AwayCoaches: [{FullName: 'Espen Jakobsen'}],
          HomeOwnGoals: [],
          HomePlayers: [{
            ShirtNo: '1',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1011,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Ole-Kristian Bakker',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '2',
            SquadIndividualCategoryId: 1,
            Points: 5,
            SquadIndividualTypeId: 1006,
            Assists: 2,
            Goals: 3,
            IsAlternateCaptain: false,
            FullName: 'Andreas Ruud Heggelund',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '3',
            SquadIndividualCategoryId: 1,
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Helge Larsen',
            IsCaptain: true,
            Penalties: 0
          }, {
            ShirtNo: '4',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: null,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Martinus Toth Blindheim',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '7',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Even Tomter',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '10',
            SquadIndividualCategoryId: 1,
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 2,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Armin-Saentia Zahedi',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '11',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1011,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Sverre Mikkelsen Olsbyengen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '14',
            SquadIndividualCategoryId: 1,
            Points: 3,
            SquadIndividualTypeId: 1006,
            Assists: 2,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Terje Larsen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '24',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Adrian Aaen Skjærbekk',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '25',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Samuel Tobias Merkelbach Borgnes',
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
            FullName: 'William Borza',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '33',
            SquadIndividualCategoryId: 1,
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Edmunds Eglitis',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '36',
            SquadIndividualCategoryId: 1,
            Points: 4,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 3,
            IsAlternateCaptain: false,
            FullName: 'Tobias Vermund',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '42',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Tobias Nilssen Opedal',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '50',
            SquadIndividualCategoryId: 1,
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Robin Jensen Sandlie',
            IsCaptain: false,
            Penalties: 0
          }]
        }],
        pens: [{
          AwayTeam: 'Øreåsen',
          HomeTeam: 'Ajer',
          Penalties: [{
            AwayTime: '1 - 00:19',
            HomeTime: '',
            HomePenalty: '',
            AwayPenalty: '22. Patrick Gerhard Fladby, 2 min, Hardt spill'
          }, {AwayTime: '1 - 00:19', HomeTime: '', HomePenalty: '', AwayPenalty: '22. Patrick Gerhard Fladby, 2 min, Hardt spill'}]
        }],
        Goals: [{
          GoalsInOrder: [{
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
            Assist: '14. Terje Larsen',
            TeamName: 'Ajer',
            IsOwnGoal: false,
            PartialResult: '1-0',
            Scorer: '36. Tobias Vermund',
            Time: '1 - 02:24',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
            Assist: '36. Tobias Vermund',
            TeamName: 'Ajer',
            IsOwnGoal: false,
            PartialResult: '2-0',
            Scorer: '2. Andreas Ruud Heggelund',
            Time: '1 - 06:57',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
            Assist: '13. Daniel Gustav Baronowsky',
            TeamName: 'Øreåsen',
            IsOwnGoal: false,
            PartialResult: '2-1',
            Scorer: '15. Niclas Antonsen',
            Time: '1 - 10:08',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
            Assist: '10. Armin-Saentia Zahedi',
            TeamName: 'Ajer',
            IsOwnGoal: false,
            PartialResult: '3-1',
            Scorer: '33. Edmunds Eglitis',
            Time: '1 - 14:40',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
            Assist: '14. Terje Larsen',
            TeamName: 'Ajer',
            IsOwnGoal: false,
            PartialResult: '4-1',
            Scorer: '3. Helge Larsen',
            Time: '1 - 16:50',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
            Assist: '10. Armin-Saentia Zahedi',
            TeamName: 'Ajer',
            IsOwnGoal: false,
            PartialResult: '5-1',
            Scorer: '36. Tobias Vermund',
            Time: '1 - 17:21',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
            Assist: '3. Helge Larsen',
            TeamName: 'Ajer',
            IsOwnGoal: false,
            PartialResult: '6-1',
            Scorer: '14. Terje Larsen',
            Time: '2 - 07:41',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
            Assist: '50. Robin Jensen Sandlie',
            TeamName: 'Ajer',
            IsOwnGoal: false,
            PartialResult: '7-1',
            Scorer: '2. Andreas Ruud Heggelund',
            Time: '2 - 13:04',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
            Assist: '2. Andreas Ruud Heggelund',
            TeamName: 'Ajer',
            IsOwnGoal: false,
            PartialResult: '8-1',
            Scorer: '50. Robin Jensen Sandlie',
            Time: '2 - 18:35',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
            Assist: '4. Martinus Toth Blindheim',
            TeamName: 'Ajer',
            IsOwnGoal: false,
            PartialResult: '9-1',
            Scorer: '36. Tobias Vermund',
            Time: '3 - 08:09',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
            Assist: '33. Edmunds Eglitis',
            TeamName: 'Ajer',
            IsOwnGoal: false,
            PartialResult: '10-1',
            Scorer: '2. Andreas Ruud Heggelund',
            Time: '3 - 09:54',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
            Assist: '2. Andreas Ruud Heggelund',
            TeamName: 'Ajer',
            IsOwnGoal: false,
            PartialResult: '11-1',
            Scorer: '24. Adrian Aaen Skjærbekk',
            Time: '3 - 14:10',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
            Assist: '77. Stian Jensen',
            TeamName: 'Øreåsen',
            IsOwnGoal: false,
            PartialResult: '11-2',
            Scorer: '15. Niclas Antonsen',
            Time: '3 - 19:22',
            IsHomeGoal: false
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
        }], Goals: [{
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
      },
      {
        info: [{
          ActivityAreaId: 214411,
          TournamentUrl: 'PageTournamentDetails.aspx?LinkId=383884&SeasonId=200834',
          TournamentId: 383884,
          Referees: [{
            PersonId: 8483455,
            WebPartUrl: 'PagePersonDetail.aspx?LinkId=eEVkbUlHZlNYbjlodDhLeU9YTGJHUT090',
            RefereeId: 304872,
            Name: 'Dommer Mikael Skarshaug Pedersen'
          }, {
            PersonId: 8369844,
            WebPartUrl: 'PagePersonDetail.aspx?LinkId=Mi8wK25hQXlVRTJIN2l6SG5yRDEyQT090',
            RefereeId: 304873,
            Name: 'Dommer Bjørn Harald Whist Huge'
          }],
          HomeTeamName: 'Lillestrøm',
          ActivityAreaName: 'Skedsmohallen A',
          EventTeamInfo: 'Lillestrøm - BMIL',
          MatchDate: '2018-09-30T00:00:00',
          ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=214411',
          LinkId: 6861093,
          Public: '60',
          MatchNo: '1331202011',
          MatchDateFormatted: '30.09.2018',
          ResultsFormatted: '8-5 (4-2, 1-1, 3-2)',
          SeasonId: 200834,
          ActivityName: 'Innebandy',
          RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=383884&roundId=3',
          PartialResult: ' 4-2, 1-1, 3-2',
          Time: '17:00 - 19:00',
          AwayTeamName: 'BMIL',
          AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          RoundId: 3,
          HasMatchReportFile: true,
          HomeTeamId: 581696,
          HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6861093',
          MatchId: 6861093,
          RoundName: 'Runde 3',
          AwayTeamId: 581680,
          TournamentName: '1. div. østland menn - NBF',
          EndResult: '8-5'
        }],
        participants: [{
          AwayOwnGoals: [],
          AwayGoalies: [{
            ShirtNo: '1',
            Goals: 0,
            Shots: 0,
            IsAlternateCaptain: false,
            FullName: 'Charlotte Reenskaug Johnsrud',
            IsCaptain: false
          }, {ShirtNo: '97', Goals: 8, Shots: 27, IsAlternateCaptain: false, FullName: 'Jørgen Brevik', IsCaptain: false}],
          HomeGoalies: [{
            ShirtNo: '35',
            Goals: 5,
            Shots: 25,
            IsAlternateCaptain: false,
            FullName: 'Peter Ingemar Danielsson',
            IsCaptain: false
          }],
          AwayPlayers: [{
            ShirtNo: '1',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1011,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Charlotte Reenskaug Johnsrud',
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
            FullName: 'Mads Sand Dørstad',
            IsCaptain: true,
            Penalties: 0
          }, {
            ShirtNo: '6',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Truls Eriksen',
            IsCaptain: false,
            Penalties: 2
          }, {
            ShirtNo: '10',
            SquadIndividualCategoryId: 1,
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Thomas Bergsmark',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '13',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Truls Havre',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '18',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Aksel Tjøtta Stenvold',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '19',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Michael Zlatan Sven Åsberg',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '20',
            SquadIndividualCategoryId: 1,
            Points: 3,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 2,
            IsAlternateCaptain: false,
            FullName: 'Andre Antonio Valente',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '25',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Frederic Ringvold Westheim',
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
            FullName: 'Tom Egil Arnesen',
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
            FullName: 'Sondre Rørvik',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '37',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Lars Olav Davidsen Nedberg',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '39',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Sondre Knudsen Røstgård',
            IsCaptain: false,
            Penalties: 2
          }, {
            ShirtNo: '40',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Sigurd Angell Berg',
            IsCaptain: false,
            Penalties: 2
          }, {
            ShirtNo: '41',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Georg Bugge',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '47',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Kim Haldorsen Straumsnes',
            IsCaptain: false,
            Penalties: 2
          }, {
            ShirtNo: '50',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Emil Varre Sandøy',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '60',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Bendik Fürst Mustad',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '97',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1011,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Jørgen Brevik',
            IsCaptain: false,
            Penalties: 0
          }],
          HomeCoaches: [{FullName: 'Kim Tobias Härnlund'}],
          AwayCoaches: [{FullName: 'Bjørn-Erik Thorp'}, {FullName: 'Erik Dissen'}, {FullName: 'John Kjetil Bergsmark'}],
          HomeOwnGoals: [],
          HomePlayers: [{
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
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Kenneth Rønningen',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '13',
            SquadIndividualCategoryId: 1,
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Thomas Hildre Hartvig',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '16',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 0,
            IsAlternateCaptain: false,
            FullName: 'Christer Andre Nydahl',
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
            FullName: 'Kristian Wiker Holmemo',
            IsCaptain: false,
            Penalties: 0
          }, {
            ShirtNo: '22',
            SquadIndividualCategoryId: 1,
            Points: 4,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 3,
            IsAlternateCaptain: false,
            FullName: 'Anders Nordhagen',
            IsCaptain: true,
            Penalties: 0
          }, {
            ShirtNo: '23',
            SquadIndividualCategoryId: 1,
            Points: 1,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Joakim Melvold',
            IsCaptain: false,
            Penalties: 0
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
            Points: 0,
            SquadIndividualTypeId: 1006,
            Assists: 0,
            Goals: 0,
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
            Points: 2,
            SquadIndividualTypeId: 1006,
            Assists: 1,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Sondre Stokke',
            IsCaptain: false,
            Penalties: 4
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
            Penalties: 0
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
            ShirtNo: null,
            SquadIndividualCategoryId: 0,
            Points: 0,
            SquadIndividualTypeId: null,
            Assists: 0,
            Goals: 1,
            IsAlternateCaptain: false,
            FullName: 'Selvmål',
            IsCaptain: false,
            Penalties: 0
          }]
        }],
        pens: [{
          AwayTeam: 'BMIL',
          HomeTeam: 'Lillestrøm',
          Penalties: [{
            AwayTime: '2 - 00:13',
            HomeTime: '1 - 09:57',
            HomePenalty: '42. Sondre Stokke, 2 min, Slag',
            AwayPenalty: '39. Sondre Knudsen Røstgård, 2 min, Spill med hånd'
          }, {
            AwayTime: '2 - 08:23',
            HomeTime: '3 - 05:14',
            HomePenalty: '4. Thomas Camillo Christiansen, 2 min, Slag',
            AwayPenalty: '40. Sigurd Angell Berg, 2 min, Hardt spill'
          }, {
            AwayTime: '2 - 12:25',
            HomeTime: '3 - 12:29',
            HomePenalty: '42. Sondre Stokke, 2 min, Slag',
            AwayPenalty: '47. Kim Haldorsen Straumsnes, 2 min, Slag'
          }, {AwayTime: '2 - 16:05', HomeTime: '', HomePenalty: '', AwayPenalty: '6. Truls Eriksen, 2 min, Slag'}]
        }],
        Goals: [{
          GoalsInOrder: [{
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
            Assist: '42. Sondre Stokke',
            TeamName: 'Lillestrøm Innebandyklubb',
            IsOwnGoal: false,
            PartialResult: '1-0',
            Scorer: '4. Thomas Camillo Christiansen',
            Time: '1 - 00:52',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
            Assist: '19. Michael Zlatan Sven Åsberg',
            TeamName: 'BMIL Herrer 1',
            IsOwnGoal: false,
            PartialResult: '1-1',
            Scorer: '37. Lars Olav Davidsen Nedberg',
            Time: '1 - 04:33',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
            Assist: '16. Christer Andre Nydahl',
            TeamName: 'Lillestrøm Innebandyklubb',
            IsOwnGoal: false,
            PartialResult: '2-1',
            Scorer: '22. Anders Nordhagen',
            Time: '1 - 15:03',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
            Assist: '10. Thomas Bergsmark',
            TeamName: 'BMIL Herrer 1',
            IsOwnGoal: false,
            PartialResult: '2-2',
            Scorer: '20. Andre Antonio Valente',
            Time: '1 - 16:38',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
            Assist: '88. Kimsander Ingebretsen',
            TeamName: 'Lillestrøm Innebandyklubb',
            IsOwnGoal: false,
            PartialResult: '3-2',
            Scorer: '23. Joakim Melvold',
            Time: '1 - 17:25',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
            Assist: '',
            TeamName: 'Lillestrøm Innebandyklubb',
            IsOwnGoal: true,
            PartialResult: '4-2',
            Scorer: 'Selvmål',
            Time: '1 - 18:05',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
            Assist: '22. Anders Nordhagen',
            TeamName: 'Lillestrøm Innebandyklubb',
            IsOwnGoal: false,
            PartialResult: '5-2',
            Scorer: '42. Sondre Stokke',
            Time: '2 - 01:21',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
            Assist: '6. Truls Eriksen',
            TeamName: 'BMIL Herrer 1',
            IsOwnGoal: false,
            PartialResult: '5-3',
            Scorer: '10. Thomas Bergsmark',
            Time: '2 - 18:11',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
            Assist: '20. Andre Antonio Valente',
            TeamName: 'BMIL Herrer 1',
            IsOwnGoal: false,
            PartialResult: '5-4',
            Scorer: '50. Emil Varre Sandøy',
            Time: '3 - 01:59',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
            Assist: '4. Thomas Camillo Christiansen',
            TeamName: 'Lillestrøm Innebandyklubb',
            IsOwnGoal: false,
            PartialResult: '6-4',
            Scorer: '22. Anders Nordhagen',
            Time: '3 - 14:29',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
            Assist: '18. Aksel Tjøtta Stenvold',
            TeamName: 'BMIL Herrer 1',
            IsOwnGoal: false,
            PartialResult: '6-5',
            Scorer: '20. Andre Antonio Valente',
            Time: '3 - 18:53',
            IsHomeGoal: false
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
            Assist: '',
            TeamName: 'Lillestrøm Innebandyklubb',
            IsOwnGoal: false,
            PartialResult: '7-5',
            Scorer: '4. Thomas Camillo Christiansen',
            Time: '3 - 19:39',
            IsHomeGoal: true
          }, {
            IsPenaltyGoal: false,
            TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
            Assist: '',
            TeamName: 'Lillestrøm Innebandyklubb',
            IsOwnGoal: false,
            PartialResult: '8-5',
            Scorer: '22. Anders Nordhagen',
            Time: '3 - 19:52',
            IsHomeGoal: true
          }]
        }]
      }*/
  ];

  getAllMatches(): MatchReport[] {
    return this.matches;
  }

  getMatch(id: number): MatchReport {
    return this.matches
      .find(match => parseInt(match.info[0].MatchNo, 10) === id);
  }

  getAllMatchesList(): MatchForTeam[] {

    const matchesPerTeam = [];
    const allMatches = this.getAllMatches();

    allMatches.forEach(match => {
      const endResult = match.info[0].EndResult.split('-');

      const homeTeamData: MatchForTeam = {
        teamName: this.getHomeTeam(match),
        goalsFor: this.getHomeGoals(endResult),
        goalsAgainst: this.getAwayGoals(endResult),
        points: this.getMatchResult(endResult, Team.HOME),
        matchResult: this.getMatchResult(endResult, Team.HOME)
      };
      matchesPerTeam.push(homeTeamData);

      const awayTeamData: MatchForTeam = {
        teamName: this.getAwayTeam(match),
        goalsFor: this.getAwayGoals(endResult),
        goalsAgainst: this.getHomeGoals(endResult),
        points: this.getMatchResult(endResult, Team.AWAY),
        matchResult: this.getMatchResult(endResult, Team.AWAY)
      };
      matchesPerTeam.push(awayTeamData);

    });
    return matchesPerTeam;
  }

  private getAwayTeam(match) {
    return match.info[0].AwayTeamName;
  }

  private getHomeTeam(match) {
    return match.info[0].HomeTeamName;
  }

  private getMatchResult(endResult: string[], team: Team): MatchResult {
    if (team === Team.HOME) {
      return this.getHomeGoals(endResult) > this.getAwayGoals(endResult) ?
        MatchResult.WIN :
        MatchResult.LOSS;
    }
    return this.getHomeGoals(endResult) > this.getAwayGoals(endResult) ?
      MatchResult.LOSS :
      MatchResult.WIN;
  }

  private getAwayGoals(endResult) {
    return parseInt(endResult[1], 10);
  }

  private getHomeGoals(endResult) {
    return parseInt(endResult[0], 10);
  }
}
