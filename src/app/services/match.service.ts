import {Injectable} from '@angular/core';
import {ComplexMatchReport} from '../models/complex-match-report.model';
import {MatchForTeam} from '../models/match-for-team.model';
import {MatchResult} from '../models/match-result.enum';
import {Team} from '../models/team.enum';
import {LeagueEntry} from '../models/league-entry.model';
import {LeagueTeam} from '../models/league-team.model';
import {MatchReport} from '../models/match-report.model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor() {
  }

  matches: ComplexMatchReport[] = [
    {
      participants: [
        {
          HomeCoaches: [
            {
              FullName: 'John Kjetil Bergsmark'
            },
            {
              FullName: 'Johny Tore Mikael Wallenius'
            }
          ],
          AwayCoaches: [
            {
              FullName: 'Claus Jørgen Kvasnes'
            },
            {
              FullName: 'Steinar Engebretsen'
            }
          ],
          HomeOwnGoals: [],
          AwayOwnGoals: [],
          HomePlayers: [
            {
              ShirtNo: '4 ',
              FullName: 'Andreas Ervik Heggernes',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '5',
              FullName: 'Mads Asbjørn Sand Dørstad',
              IsCaptain: true,
              IsAlternateCaptain: false,
              Goals: 2,
              Assists: 1,
              Points: 3,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '10',
              FullName: 'Thomas Bergsmark',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 1,
              Assists: 2,
              Points: 3,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '11',
              FullName: 'Sigurd Angell Berg',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '12',
              FullName: 'Lasse Anthonisen',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1011
            },
            {
              ShirtNo: '19',
              FullName: 'Michael Zlatan Sven Åsberg',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 1,
              Assists: 1,
              Points: 2,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '25',
              FullName: 'Frederic Ringvold Westheim',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '27',
              FullName: 'Sondre Rørvik',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 1,
              Points: 1,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '41',
              FullName: 'Georg Bugge',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 2,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '48',
              FullName: 'Erik Angell Berg',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 1,
              Assists: 1,
              Points: 2,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '50',
              FullName: 'Emil Varre Sandøy',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 1,
              Assists: 2,
              Points: 3,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '60',
              FullName: 'Bendik Fürst Mustad',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 3,
              Assists: 0,
              Points: 3,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '65',
              FullName: 'Victor Alexander Olofsson',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '68',
              FullName: 'Erik Andreas Karlsson',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '70',
              FullName: 'Jacob Tagholdt Sortevik',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '97',
              FullName: 'Jørgen Brevik',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1011
            }
          ],
          AwayPlayers: [
            {
              ShirtNo: '1',
              FullName: 'Hans Sebastian Lundberg',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1011
            },
            {
              ShirtNo: '2',
              FullName: 'Erik Christensen',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '11',
              FullName: 'Jimmi Benteson Bruland',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 1,
              Points: 1,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '12',
              FullName: 'Jørgen Kvasnes',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '14',
              FullName: 'Daniel Gundersen Engebretsen',
              IsCaptain: true,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '19',
              FullName: 'Lasse Kvasnes',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 1,
              Assists: 0,
              Points: 1,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '22',
              FullName: 'Christoffer Ellingham',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 1,
              Points: 1,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '25',
              FullName: 'Lars Arne Rønningen',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '28',
              FullName: 'Christoffer Maarud Lundgreen',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 2,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '44',
              FullName: 'Marko Johannes Länsman',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 1,
              Assists: 0,
              Points: 1,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '49',
              FullName: 'Glenn Børmarken',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '91',
              FullName: 'Jonas Frantzen Lie',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1006
            },
            {
              ShirtNo: '95',
              FullName: 'Pål-Andre Holbø',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Assists: 0,
              Points: 0,
              Penalties: 0,
              SquadIndividualCategoryId: 1,
              SquadIndividualTypeId: 1011
            }
          ],
          HomeGoalies: [
            {
              ShirtNo: '12',
              FullName: 'Lasse Anthonisen',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 2,
              Shots: 11
            },
            {
              ShirtNo: '97',
              FullName: 'Jørgen Brevik',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Shots: 0
            }
          ],
          AwayGoalies: [
            {
              ShirtNo: '1',
              FullName: 'Hans Sebastian Lundberg',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 0,
              Shots: 3
            },
            {
              ShirtNo: '95',
              FullName: 'Pål-Andre Holbø',
              IsCaptain: false,
              IsAlternateCaptain: false,
              Goals: 9,
              Shots: 23
            }
          ]
        }
      ],
      info: [
        {
          MatchId: 6995807,
          MatchNo: '1331202002',
          MatchDate: '2019-09-21T00:00:00',
          MatchDateFormatted: '21.09.2019',
          Time: '16:00 - 17:45',
          RoundId: 1,
          RoundName: 'Runde 1',
          RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=1',
          Referees: [
            {
              Name: 'Dommer Espen Sjetne',
              PersonId: 5689960,
              RefereeId: 300590,
              WebPartUrl: 'PagePersonDetail.aspx?LinkId=ekFWZGhFcS9lYnZxVDFzL3drYmtzdz090'
            },
            {
              Name: 'Dommer Torbjørn Tveit Alvestrand',
              PersonId: 7736233,
              RefereeId: 300591,
              WebPartUrl: 'PagePersonDetail.aspx?LinkId=WXdscytTalhLc0xQcTl3QWhuUHdEQT090'
            }
          ],
          EndResult: '9-2',
          PartialResult: ' 2-1, 4-0, 3-1',
          ResultsFormatted: '9-2 (2-1, 4-0, 3-1)',
          ActivityName: 'Innebandy',
          ActivityAreaId: 213930,
          ActivityAreaName: 'Skøyenhallen',
          ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=213930',
          SeasonId: 200868,
          TournamentId: 390052,
          TournamentName: '1. div. øst menn 19/20 - NBF',
          TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
          LinkId: 6995807,
          HasMatchReportFile: true,
          MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995807',
          HomeTeamId: 581680,
          HomeTeamName: 'BMIL',
          HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          AwayTeamId: 504455,
          AwayTeamName: 'Grei',
          AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
          EventTeamInfo: 'BMIL - Grei',
          Public: '30'
        }
      ],
      goals: [
        {
          GoalsInOrder: [
            {
              Time: '1 - 03:52',
              PartialResult: '0-1',
              TeamName: 'Grei',
              TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
              Scorer: '19. Lasse Kvasnes',
              Assist: '22. Christoffer Ellingham',
              IsPenaltyGoal: false,
              IsOwnGoal: false,
              IsHomeGoal: false
            },
            {
              Time: '1 - 07:53',
              PartialResult: '1-1',
              TeamName: 'BMIL Herrer 1',
              TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
              Scorer: '5. Mads Asbjørn Sand Dørstad',
              Assist: '10. Thomas Bergsmark',
              IsPenaltyGoal: false,
              IsOwnGoal: false,
              IsHomeGoal: true
            },
            {
              Time: '1 - 11:08',
              PartialResult: '2-1',
              TeamName: 'BMIL Herrer 1',
              TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
              Scorer: '60. Bendik Fürst Mustad',
              Assist: '50. Emil Varre Sandøy',
              IsPenaltyGoal: false,
              IsOwnGoal: false,
              IsHomeGoal: true
            },
            {
              Time: '2 - 05:43',
              PartialResult: '3-1',
              TeamName: 'BMIL Herrer 1',
              TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
              Scorer: '19. Michael Zlatan Sven Åsberg',
              Assist: '27. Sondre Rørvik',
              IsPenaltyGoal: false,
              IsOwnGoal: false,
              IsHomeGoal: true
            },
            {
              Time: '2 - 07:59',
              PartialResult: '4-1',
              TeamName: 'BMIL Herrer 1',
              TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
              Scorer: '50. Emil Varre Sandøy',
              Assist: '10. Thomas Bergsmark',
              IsPenaltyGoal: false,
              IsOwnGoal: false,
              IsHomeGoal: true
            },
            {
              Time: '2 - 09:26',
              PartialResult: '5-1',
              TeamName: 'BMIL Herrer 1',
              TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
              Scorer: '60. Bendik Fürst Mustad',
              Assist: '48. Erik Angell Berg',
              IsPenaltyGoal: false,
              IsOwnGoal: false,
              IsHomeGoal: true
            },
            {
              Time: '2 - 11:46',
              PartialResult: '6-1',
              TeamName: 'BMIL Herrer 1',
              TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
              Scorer: '60. Bendik Fürst Mustad',
              Assist: '5. Mads Asbjørn Sand Dørstad',
              IsPenaltyGoal: false,
              IsOwnGoal: false,
              IsHomeGoal: true
            },
            {
              Time: '3 - 04:47',
              PartialResult: '7-1',
              TeamName: 'BMIL Herrer 1',
              TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
              Scorer: '10. Thomas Bergsmark',
              Assist: '50. Emil Varre Sandøy',
              IsPenaltyGoal: false,
              IsOwnGoal: false,
              IsHomeGoal: true
            },
            {
              Time: '3 - 09:59',
              PartialResult: '7-2',
              TeamName: 'Grei',
              TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
              Scorer: '44. Marko Johannes Länsman',
              Assist: '11. Jimmi Benteson Bruland',
              IsPenaltyGoal: false,
              IsOwnGoal: false,
              IsHomeGoal: false
            },
            {
              Time: '3 - 13:51',
              PartialResult: '8-2',
              TeamName: 'BMIL Herrer 1',
              TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
              Scorer: '5. Mads Asbjørn Sand Dørstad',
              Assist: '19. Michael Zlatan Sven Åsberg',
              IsPenaltyGoal: false,
              IsOwnGoal: false,
              IsHomeGoal: true
            },
            {
              Time: '3 - 15:16',
              PartialResult: '9-2',
              TeamName: 'BMIL Herrer 1',
              TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
              Scorer: '48. Erik Angell Berg',
              Assist: '',
              IsPenaltyGoal: false,
              IsOwnGoal: false,
              IsHomeGoal: true
            }
          ]
        }
      ],
      pens: [
        {
          HomeTeam: 'BMIL',
          AwayTeam: 'Grei',
          Penalties: [
            {
              HomeTime: '3 - 05:36',
              HomePenalty: '41. Georg Bugge, 2 min, Spill med hånd',
              AwayTime: '3 - 12:41',
              AwayPenalty: '28. Christoffer Maarud Lundgreen, 2 min, Hardt spill'
            }
          ]
        }
      ]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Anton Mats Brenner'}, {FullName: 'Didrik Thorbjørn Voss'}, {FullName: 'Stig Magne Solem'}, {FullName: 'Victor Gustaf Ekestubbe'}],
        AwayCoaches: [{FullName: 'Eskild Kristigonus Nordby'}, {FullName: 'Espen Øren Antonsen'}, {FullName: 'Jan Emil Gudem'}, {FullName: 'Joachim Karlsen'}, {FullName: 'Jonas Øren Antonsen'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '1',
          FullName: 'Jacob Voss',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '2',
          FullName: 'Victor Gustaf Ekestubbe',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 2,
          SquadIndividualTypeId: 1091
        }, {
          ShirtNo: '3',
          FullName: 'Sander Hekne Thoresen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Magnus Hermansen Oswold',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '8',
          FullName: 'Fredrik Sundell',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Aleksander Nodland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '12',
          FullName: 'Bendik Govertsen Johnsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '13',
          FullName: 'Vetle Meier Hobbesland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '15',
          FullName: 'Kjetil Denvik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '18',
          FullName: 'Mathias Bentz Hammerstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Johan Rannem Solem',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '20',
          FullName: 'Lukas Joaquin Mondaca Haugen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '21',
          FullName: 'Erik Viggo Nielsen de Santana',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '29',
          FullName: 'Bjørn Aasmund Østen Fredsted',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '31',
          FullName: 'Robin Kristoffer Simonsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '33',
          FullName: 'Anders Tangen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '52',
          FullName: 'Henric Anders Hesterskog',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: null
        }, {
          ShirtNo: '55',
          FullName: 'Oskar Sjåvåg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        AwayPlayers: [{
          ShirtNo: '1',
          FullName: 'Jørgen Skogstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '4',
          FullName: 'Magnus Gulliksen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Christopher André Jaksland',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 1,
          Points: 3,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '13',
          FullName: 'Mats Lynum Hartmann',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '22',
          FullName: 'Håkon Hansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '28',
          FullName: 'Robert Andreas Kyllo',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '36',
          FullName: 'Christian Kolderup',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '39',
          FullName: 'Robin Gabrielsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '41',
          FullName: 'Alexander Jaksland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 3,
          Points: 4,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '46',
          FullName: 'Daniel Vassbund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '51',
          FullName: 'Per Axel Wallin',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Assists: 1,
          Points: 4,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '53',
          FullName: 'Petter Knutsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 2,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '58',
          FullName: 'Ole Andreas Årøen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '59',
          FullName: 'Tom-Erik Myhre',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '79',
          FullName: 'Erik Magnus Jirving',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 4,
          Assists: 0,
          Points: 4,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '94',
          FullName: 'Robin Perzan Norstrøm',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 7,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '98',
          FullName: 'Vetle Lindset Korslund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        HomeGoalies: [{
          ShirtNo: '1',
          FullName: 'Jacob Voss',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }, {
          ShirtNo: '31',
          FullName: 'Robin Kristoffer Simonsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }, {
          ShirtNo: '33',
          FullName: 'Anders Tangen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 11,
          Shots: 16
        }],
        AwayGoalies: [{
          ShirtNo: '1',
          FullName: 'Jørgen Skogstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }, {
          ShirtNo: '36',
          FullName: 'Christian Kolderup',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 5,
          Shots: 23
        }]
      }],
      info: [{
        MatchId: 6995806,
        MatchNo: '1331202001',
        MatchDate: '2019-09-21T00:00:00',
        MatchDateFormatted: '21.09.2019',
        Time: '17:00 - 18:20',
        RoundId: 1,
        RoundName: 'Runde 1',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=1',
        Referees: [{
          Name: 'Dommer Morten Isnes',
          PersonId: 4360125,
          RefereeId: 223710,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=R2FrcHBCU2VIbU5uYmdzM3RMelR4QT090'
        }, {
          Name: 'Dommer Andreas Femtegjeld Sletten',
          PersonId: 7749152,
          RefereeId: 228670,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=TzFIOEh2QU9wY2tLQ0R6cWxtVC8zQT090'
        }],
        EndResult: '5-11',
        PartialResult: ' 1-5, 4-3, 0-3',
        ResultsFormatted: '5-11 (1-5, 4-3, 0-3)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 8602,
        ActivityAreaName: 'Ekeberg innebandy A',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=8602',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995806,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995806',
        HomeTeamId: 580779,
        HomeTeamName: 'Bækkelaget',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
        AwayTeamId: 743009,
        AwayTeamName: 'Asker',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
        EventTeamInfo: 'Bækkelaget - Asker',
        Public: '100'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 03:33',
          PartialResult: '0-1',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '79. Erik Magnus Jirving',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 04:15',
          PartialResult: '0-2',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '7. Christopher André Jaksland',
          Assist: '53. Petter Knutsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 08:10',
          PartialResult: '0-3',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '7. Christopher André Jaksland',
          Assist: '53. Petter Knutsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 16:10',
          PartialResult: '0-4',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '79. Erik Magnus Jirving',
          Assist: '41. Alexander Jaksland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 19:03',
          PartialResult: '0-5',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '51. Per Axel Wallin',
          Assist: '41. Alexander Jaksland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 20:00',
          PartialResult: '1-5',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '7. Magnus Hermansen Oswold',
          Assist: '3. Sander Hekne Thoresen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 05:17',
          PartialResult: '2-5',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '29. Bjørn Aasmund Østen Fredsted',
          Assist: '13. Vetle Meier Hobbesland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 09:39',
          PartialResult: '2-6',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '51. Per Axel Wallin',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 12:46',
          PartialResult: '3-6',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '19. Johan Rannem Solem (Straffeslag)',
          Assist: '',
          IsPenaltyGoal: true,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 16:50',
          PartialResult: '3-7',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '51. Per Axel Wallin',
          Assist: '41. Alexander Jaksland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 17:32',
          PartialResult: '4-7',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '20. Lukas Joaquin Mondaca Haugen',
          Assist: '18. Mathias Bentz Hammerstad',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 18:04',
          PartialResult: '5-7',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '21. Erik Viggo Nielsen de Santana',
          Assist: '2. Victor Gustaf Ekestubbe',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 18:42',
          PartialResult: '5-8',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '79. Erik Magnus Jirving',
          Assist: '51. Per Axel Wallin',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 09:13',
          PartialResult: '5-9',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '41. Alexander Jaksland',
          Assist: '94. Robin Perzan Norstrøm',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 14:38',
          PartialResult: '5-10',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '94. Robin Perzan Norstrøm',
          Assist: '7. Christopher André Jaksland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 19:38',
          PartialResult: '5-11',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '79. Erik Magnus Jirving',
          Assist: '36. Christian Kolderup',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }]
      }],
      pens: [{
        HomeTeam: 'Bækkelaget',
        AwayTeam: 'Asker',
        Penalties: [{
          HomeTime: '1 - 14:52',
          HomePenalty: '55. Oskar Sjåvåg, 2 min, Slag',
          AwayTime: '1 - 10:25',
          AwayPenalty: '94. Robin Perzan Norstrøm, 2 min, Slag'
        }, {
          HomeTime: '1 - 17:14',
          HomePenalty: '20. Lukas Joaquin Mondaca Haugen, 2 min, Hardt spill',
          AwayTime: '2 - 06:57',
          AwayPenalty: '7. Christopher André Jaksland, 2 min, Slag'
        }, {
          HomeTime: '',
          HomePenalty: '',
          AwayTime: '2 - 13:15',
          AwayPenalty: '94. Robin Perzan Norstrøm, 5 min, Hardt spill'
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Kenneth Lorentzen'}, {FullName: 'Knut Røse'}],
        AwayCoaches: [{FullName: 'Eirik Smith'}, {FullName: 'Marius Hemstad'}, {FullName: 'Stian Halvorsen'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '1',
          FullName: 'Kimmy Emil Christensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '4',
          FullName: 'Julia Paulina Johannesson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Lars Petter Kandre',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '9',
          FullName: 'Simon Thomas Persson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 3,
          Points: 4,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '14',
          FullName: 'Oskar Kristoffer Persson',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '16',
          FullName: 'Atle Billing',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Nicklas Regin',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '22',
          FullName: 'Oskar Antero Ojala',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 1,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '23',
          FullName: 'Kim Peter Åke Lönn',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '24',
          FullName: 'Nicholas Paulsen Lohrmann',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '30',
          FullName: 'Aleksander Tyrspappa Grimstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '55',
          FullName: 'Trym Stokland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '66',
          FullName: 'Patrik Mikael Joakim Ohlsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '69',
          FullName: 'Espen Bekkvik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 0,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '71',
          FullName: 'Christoffer Boganes Vadla',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '76',
          FullName: 'Per Hampus Johnsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '88',
          FullName: 'Per Konrad Bergetoft-Karlsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: null,
          FullName: 'Kristian Refshal Hansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: null,
          FullName: 'Jesper Jönsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        AwayPlayers: [{
          ShirtNo: '6',
          FullName: 'Jesper Hjelkrem Dirks',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Trond Elias Thomassen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '9',
          FullName: 'Håkon Strand',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Joachim Sørby Pedersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Christer Olsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '14',
          FullName: 'Sander Sørby Pedersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '15',
          FullName: 'Niclas Antonsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Marcus Skillebekk Halvorsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '20',
          FullName: 'Andreas Nicolai Baggerød',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '24',
          FullName: 'Ole-Martin Egge',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '26',
          FullName: 'Hans Petter Hasle Nilsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '33',
          FullName: 'Magnus Røed',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '35',
          FullName: 'Markus Jørgensen Larsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '66',
          FullName: 'Magnus Langrud',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '69',
          FullName: 'Sander Haagenrud Brønn',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '77',
          FullName: 'Stian Jensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '87',
          FullName: 'Kenneth Gustavsson Furulund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '96',
          FullName: 'Christian Olsen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        HomeGoalies: [{
          ShirtNo: '1',
          FullName: 'Kimmy Emil Christensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 5,
          Shots: 22
        }, {
          ShirtNo: '30',
          FullName: 'Aleksander Tyrspappa Grimstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }],
        AwayGoalies: [{
          ShirtNo: '24',
          FullName: 'Ole-Martin Egge',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }, {
          ShirtNo: '33',
          FullName: 'Magnus Røed',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 7,
          Shots: 30
        }]
      }],
      info: [{
        MatchId: 6995808,
        MatchNo: '1331202003',
        MatchDate: '2019-09-22T00:00:00',
        MatchDateFormatted: '22.09.2019',
        Time: '12:00 - 14:00',
        RoundId: 1,
        RoundName: 'Runde 1',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=1',
        Referees: [{
          Name: 'Dommer Espen Sjetne',
          PersonId: 5689960,
          RefereeId: 300590,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=ekFWZGhFcS9lYnZxVDFzL3drYmtzdz090'
        }, {
          Name: 'Dommer Torbjørn Tveit Alvestrand',
          PersonId: 7736233,
          RefereeId: 300591,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=WXdscytTalhLc0xQcTl3QWhuUHdEQT090'
        }],
        EndResult: '7-5',
        PartialResult: ' 4-1, 1-2, 2-2',
        ResultsFormatted: '7-5 (4-1, 1-2, 2-2)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 213920,
        ActivityAreaName: 'Bjølsen matchbane',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=213920',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995808,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995808',
        HomeTeamId: 581673,
        HomeTeamName: 'Lyn',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
        AwayTeamId: 530254,
        AwayTeamName: 'Øreåsen',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
        EventTeamInfo: 'Lyn - Øreåsen',
        Public: '24'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 02:21',
          PartialResult: '1-0',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '14. Oskar Kristoffer Persson',
          Assist: '19. Nicklas Regin',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 03:18',
          PartialResult: '2-0',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '69. Espen Bekkvik',
          Assist: '9. Simon Thomas Persson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 07:59',
          PartialResult: '3-0',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '22. Oskar Antero Ojala',
          Assist: '9. Simon Thomas Persson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 16:02',
          PartialResult: '4-0',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '69. Espen Bekkvik',
          Assist: '9. Simon Thomas Persson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 16:56',
          PartialResult: '4-1',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '10. Joachim Sørby Pedersen',
          Assist: '96. Christian Olsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 06:47',
          PartialResult: '4-2',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '19. Marcus Skillebekk Halvorsen',
          Assist: '20. Andreas Nicolai Baggerød',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 12:24',
          PartialResult: '5-2',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '71. Christoffer Boganes Vadla',
          Assist: '55. Trym Stokland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 16:34',
          PartialResult: '5-3',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '77. Stian Jensen',
          Assist: '15. Niclas Antonsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 00:36',
          PartialResult: '5-4',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '9. Håkon Strand',
          Assist: '19. Marcus Skillebekk Halvorsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 02:26',
          PartialResult: '5-5',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '66. Magnus Langrud',
          Assist: '77. Stian Jensen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 04:18',
          PartialResult: '6-5',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '22. Oskar Antero Ojala',
          Assist: '16. Atle Billing',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 14:13',
          PartialResult: '7-5',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '9. Simon Thomas Persson',
          Assist: '22. Oskar Antero Ojala',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }]
      }],
      pens: [{
        HomeTeam: 'Lyn',
        AwayTeam: 'Øreåsen',
        Penalties: [{
          HomeTime: '2 - 14:40',
          HomePenalty: '24. Nicholas Paulsen Lohrmann, 2 min, Hardt spill',
          AwayTime: '1 - 01:34',
          AwayPenalty: '87. Kenneth Gustavsson Furulund, 2 min, Hardt spill'
        }, {
          HomeTime: '3 - 11:55',
          HomePenalty: '23. Kim Peter Åke Lönn, 2 min, Hardt spill',
          AwayTime: '3 - 07:11',
          AwayPenalty: '9. Håkon Strand, 2 min, Hardt spill'
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Bjørn Egil Johnsen'}, {FullName: 'Fredrik Andresen'}, {FullName: 'Isak Kroon'}, {FullName: 'Jon Magne Stemnes'}],
        AwayCoaches: [{FullName: 'Eskild Aino Nordstad Kolstad'}, {FullName: 'Helge Larsen'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '1',
          FullName: 'Jørn Gilberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '4',
          FullName: 'Birger Mothes Stemnes',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '8',
          FullName: 'Magnus Johnsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Bendik Bjørgaas Austad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '16',
          FullName: 'Jan Erik Siggerud Hagen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Tuomas Petteri Pelo',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '20',
          FullName: 'Aleksi Pelo',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '21',
          FullName: 'Ronnie Mikael Alfred Adolfsson',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '25',
          FullName: 'Fredrik Alexander Holmvik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 4,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '27',
          FullName: 'Sander Johansen Skrolsvik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '75',
          FullName: 'Albin Per Valentin Bruus Green',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 4,
          Assists: 1,
          Points: 5,
          Penalties: 12,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '76',
          FullName: 'Marcus Andresen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '85',
          FullName: 'Langundo Augustin Didier Skei-Hart',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '90',
          FullName: 'Mathias Gram Larsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        AwayPlayers: [{
          ShirtNo: '1',
          FullName: 'Ole-Kristian Bakker',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '2',
          FullName: 'Martinus Toth Blindheim',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '5',
          FullName: 'Johann Jakob Vogel',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Sebastian Lie',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '24',
          FullName: 'Adrian Aaen Skjærbekk',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '25',
          FullName: 'Arya Dehnavi',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '38',
          FullName: 'Henrik Enersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Assists: 0,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '42',
          FullName: 'Tobias Nilssen Opedal',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '50',
          FullName: 'Robin Jensen Sandlie',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '55',
          FullName: 'Magnus Bredeveien Maller',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '82',
          FullName: 'Andreas Ruud Heggelund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        HomeGoalies: [{
          ShirtNo: '1',
          FullName: 'Jørn Gilberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }, {
          ShirtNo: '27',
          FullName: 'Sander Johansen Skrolsvik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Shots: 29
        }],
        AwayGoalies: [{
          ShirtNo: '1',
          FullName: 'Ole-Kristian Bakker',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 7,
          Shots: 26
        }]
      }],
      info: [{
        MatchId: 6995809,
        MatchNo: '1331202004',
        MatchDate: '2019-09-22T00:00:00',
        MatchDateFormatted: '22.09.2019',
        Time: '18:00 - 19:20',
        RoundId: 1,
        RoundName: 'Runde 1',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=1',
        Referees: [{
          Name: 'Dommer Kenneth Halvorsen',
          PersonId: 5950345,
          RefereeId: 227528,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=R2hybXFWSUlpelgvTGl3S2hUL1MxZz090'
        }, {
          Name: 'Dommer Mats Jerry Johansson',
          PersonId: 5156562,
          RefereeId: 301816,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=RlNHWjZGamdTelRJTHhxNkV5YXNFdz090'
        }],
        EndResult: '7-3',
        PartialResult: ' 1-1, 4-0, 2-2',
        ResultsFormatted: '7-3 (1-1, 4-0, 2-2)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 215232,
        ActivityAreaName: 'Jessheim is og flerbrukshall - Innebandy B',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=215232',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995809,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995809',
        HomeTeamId: 695873,
        HomeTeamName: 'Ull/Kisa',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
        AwayTeamId: 495974,
        AwayTeamName: 'Ajer',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
        EventTeamInfo: 'Ull/Kisa - Ajer',
        Public: '100'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 07:06',
          PartialResult: '0-1',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: '38. Henrik Enersen',
          Assist: '5. Johann Jakob Vogel',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 14:54',
          PartialResult: '1-1',
          TeamName: 'Ullensaker/Kisa IL',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Scorer: '19. Tuomas Petteri Pelo',
          Assist: '8. Magnus Johnsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 09:57',
          PartialResult: '2-1',
          TeamName: 'Ullensaker/Kisa IL',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Scorer: '76. Marcus Andresen',
          Assist: '20. Aleksi Pelo',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 13:20',
          PartialResult: '3-1',
          TeamName: 'Ullensaker/Kisa IL',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Scorer: '75. Albin Per Valentin Bruus Green',
          Assist: '27. Sander Johansen Skrolsvik',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 16:46',
          PartialResult: '4-1',
          TeamName: 'Ullensaker/Kisa IL',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Scorer: '21. Ronnie Mikael Alfred Adolfsson',
          Assist: '75. Albin Per Valentin Bruus Green',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 18:29',
          PartialResult: '5-1',
          TeamName: 'Ullensaker/Kisa IL',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Scorer: '75. Albin Per Valentin Bruus Green',
          Assist: '85. Langundo Augustin Didier Skei-Hart',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 09:55',
          PartialResult: '5-2',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: '38. Henrik Enersen',
          Assist: '42. Tobias Nilssen Opedal',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 13:05',
          PartialResult: '6-2',
          TeamName: 'Ullensaker/Kisa IL',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Scorer: '75. Albin Per Valentin Bruus Green',
          Assist: '10. Bendik Bjørgaas Austad',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 15:25',
          PartialResult: '7-2',
          TeamName: 'Ullensaker/Kisa IL',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Scorer: '75. Albin Per Valentin Bruus Green',
          Assist: '21. Ronnie Mikael Alfred Adolfsson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 18:29',
          PartialResult: '7-3',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: '38. Henrik Enersen',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }]
      }],
      pens: [{
        HomeTeam: 'Ull/Kisa',
        AwayTeam: 'Ajer',
        Penalties: [{
          HomeTime: '1 - 03:58',
          HomePenalty: '25. Fredrik Alexander Holmvik, 2 min, Låsing av kølle',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '2 - 07:19',
          HomePenalty: '25. Fredrik Alexander Holmvik, 2 min, Låsing av kølle',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '2 - 11:17',
          HomePenalty: '85. Langundo Augustin Didier Skei-Hart, 2 min, Slag',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '2 - 18:29',
          HomePenalty: '75. Albin Per Valentin Bruus Green, 12 min, Usportslig opptreden',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '3 - 18:50',
          HomePenalty: '20. Aleksi Pelo, 2 min, Ulovlig dytt (mot vant eller målbur)',
          AwayTime: '',
          AwayPenalty: ''
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Eirik Smith'}, {FullName: 'Geir Thomas Bøgle'}, {FullName: 'Stian Halvorsen'}],
        AwayCoaches: [{FullName: 'Erik Dissen'}, {FullName: 'Espen Berg'}, {FullName: 'John Kjetil Bergsmark'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '6',
          FullName: 'Jesper Hjelkrem Dirks',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Markus Jørgensen Larsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Christer Olsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '14',
          FullName: 'Sander Sørby Pedersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '15',
          FullName: 'Niclas Antonsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Marcus Skillebekk Halvorsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '20',
          FullName: 'Andreas Nicolai Baggerød',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '24',
          FullName: 'Ole-Martin Egge',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '25',
          FullName: 'Espen Jakobsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '26',
          FullName: 'Hans Petter Hasle Nilsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '32',
          FullName: 'Kenneth Gustavsson Furulund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 5,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '33',
          FullName: 'Magnus Røed',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '52',
          FullName: 'Magnus Langrud',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 12,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '69',
          FullName: 'Sander Haagenrud Brønn',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '77',
          FullName: 'Stian Jensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '96',
          FullName: 'Christian Olsen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '98',
          FullName: 'Trond Elias Thomassen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        AwayPlayers: [{
          ShirtNo: '4 ',
          FullName: 'Andreas Ervik Heggernes',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Thomas Bergsmark',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 3,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '12',
          FullName: 'Lasse Anthonisen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '13',
          FullName: 'Truls Havre',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 2,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Michael Zlatan Sven Åsberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '20',
          FullName: 'Andre Antonio Valente',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 1,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '34',
          FullName: 'Tom Egil Arnesen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '37',
          FullName: 'Lars Olav Davidsen Nedberg',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 2,
          Points: 4,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '41',
          FullName: 'Georg Bugge',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 0,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '46',
          FullName: 'Kim Haldorsen Straumsnes',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '48',
          FullName: 'Erik Angell Berg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 2,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '50',
          FullName: 'Emil Varre Sandøy',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '56',
          FullName: 'Nikolai Opsahl Johansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Assists: 0,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '91',
          FullName: 'Hassan Mohammed Nawaz',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '97',
          FullName: 'Jørgen Brevik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: null,
          FullName: 'Selvmål',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 0,
          SquadIndividualTypeId: null
        }],
        HomeGoalies: [{
          ShirtNo: '24',
          FullName: 'Ole-Martin Egge',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 5,
          Shots: 5
        }, {
          ShirtNo: '33',
          FullName: 'Magnus Røed',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 9,
          Shots: 17
        }],
        AwayGoalies: [{
          ShirtNo: '12',
          FullName: 'Lasse Anthonisen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }, {
          ShirtNo: '97',
          FullName: 'Jørgen Brevik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 7,
          Shots: 15
        }]
      }],
      info: [{
        MatchId: 6995811,
        MatchNo: '1331202006',
        MatchDate: '2019-09-26T00:00:00',
        MatchDateFormatted: '26.09.2019',
        Time: '19:45 - 21:05',
        RoundId: 2,
        RoundName: 'Runde 2',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=2',
        Referees: [{
          Name: 'Dommer Jon Åge Meller',
          PersonId: 7736256,
          RefereeId: 223625,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=eWVrVjBHNnZIOURNY0JHMGhEdGZxZz090'
        }, {
          Name: 'Dommer Håvard Pedersen',
          PersonId: 8714546,
          RefereeId: 226229,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=WFlmem9rSjBHZFVPQXR6eGQ2aG56UT090'
        }],
        EndResult: '7-14',
        PartialResult: ' 1-6, 2-4, 4-4',
        ResultsFormatted: '7-14 (1-6, 2-4, 4-4)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 214809,
        ActivityAreaName: 'Øreåsenhallen',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=214809',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995811,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995811',
        HomeTeamId: 530254,
        HomeTeamName: 'Øreåsen',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
        AwayTeamId: 581680,
        AwayTeamName: 'BMIL',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
        EventTeamInfo: 'Øreåsen - BMIL',
        Public: '40'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 01:36',
          PartialResult: '0-1',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '37. Lars Olav Davidsen Nedberg',
          Assist: '46. Kim Haldorsen Straumsnes',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 02:28',
          PartialResult: '0-2',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '41. Georg Bugge',
          Assist: '37. Lars Olav Davidsen Nedberg',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 09:44',
          PartialResult: '1-2',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '52. Magnus Langrud (Straffeslag)',
          Assist: '',
          IsPenaltyGoal: true,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 12:21',
          PartialResult: '1-3',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '34. Tom Egil Arnesen',
          Assist: '50. Emil Varre Sandøy',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 16:05',
          PartialResult: '1-4',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '56. Nikolai Opsahl Johansen',
          Assist: '20. Andre Antonio Valente',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 18:33',
          PartialResult: '1-5',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '41. Georg Bugge',
          Assist: '13. Truls Havre',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 19:47',
          PartialResult: '1-6',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '20. Andre Antonio Valente',
          Assist: '10. Thomas Bergsmark',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 01:06',
          PartialResult: '1-7',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '50. Emil Varre Sandøy',
          Assist: '34. Tom Egil Arnesen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 05:54',
          PartialResult: '2-7',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '11. Christer Olsen',
          Assist: '25. Espen Jakobsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 07:19',
          PartialResult: '2-8',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: 'Selvmål',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: true,
          IsHomeGoal: false
        }, {
          Time: '2 - 10:46',
          PartialResult: '2-9',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '37. Lars Olav Davidsen Nedberg',
          Assist: '13. Truls Havre',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 11:17',
          PartialResult: '3-9',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '26. Hans Petter Hasle Nilsen',
          Assist: '98. Trond Elias Thomassen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 18:22',
          PartialResult: '3-10',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '56. Nikolai Opsahl Johansen',
          Assist: '48. Erik Angell Berg',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 01:11',
          PartialResult: '4-10',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '77. Stian Jensen',
          Assist: '52. Magnus Langrud',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 04:04',
          PartialResult: '4-11',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '13. Truls Havre',
          Assist: '37. Lars Olav Davidsen Nedberg',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 04:36',
          PartialResult: '5-11',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '19. Marcus Skillebekk Halvorsen',
          Assist: '20. Andreas Nicolai Baggerød',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 06:47',
          PartialResult: '5-12',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '56. Nikolai Opsahl Johansen',
          Assist: '10. Thomas Bergsmark',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 08:46',
          PartialResult: '5-13',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '19. Michael Zlatan Sven Åsberg',
          Assist: '48. Erik Angell Berg',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 11:23',
          PartialResult: '5-14',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '20. Andre Antonio Valente',
          Assist: '10. Thomas Bergsmark',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 13:09',
          PartialResult: '6-14',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '15. Niclas Antonsen',
          Assist: '77. Stian Jensen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 14:22',
          PartialResult: '7-14',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '96. Christian Olsen',
          Assist: '14. Sander Sørby Pedersen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }]
      }],
      pens: [{
        HomeTeam: 'Øreåsen',
        AwayTeam: 'BMIL',
        Penalties: [{
          HomeTime: '1 - 18:33',
          HomePenalty: '96. Christian Olsen, 2 min, Hardt spill',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '3 - 06:17',
          HomePenalty: '7. Markus Jørgensen Larsen, 2 min, Gjentatte forseelser',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '3 - 07:29',
          HomePenalty: '52. Magnus Langrud, 12 min, Usportslig opptreden',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '3 - 07:29',
          HomePenalty: '32. Kenneth Gustavsson Furulund, 5 min, Hardt spill',
          AwayTime: '',
          AwayPenalty: ''
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Eskild Aino Nordstad Kolstad'}],
        AwayCoaches: [{FullName: 'Itrat Zishan'}, {FullName: 'Kenneth Lorentzen'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '1',
          FullName: 'Ole-Kristian Bakker',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '2',
          FullName: 'Martinus Toth Blindheim',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '3',
          FullName: 'Helge Larsen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Sebastian Lie',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Sverre Mikkelsen Olsbyengen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '24',
          FullName: 'Adrian Aaen Skjærbekk',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '25',
          FullName: 'Arya Dehnavi',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 4,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '30',
          FullName: 'Ferdinand Tofte Vermund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: null
        }, {
          ShirtNo: '38',
          FullName: 'Henrik Enersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '42',
          FullName: 'Tobias Nilssen Opedal',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '50',
          FullName: 'Robin Jensen Sandlie',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '77',
          FullName: 'Eirik André Ottersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: null
        }, {
          ShirtNo: '82',
          FullName: 'Andreas Ruud Heggelund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '86',
          FullName: 'Mike Prestmarken',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: null
        }, {
          ShirtNo: null,
          FullName: 'Selvmål',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 0,
          SquadIndividualTypeId: null
        }],
        AwayPlayers: [{
          ShirtNo: '1',
          FullName: 'Kimmy Emil Christensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '4',
          FullName: 'Julia Paulina Johannesson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Lars Petter Kandre',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '9',
          FullName: 'Simon Thomas Persson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '14',
          FullName: 'Oskar Kristoffer Persson',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '16',
          FullName: 'Atle Billing',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Nicklas Regin',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '22',
          FullName: 'Oskar Antero Ojala',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '23',
          FullName: 'Kim Peter Åke Lönn',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '24',
          FullName: 'Nicholas Paulsen Lohrmann',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '30',
          FullName: 'Aleksander Tyrspappa Grimstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '55',
          FullName: 'Trym Stokland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '66',
          FullName: 'Patrik Mikael Joakim Ohlsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '69',
          FullName: 'Espen Bekkvik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '71',
          FullName: 'Christoffer Boganes Vadla',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 4,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '76',
          FullName: 'Per Hampus Johnsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '88',
          FullName: 'Per Konrad Bergetoft-Karlsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 4,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '',
          FullName: 'Kristian Refshal Hansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        HomeGoalies: [{
          ShirtNo: '1',
          FullName: 'Ole-Kristian Bakker',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }, {
          ShirtNo: '11',
          FullName: 'Sverre Mikkelsen Olsbyengen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 4,
          Shots: 28
        }],
        AwayGoalies: [{
          ShirtNo: '1',
          FullName: 'Kimmy Emil Christensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Shots: 9
        }, {
          ShirtNo: '30',
          FullName: 'Aleksander Tyrspappa Grimstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 1
        }]
      }],
      info: [{
        MatchId: 6995810,
        MatchNo: '1331202005',
        MatchDate: '2019-09-27T00:00:00',
        MatchDateFormatted: '27.09.2019',
        Time: '19:45 - 21:05',
        RoundId: 2,
        RoundName: 'Runde 2',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=2',
        Referees: [{
          Name: 'Dommer Morten Isnes',
          PersonId: 4360125,
          RefereeId: 223710,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=R2FrcHBCU2VIbU5uYmdzM3RMelR4QT090'
        }, {
          Name: 'Dommer Andreas Femtegjeld Sletten',
          PersonId: 7749152,
          RefereeId: 228670,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=TzFIOEh2QU9wY2tLQ0R6cWxtVC8zQT090'
        }],
        EndResult: '3-4',
        PartialResult: ' 0-1, 3-0, 0-3',
        ResultsFormatted: '3-4 (0-1, 3-0, 0-3)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 214305,
        ActivityAreaName: 'Hedmarkshallen',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=214305',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995810,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995810',
        HomeTeamId: 495974,
        HomeTeamName: 'Ajer',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
        AwayTeamId: 581673,
        AwayTeamName: 'Lyn',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
        EventTeamInfo: 'Ajer - Lyn',
        Public: '58'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 04:49',
          PartialResult: '0-1',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '88. Per Konrad Bergetoft-Karlsson',
          Assist: '23. Kim Peter Åke Lönn',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 01:07',
          PartialResult: '1-1',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: '38. Henrik Enersen',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 06:21',
          PartialResult: '2-1',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: 'Selvmål',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: true,
          IsHomeGoal: true
        }, {
          Time: '2 - 18:24',
          PartialResult: '3-1',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: '77. Eirik André Ottersen (Straffeslag)',
          Assist: '',
          IsPenaltyGoal: true,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 12:34',
          PartialResult: '3-2',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '16. Atle Billing',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 12:51',
          PartialResult: '3-3',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '23. Kim Peter Åke Lönn',
          Assist: '88. Per Konrad Bergetoft-Karlsson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 18:09',
          PartialResult: '3-4',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '7. Lars Petter Kandre',
          Assist: '9. Simon Thomas Persson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }]
      }],
      pens: [{
        HomeTeam: 'Ajer',
        AwayTeam: 'Lyn',
        Penalties: [{
          HomeTime: '1 - 07:58',
          HomePenalty: '42. Tobias Nilssen Opedal, 2 min, Feil bytte',
          AwayTime: '1 - 09:09',
          AwayPenalty: '71. Christoffer Boganes Vadla, 2 min, Gjentatte forseelser'
        }, {
          HomeTime: '2 - 05:41',
          HomePenalty: '25. Arya Dehnavi, 2 min, Hardt spill',
          AwayTime: '2 - 05:25',
          AwayPenalty: '69. Espen Bekkvik, 2 min, Feil avstand'
        }, {
          HomeTime: '3 - 16:40',
          HomePenalty: '25. Arya Dehnavi, 2 min, Protest',
          AwayTime: '2 - 10:54',
          AwayPenalty: '71. Christoffer Boganes Vadla, 2 min, Holding'
        }, {
          HomeTime: '',
          HomePenalty: '',
          AwayTime: '3 - 02:19',
          AwayPenalty: '88. Per Konrad Bergetoft-Karlsson, 2 min, Slag'
        }, {
          HomeTime: '',
          HomePenalty: '',
          AwayTime: '3 - 08:09',
          AwayPenalty: '76. Per Hampus Johnsson, 2 min, Slag'
        }, {
          HomeTime: '',
          HomePenalty: '',
          AwayTime: '3 - 19:55',
          AwayPenalty: '88. Per Konrad Bergetoft-Karlsson, 2 min, Slag'
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Eskild Kristigonus Nordby'}, {FullName: 'Jan Emil Gudem'}, {FullName: 'Truls Lindahl'}],
        AwayCoaches: [{FullName: 'Christer Andre Nydahl'}, {FullName: 'Geir Ole Løchen'}, {FullName: 'Kim Tobias Härnlund'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '1',
          FullName: 'Jørgen Skogstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '2',
          FullName: 'Ingar Martinussen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '4',
          FullName: 'Magnus Gulliksen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Christopher André Jaksland',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '13',
          FullName: 'Mats Lynum Hartmann',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '22',
          FullName: 'Håkon Hansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '28',
          FullName: 'Robert Andreas Kyllo',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '39',
          FullName: 'Robin Gabrielsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '41',
          FullName: 'Alexander Jaksland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '51',
          FullName: 'Per Axel Wallin',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 2,
          Points: 2,
          Penalties: 4,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '53',
          FullName: 'Petter Knutsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '79',
          FullName: 'Erik Magnus Jirving',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '94',
          FullName: 'Robin Perzan Norstrøm',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 4,
          Assists: 0,
          Points: 4,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '98',
          FullName: 'Vetle Lindset Korslund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        AwayPlayers: [{
          ShirtNo: '2',
          FullName: 'Patrik Haugland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '4',
          FullName: 'Thomas Camillo Gutteberg-Christiansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Alexander Stein Njøs',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Assists: 1,
          Points: 4,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '9',
          FullName: 'Jørgen Myrvold Iversen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Sverre Sjørbotten Gulliksen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Kenneth Rønningen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '13',
          FullName: 'Thomas Hildre Hartvig',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '17',
          FullName: 'Kristian Wiker Holmemo',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '22',
          FullName: 'Anders Nordhagen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 2,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '23',
          FullName: 'Robin Aleksander Gærup',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '31',
          FullName: 'Per Nils Pontus Lundberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '34',
          FullName: 'Ole Bastian Kolstad Løchen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '35',
          FullName: 'Peter Ingemar Danielsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '42',
          FullName: 'Sondre Stokke',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '44',
          FullName: 'John Einar Luther',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '91',
          FullName: 'Tomas Heggelund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        HomeGoalies: [{
          ShirtNo: '1',
          FullName: 'Jørgen Skogstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 8,
          Shots: 23
        }],
        AwayGoalies: [{
          ShirtNo: '35',
          FullName: 'Peter Ingemar Danielsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 6,
          Shots: 31
        }]
      }],
      info: [{
        MatchId: 6995813,
        MatchNo: '1331202008',
        MatchDate: '2019-09-29T00:00:00',
        MatchDateFormatted: '29.09.2019',
        Time: '13:00 - 14:20',
        RoundId: 2,
        RoundName: 'Runde 2',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=2',
        Referees: [{
          Name: 'Dommer Kenneth Halvorsen',
          PersonId: 5950345,
          RefereeId: 227528,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=R2hybXFWSUlpelgvTGl3S2hUL1MxZz090'
        }, {
          Name: 'Dommer Mats Jerry Johansson',
          PersonId: 5156562,
          RefereeId: 301816,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=RlNHWjZGamdTelRJTHhxNkV5YXNFdz090'
        }],
        EndResult: '6-8',
        PartialResult: ' 3-4, 1-1, 2-3',
        ResultsFormatted: '6-8 (3-4, 1-1, 2-3)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 213937,
        ActivityAreaName: 'Heggedalshallen',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=213937',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995813,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995813',
        HomeTeamId: 743009,
        HomeTeamName: 'Asker',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
        AwayTeamId: 581696,
        AwayTeamName: 'Lillestrøm',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
        EventTeamInfo: 'Asker - Lillestrøm',
        Public: '72'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 01:16',
          PartialResult: '0-1',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '31. Per Nils Pontus Lundberg',
          Assist: '11. Kenneth Rønningen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 02:07',
          PartialResult: '1-1',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '94. Robin Perzan Norstrøm',
          Assist: '98. Vetle Lindset Korslund',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 05:06',
          PartialResult: '1-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '4. Thomas Camillo Gutteberg-Christiansen',
          Assist: '7. Alexander Stein Njøs',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 05:54',
          PartialResult: '2-2',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '79. Erik Magnus Jirving',
          Assist: '51. Per Axel Wallin',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 05:57',
          PartialResult: '2-3',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '11. Kenneth Rønningen',
          Assist: '44. John Einar Luther',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 06:33',
          PartialResult: '3-3',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '94. Robin Perzan Norstrøm',
          Assist: '41. Alexander Jaksland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 14:13',
          PartialResult: '3-4',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '7. Alexander Stein Njøs',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 04:24',
          PartialResult: '4-4',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '28. Robert Andreas Kyllo',
          Assist: '39. Robin Gabrielsson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 19:55',
          PartialResult: '4-5',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '7. Alexander Stein Njøs',
          Assist: '22. Anders Nordhagen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 00:14',
          PartialResult: '5-5',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '94. Robin Perzan Norstrøm',
          Assist: '7. Christopher André Jaksland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 12:27',
          PartialResult: '5-6',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '10. Sverre Sjørbotten Gulliksen',
          Assist: '22. Anders Nordhagen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 13:31',
          PartialResult: '5-7',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '7. Alexander Stein Njøs',
          Assist: '91. Tomas Heggelund',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 17:12',
          PartialResult: '5-8',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '22. Anders Nordhagen',
          Assist: '4. Thomas Camillo Gutteberg-Christiansen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 19:33',
          PartialResult: '6-8',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '94. Robin Perzan Norstrøm',
          Assist: '51. Per Axel Wallin',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }]
      }],
      pens: [{
        HomeTeam: 'Asker',
        AwayTeam: 'Lillestrøm',
        Penalties: [{
          HomeTime: '2 - 00:57',
          HomePenalty: '94. Robin Perzan Norstrøm, 2 min, Slag',
          AwayTime: '1 - 04:25',
          AwayPenalty: '42. Sondre Stokke, 2 min, Gjentatte forseelser'
        }, {
          HomeTime: '2 - 12:32',
          HomePenalty: '51. Per Axel Wallin, 2 min, Låsing av kølle',
          AwayTime: '1 - 12:00',
          AwayPenalty: '11. Kenneth Rønningen, 2 min, Slag'
        }, {
          HomeTime: '2 - 15:38',
          HomePenalty: '22. Håkon Hansen, 2 min, Slag',
          AwayTime: '1 - 15:09',
          AwayPenalty: '44. John Einar Luther, 2 min, Holding'
        }, {
          HomeTime: '2 - 18:54',
          HomePenalty: '51. Per Axel Wallin, 2 min, Obstruksjon',
          AwayTime: '2 - 07:29',
          AwayPenalty: '2. Patrik Haugland, 2 min, Ulovlig dytt (mot vant eller målbur)'
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Geir Ole Løchen'}, {FullName: 'Kim Tobias Härnlund'}],
        AwayCoaches: [{FullName: 'Claus Jørgen Kvasnes'}, {FullName: 'Marko Johannes Länsman'}, {FullName: 'Steinar Engebretsen'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '2',
          FullName: 'Patrik Haugland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 2,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '4',
          FullName: 'Thomas Camillo Gutteberg-Christiansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 2,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Alexander Stein Njøs',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '9',
          FullName: 'Jørgen Myrvold Iversen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Sverre Sjørbotten Gulliksen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Kenneth Rønningen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '13',
          FullName: 'Thomas Hildre Hartvig',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 2,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '17',
          FullName: 'Kristian Wiker Holmemo',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Emil Andrè Johannessen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '22',
          FullName: 'Anders Nordhagen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 5,
          Assists: 1,
          Points: 6,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '31',
          FullName: 'Per Nils Pontus Lundberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '33',
          FullName: 'Filip Pokorny',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '34',
          FullName: 'Ole Bastian Kolstad Løchen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '35',
          FullName: 'Peter Ingemar Danielsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '42',
          FullName: 'Sondre Stokke',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 0,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '44',
          FullName: 'John Einar Luther',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '91',
          FullName: 'Tomas Heggelund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        AwayPlayers: [{
          ShirtNo: '1',
          FullName: 'Hans Sebastian Lundberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '2',
          FullName: 'Erik Christensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '5',
          FullName: 'Oscar Fredrik Baldetorp',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Amund Hansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Jimmi Benteson Bruland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '12',
          FullName: 'Jørgen Kvasnes',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '14',
          FullName: 'Daniel Gundersen Engebretsen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '17',
          FullName: 'Jonas Frantzen Lie',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Lasse Kvasnes',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '22',
          FullName: 'Christoffer Ellingham',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '25',
          FullName: 'Lars Arne Rønningen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '28',
          FullName: 'Christoffer Maarud Lundgreen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 4,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '48',
          FullName: 'Eivind Hindrum',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '49',
          FullName: 'Glenn Børmarken',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '95',
          FullName: 'Pål-Andre Holbø',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }],
        HomeGoalies: [{
          ShirtNo: '35',
          FullName: 'Peter Ingemar Danielsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Shots: 11
        }],
        AwayGoalies: [{
          ShirtNo: '1',
          FullName: 'Hans Sebastian Lundberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }, {
          ShirtNo: '95',
          FullName: 'Pål-Andre Holbø',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 10,
          Shots: 39
        }]
      }],
      info: [{
        MatchId: 6995814,
        MatchNo: '1331202009',
        MatchDate: '2019-10-10T00:00:00',
        MatchDateFormatted: '10.10.2019',
        Time: '19:45 - 21:05',
        RoundId: 3,
        RoundName: 'Runde 3',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=3',
        Referees: [{
          Name: 'Dommer Jon Åge Meller',
          PersonId: 7736256,
          RefereeId: 223625,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=eWVrVjBHNnZIOURNY0JHMGhEdGZxZz090'
        }, {
          Name: 'Dommer Håvard Pedersen',
          PersonId: 8714546,
          RefereeId: 226229,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=WFlmem9rSjBHZFVPQXR6eGQ2aG56UT090'
        }],
        EndResult: '10-2',
        PartialResult: ' 5-0, 1-2, 4-0',
        ResultsFormatted: '10-2 (5-0, 1-2, 4-0)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 214411,
        ActivityAreaName: 'Skedsmohallen A',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=214411',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995814,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995814',
        HomeTeamId: 581696,
        HomeTeamName: 'Lillestrøm',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
        AwayTeamId: 504455,
        AwayTeamName: 'Grei',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
        EventTeamInfo: 'Lillestrøm - Grei',
        Public: '43'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 00:54',
          PartialResult: '1-0',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '7. Alexander Stein Njøs',
          Assist: '34. Ole Bastian Kolstad Løchen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 02:45',
          PartialResult: '2-0',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '22. Anders Nordhagen',
          Assist: '7. Alexander Stein Njøs',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 04:17',
          PartialResult: '3-0',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '42. Sondre Stokke',
          Assist: '22. Anders Nordhagen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 06:38',
          PartialResult: '4-0',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '2. Patrik Haugland',
          Assist: '4. Thomas Camillo Gutteberg-Christiansen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 16:45',
          PartialResult: '5-0',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '22. Anders Nordhagen',
          Assist: '13. Thomas Hildre Hartvig',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 06:51',
          PartialResult: '5-1',
          TeamName: 'Grei',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
          Scorer: '14. Daniel Gundersen Engebretsen',
          Assist: '19. Lasse Kvasnes',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 09:47',
          PartialResult: '5-2',
          TeamName: 'Grei',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
          Scorer: '2. Erik Christensen',
          Assist: '14. Daniel Gundersen Engebretsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 12:30',
          PartialResult: '6-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '22. Anders Nordhagen',
          Assist: '2. Patrik Haugland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 06:22',
          PartialResult: '7-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '22. Anders Nordhagen',
          Assist: '13. Thomas Hildre Hartvig',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 10:41',
          PartialResult: '8-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '10. Sverre Sjørbotten Gulliksen',
          Assist: '91. Tomas Heggelund',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 13:00',
          PartialResult: '9-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '42. Sondre Stokke',
          Assist: '2. Patrik Haugland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 16:14',
          PartialResult: '10-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '22. Anders Nordhagen',
          Assist: '4. Thomas Camillo Gutteberg-Christiansen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }]
      }],
      pens: [{
        HomeTeam: 'Lillestrøm',
        AwayTeam: 'Grei',
        Penalties: [{
          HomeTime: '2 - 08:54',
          HomePenalty: '44. John Einar Luther, 2 min, Gjentatte forseelser',
          AwayTime: '1 - 01:46',
          AwayPenalty: '28. Christoffer Maarud Lundgreen, 2 min, Hardt spill'
        }, {
          HomeTime: '',
          HomePenalty: '',
          AwayTime: '2 - 12:54',
          AwayPenalty: '28. Christoffer Maarud Lundgreen, 2 min, Ulovlig dytt (mot vant eller målbur)'
        }, {
          HomeTime: '',
          HomePenalty: '',
          AwayTime: '2 - 19:19',
          AwayPenalty: '49. Glenn Børmarken, 2 min, For mange spillere på banen'
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Anton Mats Brenner'}, {FullName: 'Didrik Thorbjørn Voss'}, {FullName: 'Stig Magne Solem'}],
        AwayCoaches: [{FullName: 'Eirik Smith'}, {FullName: 'Jørgen Christensen'}, {FullName: 'Stian Halvorsen'}, {FullName: 'Thomas Bøgle'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '1',
          FullName: 'Jacob Voss',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '2',
          FullName: 'Victor Gustaf Ekestubbe',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '3',
          FullName: 'Sander Hekne Thoresen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Magnus Hermansen Oswold',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '8',
          FullName: 'Fredrik Sundell',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Aleksander Nodland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Assists: 0,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '12',
          FullName: 'Bendik Govertsen Johnsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '13',
          FullName: 'Vetle Meier Hobbesland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '15',
          FullName: 'Kjetil Denvik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '18',
          FullName: 'Mathias Bentz Hammerstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Johan Rannem Solem',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 2,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '20',
          FullName: 'Lukas Joaquin Mondaca Haugen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 0,
          Points: 2,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '21',
          FullName: 'Erik Viggo Nielsen de Santana',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '29',
          FullName: 'Bjørn Aasmund Østen Fredsted',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '31',
          FullName: 'Robin Kristoffer Simonsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '55',
          FullName: 'Oskar Sjåvåg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        AwayPlayers: [{
          ShirtNo: '10',
          FullName: 'Joachim Sørby Pedersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Christer Olsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '14',
          FullName: 'Sander Sørby Pedersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '15',
          FullName: 'Niclas Antonsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Marcus Skillebekk Halvorsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '24',
          FullName: 'Ole-Martin Egge',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '25',
          FullName: 'Espen Jakobsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 12,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '26',
          FullName: 'Hans Petter Hasle Nilsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '32',
          FullName: 'Kenneth Gustavsson Furulund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '33',
          FullName: 'Magnus Røed',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '36',
          FullName: 'Thomas Bøgle',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 2,
          SquadIndividualTypeId: 1018
        }, {
          ShirtNo: '69',
          FullName: 'Sander Haagenrud Brønn',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '77',
          FullName: 'Stian Jensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '96',
          FullName: 'Christian Olsen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '98',
          FullName: 'Trond Elias Thomassen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        HomeGoalies: [{
          ShirtNo: '31',
          FullName: 'Robin Kristoffer Simonsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Shots: 18
        }],
        AwayGoalies: [{
          ShirtNo: '33',
          FullName: 'Magnus Røed',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 7,
          Shots: 35
        }]
      }],
      info: [{
        MatchId: 6995815,
        MatchNo: '1331202010',
        MatchDate: '2019-10-12T00:00:00',
        MatchDateFormatted: '12.10.2019',
        Time: '16:00 - 17:20',
        RoundId: 3,
        RoundName: 'Runde 3',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=3',
        Referees: [{
          Name: 'Dommer Tommy Eriksen',
          PersonId: 7149373,
          RefereeId: 228053,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=Q2lyR3NiZVBIUi9Xd3g0dnYxZjdXdz090'
        }, {
          Name: 'Dommer Trond Erik Olsen',
          PersonId: 4431065,
          RefereeId: 227399,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=L1B2NDkrbElOZWlPc3Z2Mk5mWUhKUT090'
        }],
        EndResult: '7-2',
        PartialResult: ' 2-1, 4-0, 1-1',
        ResultsFormatted: '7-2 (2-1, 4-0, 1-1)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 214304,
        ActivityAreaName: 'Bækkelagshallen',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=214304',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995815,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995815',
        HomeTeamId: 580779,
        HomeTeamName: 'Bækkelaget',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
        AwayTeamId: 530254,
        AwayTeamName: 'Øreåsen',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
        EventTeamInfo: 'Bækkelaget - Øreåsen',
        Public: '56'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 02:53',
          PartialResult: '1-0',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '20. Lukas Joaquin Mondaca Haugen',
          Assist: '7. Magnus Hermansen Oswold',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 03:08',
          PartialResult: '1-1',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '11. Christer Olsen',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 08:09',
          PartialResult: '2-1',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '10. Aleksander Nodland',
          Assist: '19. Johan Rannem Solem',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 01:24',
          PartialResult: '3-1',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '20. Lukas Joaquin Mondaca Haugen',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 03:28',
          PartialResult: '4-1',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '10. Aleksander Nodland',
          Assist: '29. Bjørn Aasmund Østen Fredsted',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 14:23',
          PartialResult: '5-1',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '29. Bjørn Aasmund Østen Fredsted',
          Assist: '15. Kjetil Denvik',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 14:42',
          PartialResult: '6-1',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '13. Vetle Meier Hobbesland',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 05:55',
          PartialResult: '6-2',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '77. Stian Jensen (Straffeslag)',
          Assist: '',
          IsPenaltyGoal: true,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 10:13',
          PartialResult: '7-2',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '10. Aleksander Nodland',
          Assist: '19. Johan Rannem Solem',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }]
      }],
      pens: [{
        HomeTeam: 'Bækkelaget',
        AwayTeam: 'Øreåsen',
        Penalties: [{
          HomeTime: '2 - 05:50',
          HomePenalty: '3. Sander Hekne Thoresen, 2 min, Hardt spill',
          AwayTime: '1 - 13:52',
          AwayPenalty: '25. Espen Jakobsen, 12 min, Usportslig opptreden'
        }, {
          HomeTime: '2 - 19:23',
          HomePenalty: '8. Fredrik Sundell, 2 min, Forsinkelse av spillet',
          AwayTime: '1 - 19:26',
          AwayPenalty: '96. Christian Olsen, 2 min, Slag'
        }, {
          HomeTime: '3 - 01:40',
          HomePenalty: '55. Oskar Sjåvåg, 2 min, Slag',
          AwayTime: '1 - 19:26',
          AwayPenalty: '11. Christer Olsen, 2 min, Gjentatte forseelser'
        }, {
          HomeTime: '3 - 02:24',
          HomePenalty: '20. Lukas Joaquin Mondaca Haugen, 2 min, Feil avstand',
          AwayTime: '3 - 08:44',
          AwayPenalty: '32. Kenneth Gustavsson Furulund, 2 min, Ulovlig dytt (mot vant eller målbur)'
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Eskild Kristigonus Nordby'}, {FullName: 'Espen Øren Antonsen'}, {FullName: 'Jan Emil Gudem'}, {FullName: 'Joachim Karlsen'}, {FullName: 'Truls Lindahl'}],
        AwayCoaches: [{FullName: 'Jørgen Christensen'}, {FullName: 'Stian Halvorsen'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '7',
          FullName: 'Christopher André Jaksland',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '16',
          FullName: 'Per Christian Brath',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 3,
          Points: 5,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '21',
          FullName: 'Per Axel Wallin',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 6,
          Assists: 6,
          Points: 12,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '22',
          FullName: 'Håkon Hansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Assists: 1,
          Points: 4,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '36',
          FullName: 'Christian Kolderup',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '39',
          FullName: 'Robin Gabrielsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '41',
          FullName: 'Alexander Jaksland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Assists: 3,
          Points: 6,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '46',
          FullName: 'Daniel Vassbund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 4,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '53',
          FullName: 'Petter Knutsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 2,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '79',
          FullName: 'Erik Magnus Jirving',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 4,
          Assists: 1,
          Points: 5,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '94',
          FullName: 'Robin Perzan Norstrøm',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 2,
          Points: 4,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        AwayPlayers: [{
          ShirtNo: '4',
          FullName: 'Herman Ødegaard Knutsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '6',
          FullName: 'Jesper Hjelkrem Dirks',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Markus Jørgensen Larsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Joachim Sørby Pedersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '14',
          FullName: 'Sander Sørby Pedersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '15',
          FullName: 'Niclas Antonsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 2,
          Points: 2,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Marcus Skillebekk Halvorsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '20',
          FullName: 'Andreas Nicolai Baggerød',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '26',
          FullName: 'Hans Petter Hasle Nilsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '30',
          FullName: 'Magnus Røed',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '32',
          FullName: 'Kenneth Gustavsson Furulund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '52',
          FullName: 'Magnus Langrud',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '69',
          FullName: 'Sander Haagenrud Brønn',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '77',
          FullName: 'Stian Jensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Assists: 0,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '96',
          FullName: 'Christian Olsen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '98',
          FullName: 'Trond Elias Thomassen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        HomeGoalies: [{
          ShirtNo: '36',
          FullName: 'Christian Kolderup',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 5,
          Shots: 27
        }],
        AwayGoalies: [{
          ShirtNo: '4',
          FullName: 'Herman Ødegaard Knutsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Shots: 12
        }, {
          ShirtNo: '30',
          FullName: 'Magnus Røed',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 19,
          Shots: 44
        }]
      }],
      info: [{
        MatchId: 6995822,
        MatchNo: '1331202017',
        MatchDate: '2019-11-02T00:00:00',
        MatchDateFormatted: '02.11.2019',
        Time: '15:00 - 16:20',
        RoundId: 5,
        RoundName: 'Runde 5',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=5',
        Referees: [{
          Name: 'Dommer Rune Davidsen',
          PersonId: 4886969,
          RefereeId: 226843,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=VCtmOG56YzVxajR4RGlGcnplRm9Mdz090'
        }, {
          Name: 'Dommer Andre Kopperud',
          PersonId: 8934362,
          RefereeId: 299558,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=SXpwNGhQUXRlL2FBcjFRcmVZYnJaUT090'
        }],
        EndResult: '22-5',
        PartialResult: ' 5-3, 11-1, 6-1',
        ResultsFormatted: '22-5 (5-3, 11-1, 6-1)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 213937,
        ActivityAreaName: 'Heggedalshallen',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=213937',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995822,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995822',
        HomeTeamId: 743009,
        HomeTeamName: 'Asker',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
        AwayTeamId: 530254,
        AwayTeamName: 'Øreåsen',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
        EventTeamInfo: 'Asker - Øreåsen',
        Public: '64'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 02:34',
          PartialResult: '1-0',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '21. Per Axel Wallin',
          Assist: '7. Christopher André Jaksland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 05:36',
          PartialResult: '1-1',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '7. Markus Jørgensen Larsen',
          Assist: '6. Jesper Hjelkrem Dirks',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 07:01',
          PartialResult: '2-1',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '41. Alexander Jaksland',
          Assist: '21. Per Axel Wallin',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 10:28',
          PartialResult: '2-2',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '77. Stian Jensen',
          Assist: '52. Magnus Langrud',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 11:07',
          PartialResult: '2-3',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '96. Christian Olsen',
          Assist: '10. Joachim Sørby Pedersen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 13:43',
          PartialResult: '3-3',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '94. Robin Perzan Norstrøm',
          Assist: '46. Daniel Vassbund',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 14:15',
          PartialResult: '4-3',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '21. Per Axel Wallin',
          Assist: '53. Petter Knutsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 18:00',
          PartialResult: '5-3',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '53. Petter Knutsen',
          Assist: '79. Erik Magnus Jirving',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 00:46',
          PartialResult: '6-3',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '41. Alexander Jaksland',
          Assist: '21. Per Axel Wallin',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 03:52',
          PartialResult: '7-3',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '21. Per Axel Wallin',
          Assist: '41. Alexander Jaksland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 05:49',
          PartialResult: '8-3',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '21. Per Axel Wallin',
          Assist: '41. Alexander Jaksland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 08:28',
          PartialResult: '9-3',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '39. Robin Gabrielsson',
          Assist: '22. Håkon Hansen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 10:25',
          PartialResult: '10-3',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '79. Erik Magnus Jirving',
          Assist: '21. Per Axel Wallin',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 11:06',
          PartialResult: '11-3',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '79. Erik Magnus Jirving',
          Assist: '21. Per Axel Wallin',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 12:45',
          PartialResult: '11-4',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '77. Stian Jensen',
          Assist: '15. Niclas Antonsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 15:01',
          PartialResult: '12-4',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '16. Per Christian Brath',
          Assist: '41. Alexander Jaksland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 18:19',
          PartialResult: '13-4',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '79. Erik Magnus Jirving',
          Assist: '94. Robin Perzan Norstrøm',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 19:20',
          PartialResult: '14-4',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '21. Per Axel Wallin',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 19:31',
          PartialResult: '15-4',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '22. Håkon Hansen',
          Assist: '16. Per Christian Brath',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 19:41',
          PartialResult: '16-4',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '22. Håkon Hansen',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 00:26',
          PartialResult: '16-5',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '77. Stian Jensen',
          Assist: '15. Niclas Antonsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 05:01',
          PartialResult: '17-5',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '16. Per Christian Brath',
          Assist: '21. Per Axel Wallin',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 05:50',
          PartialResult: '18-5',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '22. Håkon Hansen',
          Assist: '16. Per Christian Brath',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 10:00',
          PartialResult: '19-5',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '21. Per Axel Wallin',
          Assist: '53. Petter Knutsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 16:12',
          PartialResult: '20-5',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '41. Alexander Jaksland',
          Assist: '21. Per Axel Wallin',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 17:27',
          PartialResult: '21-5',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '79. Erik Magnus Jirving',
          Assist: '94. Robin Perzan Norstrøm',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 18:50',
          PartialResult: '22-5',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '94. Robin Perzan Norstrøm',
          Assist: '16. Per Christian Brath',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }]
      }],
      pens: [{
        HomeTeam: 'Asker',
        AwayTeam: 'Øreåsen',
        Penalties: [{
          HomeTime: '1 - 09:40',
          HomePenalty: '46. Daniel Vassbund, 2 min, Slag',
          AwayTime: '3 - 10:41',
          AwayPenalty: '15. Niclas Antonsen, 2 min, Slag'
        }, {
          HomeTime: '2 - 01:15',
          HomePenalty: '46. Daniel Vassbund, 2 min, Slag',
          AwayTime: '3 - 16:52',
          AwayPenalty: '20. Andreas Nicolai Baggerød, 2 min, Obstruksjon'
        }, {
          HomeTime: '2 - 16:00',
          HomePenalty: '79. Erik Magnus Jirving, 2 min, Spill med høy kølle',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '2 - 19:50',
          HomePenalty: '94. Robin Perzan Norstrøm, 2 min, Feil avstand',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '3 - 06:58',
          HomePenalty: '22. Håkon Hansen, 2 min, For mange spillere på banen',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '3 - 14:18',
          HomePenalty: '7. Christopher André Jaksland, 2 min, Protest',
          AwayTime: '',
          AwayPenalty: ''
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Erik Dissen'}, {FullName: 'Espen Berg'}, {FullName: 'John Kjetil Bergsmark'}, {FullName: 'Johny Tore Mikael Wallenius'}, {FullName: 'Morten Aleksander Hauglin'}],
        AwayCoaches: [{FullName: 'Julia Paulina Johannesson'}, {FullName: 'Kenneth Lorentzen'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '4 ',
          FullName: 'Andreas Ervik Heggernes',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '5',
          FullName: 'Mads Asbjørn Sand Dørstad',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Thomas Bergsmark',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '12',
          FullName: 'Lasse Anthonisen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '13',
          FullName: 'Truls Havre',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Michael Zlatan Sven Åsberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '20',
          FullName: 'Andre Antonio Valente',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '25',
          FullName: 'Frederic Ringvold Westheim',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '34',
          FullName: 'Tom Egil Arnesen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '37',
          FullName: 'Lars Olav Davidsen Nedberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '41',
          FullName: 'Georg Bugge',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '46',
          FullName: 'Kim Haldorsen Straumsnes',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '48',
          FullName: 'Erik Angell Berg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '50',
          FullName: 'Emil Varre Sandøy',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '60',
          FullName: 'Bendik Fürst Mustad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '70',
          FullName: 'Jacob Tagholdt Sortevik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '97',
          FullName: 'Jørgen Brevik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }],
        AwayPlayers: [{
          ShirtNo: '1',
          FullName: 'Kimmy Emil Christensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '9',
          FullName: 'Simon Thomas Persson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 3,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '13',
          FullName: 'Jari Juhani Törmänen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '14',
          FullName: 'Oskar Kristoffer Persson',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '16',
          FullName: 'Atle Billing',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Nicklas Regin',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '22',
          FullName: 'Oskar Antero Ojala',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Assists: 0,
          Points: 3,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '23',
          FullName: 'Kim Peter Åke Lönn',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '24',
          FullName: 'Nicholas Paulsen Lohrmann',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '55',
          FullName: 'Trym Stokland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '66',
          FullName: 'Patrik Mikael Joakim Ohlsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Assists: 0,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '69',
          FullName: 'Espen Bekkvik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '71',
          FullName: 'Christoffer Boganes Vadla',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '76',
          FullName: 'Per Hampus Johnsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '88',
          FullName: 'Per Konrad Bergetoft-Karlsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 2,
          Points: 2,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: null,
          FullName: 'Knut Røse',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        HomeGoalies: [{
          ShirtNo: '12',
          FullName: 'Lasse Anthonisen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Shots: 5
        }, {
          ShirtNo: '97',
          FullName: 'Jørgen Brevik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 6,
          Shots: 12
        }],
        AwayGoalies: [{
          ShirtNo: '1',
          FullName: 'Kimmy Emil Christensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Shots: 19
        }]
      }],
      info: [{
        MatchId: 6995825,
        MatchNo: '1331202020',
        MatchDate: '2019-11-02T00:00:00',
        MatchDateFormatted: '02.11.2019',
        Time: '16:00 - 17:49',
        RoundId: 5,
        RoundName: 'Runde 5',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=5',
        Referees: [{
          Name: 'Dommer Trond Erik Olsen',
          PersonId: 4431065,
          RefereeId: 227399,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=L1B2NDkrbElOZWlPc3Z2Mk5mWUhKUT090'
        }, {
          Name: 'Dommer Tommy Amundstad Monge',
          PersonId: 5163753,
          RefereeId: 228059,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=TlNGc25VZjkrOERBNVNzQ3gyeWg0Zz090'
        }],
        EndResult: '1-8',
        PartialResult: ' 0-2, 0-4, 1-2',
        ResultsFormatted: '1-8 (0-2, 0-4, 1-2)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 213930,
        ActivityAreaName: 'Skøyenhallen',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=213930',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995825,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995825',
        HomeTeamId: 581680,
        HomeTeamName: 'BMIL',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
        AwayTeamId: 581673,
        AwayTeamName: 'Lyn',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
        EventTeamInfo: 'BMIL - Lyn',
        Public: '55'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 10:23',
          PartialResult: '0-1',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '66. Patrik Mikael Joakim Ohlsson',
          Assist: '88. Per Konrad Bergetoft-Karlsson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 17:43',
          PartialResult: '0-2',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '66. Patrik Mikael Joakim Ohlsson',
          Assist: '88. Per Konrad Bergetoft-Karlsson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 03:28',
          PartialResult: '0-3',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '55. Trym Stokland',
          Assist: '9. Simon Thomas Persson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 04:55',
          PartialResult: '0-4',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '22. Oskar Antero Ojala',
          Assist: '9. Simon Thomas Persson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 07:23',
          PartialResult: '0-5',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '22. Oskar Antero Ojala',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 18:00',
          PartialResult: '0-6',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '19. Nicklas Regin',
          Assist: '9. Simon Thomas Persson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 00:14',
          PartialResult: '0-7',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '22. Oskar Antero Ojala',
          Assist: '71. Christoffer Boganes Vadla',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 07:03',
          PartialResult: '1-7',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '13. Truls Havre',
          Assist: '20. Andre Antonio Valente',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 08:12',
          PartialResult: '1-8',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '66. Patrik Mikael Joakim Ohlsson',
          Assist: '23. Kim Peter Åke Lönn',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }]
      }],
      pens: [{
        HomeTeam: 'BMIL',
        AwayTeam: 'Lyn',
        Penalties: [{
          HomeTime: '2 - 17:05',
          HomePenalty: '25. Frederic Ringvold Westheim, 2 min, Spill med hånd',
          AwayTime: '1 - 19:40',
          AwayPenalty: '69. Espen Bekkvik, 2 min, Holding'
        }, {
          HomeTime: '2 - 17:41',
          HomePenalty: '34. Tom Egil Arnesen, 2 min, Hardt spill',
          AwayTime: '2 - 08:31',
          AwayPenalty: '13. Jari Juhani Törmänen, 2 min, Slag'
        }, {
          HomeTime: '3 - 03:56',
          HomePenalty: '13. Truls Havre, 2 min, Slag',
          AwayTime: '2 - 17:28',
          AwayPenalty: '22. Oskar Antero Ojala, 2 min, Spill med høy kølle'
        }, {
          HomeTime: '3 - 19:06',
          HomePenalty: '20. Andre Antonio Valente, 2 min, Slag',
          AwayTime: '3 - 09:45',
          AwayPenalty: '23. Kim Peter Åke Lönn, 2 min, Hardt spill'
        }, {
          HomeTime: '',
          HomePenalty: '',
          AwayTime: '3 - 18:33',
          AwayPenalty: '88. Per Konrad Bergetoft-Karlsson, 2 min, Låsing av kølle'
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Kim Tobias Härnlund'}],
        AwayCoaches: [{FullName: 'Eskild Aino Nordstad Kolstad'}, {FullName: 'Thomas Vermund'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '2',
          FullName: 'Patrik Haugland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '4',
          FullName: 'Thomas Camillo Gutteberg-Christiansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Alexander Stein Njøs',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 1,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '9',
          FullName: 'Jørgen Myrvold Iversen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Sverre Sjørbotten Gulliksen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Assists: 1,
          Points: 4,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Kenneth Rønningen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '13',
          FullName: 'Thomas Hildre Hartvig',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '17',
          FullName: 'Kristian Wiker Holmemo',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Emil Andrè Johannessen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '22',
          FullName: 'Anders Nordhagen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 3,
          Points: 4,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '23',
          FullName: 'Robin Aleksander Gærup',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '31',
          FullName: 'Per Nils Pontus Lundberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '34',
          FullName: 'Ole Bastian Kolstad Løchen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '35',
          FullName: 'Peter Ingemar Danielsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '42',
          FullName: 'Sondre Stokke',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 4,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '44',
          FullName: 'John Einar Luther',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '91',
          FullName: 'Tomas Heggelund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 1,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        AwayPlayers: [{
          ShirtNo: '2',
          FullName: 'Martinus Toth Blindheim',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '3',
          FullName: 'Helge Larsen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Sebastian Lie',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Sverre Mikkelsen Olsbyengen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '24',
          FullName: 'Adrian Aaen Skjærbekk',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '25',
          FullName: 'Arya Dehnavi',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 16,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '36',
          FullName: 'Tobias Vermund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '38',
          FullName: 'Henrik Enersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '39',
          FullName: 'Morten Lien',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '42',
          FullName: 'Tobias Nilssen Opedal',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '50',
          FullName: 'Robin Jensen Sandlie',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 2,
          Points: 3,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '55',
          FullName: 'Magnus Bredeveien Maller',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '82',
          FullName: 'Andreas Ruud Heggelund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '86',
          FullName: 'Mike Prestmarken',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: null
        }, {
          ShirtNo: null,
          FullName: 'Selvmål',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 0,
          SquadIndividualTypeId: null
        }],
        HomeGoalies: [{
          ShirtNo: '35',
          FullName: 'Peter Ingemar Danielsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 4,
          Shots: 21
        }],
        AwayGoalies: [{
          ShirtNo: '11',
          FullName: 'Sverre Mikkelsen Olsbyengen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 10,
          Shots: 26
        }, {
          ShirtNo: '39',
          FullName: 'Morten Lien',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Shots: 7
        }]
      }],
      info: [{
        MatchId: 6995823,
        MatchNo: '1331202018',
        MatchDate: '2019-11-03T00:00:00',
        MatchDateFormatted: '03.11.2019',
        Time: '17:00 - 19:08',
        RoundId: 5,
        RoundName: 'Runde 5',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=5',
        Referees: [{
          Name: 'Dommer Mikael Skarshaug Pedersen',
          PersonId: 8483455,
          RefereeId: 304872,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=eEVkbUlHZlNYbjlodDhLeU9YTGJHUT090'
        }, {
          Name: 'Dommer Bjørn Harald Whist Huge',
          PersonId: 8369844,
          RefereeId: 304873,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=Mi8wK25hQXlVRTJIN2l6SG5yRDEyQT090'
        }],
        EndResult: '13-4',
        PartialResult: ' 2-1, 4-1, 7-2',
        ResultsFormatted: '13-4 (2-1, 4-1, 7-2)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 214411,
        ActivityAreaName: 'Skedsmohallen A',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=214411',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995823,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995823',
        HomeTeamId: 581696,
        HomeTeamName: 'Lillestrøm',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
        AwayTeamId: 495974,
        AwayTeamName: 'Ajer',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
        EventTeamInfo: 'Lillestrøm - Ajer',
        Public: '51'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 09:30',
          PartialResult: '1-0',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '91. Tomas Heggelund',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 17:51',
          PartialResult: '1-1',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: '50. Robin Jensen Sandlie',
          Assist: '2. Martinus Toth Blindheim',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 18:29',
          PartialResult: '2-1',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '10. Sverre Sjørbotten Gulliksen',
          Assist: '34. Ole Bastian Kolstad Løchen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 02:40',
          PartialResult: '3-1',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '10. Sverre Sjørbotten Gulliksen',
          Assist: '91. Tomas Heggelund',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 04:42',
          PartialResult: '3-2',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: '25. Arya Dehnavi',
          Assist: '50. Robin Jensen Sandlie',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 04:58',
          PartialResult: '4-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '7. Alexander Stein Njøs',
          Assist: '10. Sverre Sjørbotten Gulliksen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 12:01',
          PartialResult: '5-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '42. Sondre Stokke',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 18:16',
          PartialResult: '6-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '13. Thomas Hildre Hartvig',
          Assist: '11. Kenneth Rønningen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 00:25',
          PartialResult: '7-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '7. Alexander Stein Njøs',
          Assist: '22. Anders Nordhagen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 02:28',
          PartialResult: '8-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '23. Robin Aleksander Gærup',
          Assist: '4. Thomas Camillo Gutteberg-Christiansen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 09:12',
          PartialResult: '9-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '9. Jørgen Myrvold Iversen',
          Assist: '22. Anders Nordhagen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 09:57',
          PartialResult: '10-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '10. Sverre Sjørbotten Gulliksen',
          Assist: '23. Robin Aleksander Gærup',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 12:11',
          PartialResult: '10-3',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: '38. Henrik Enersen',
          Assist: '50. Robin Jensen Sandlie',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 12:56',
          PartialResult: '11-3',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '91. Tomas Heggelund',
          Assist: '7. Alexander Stein Njøs',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 14:46',
          PartialResult: '12-3',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '22. Anders Nordhagen',
          Assist: '42. Sondre Stokke',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 15:55',
          PartialResult: '12-4',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: 'Selvmål',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: true,
          IsHomeGoal: false
        }, {
          Time: '3 - 19:46',
          PartialResult: '13-4',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '2. Patrik Haugland',
          Assist: '22. Anders Nordhagen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }]
      }],
      pens: [{
        HomeTeam: 'Lillestrøm',
        AwayTeam: 'Ajer',
        Penalties: [{
          HomeTime: '1 - 14:49',
          HomePenalty: '42. Sondre Stokke, 2 min, Hardt spill',
          AwayTime: '2 - 12:01',
          AwayPenalty: '25. Arya Dehnavi, 2 min, Protest'
        }, {
          HomeTime: '2 - 12:13',
          HomePenalty: '42. Sondre Stokke, 2 min, Hardt spill',
          AwayTime: '2 - 18:53',
          AwayPenalty: '50. Robin Jensen Sandlie, 2 min, Gjentatte forseelser'
        }, {
          HomeTime: '',
          HomePenalty: '',
          AwayTime: '3 - 07:39',
          AwayPenalty: '7. Sebastian Lie, 2 min, Hardt spill'
        }, {
          HomeTime: '',
          HomePenalty: '',
          AwayTime: '3 - 07:39',
          AwayPenalty: '25. Arya Dehnavi, 2 min, Hardt spill'
        }, {
          HomeTime: '',
          HomePenalty: '',
          AwayTime: '3 - 07:39',
          AwayPenalty: '25. Arya Dehnavi, 12 min, Usportslig opptreden'
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Kenneth Lorentzen'}, {FullName: 'Knut Røse'}],
        AwayCoaches: [{FullName: 'Eirik Smith'}, {FullName: 'Marius Hemstad'}, {FullName: 'Stian Halvorsen'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '1',
          FullName: 'Kimmy Emil Christensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '4',
          FullName: 'Julia Paulina Johannesson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Lars Petter Kandre',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '9',
          FullName: 'Simon Thomas Persson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 3,
          Points: 4,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '14',
          FullName: 'Oskar Kristoffer Persson',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '16',
          FullName: 'Atle Billing',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Nicklas Regin',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '22',
          FullName: 'Oskar Antero Ojala',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 1,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '23',
          FullName: 'Kim Peter Åke Lönn',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '24',
          FullName: 'Nicholas Paulsen Lohrmann',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '30',
          FullName: 'Aleksander Tyrspappa Grimstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '55',
          FullName: 'Trym Stokland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '66',
          FullName: 'Patrik Mikael Joakim Ohlsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '69',
          FullName: 'Espen Bekkvik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 0,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '71',
          FullName: 'Christoffer Boganes Vadla',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '76',
          FullName: 'Per Hampus Johnsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '88',
          FullName: 'Per Konrad Bergetoft-Karlsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: null,
          FullName: 'Kristian Refshal Hansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: null,
          FullName: 'Jesper Jönsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        AwayPlayers: [{
          ShirtNo: '6',
          FullName: 'Jesper Hjelkrem Dirks',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Trond Elias Thomassen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '9',
          FullName: 'Håkon Strand',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Joachim Sørby Pedersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Christer Olsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '14',
          FullName: 'Sander Sørby Pedersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '15',
          FullName: 'Niclas Antonsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Marcus Skillebekk Halvorsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '20',
          FullName: 'Andreas Nicolai Baggerød',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '24',
          FullName: 'Ole-Martin Egge',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '26',
          FullName: 'Hans Petter Hasle Nilsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '33',
          FullName: 'Magnus Røed',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '35',
          FullName: 'Markus Jørgensen Larsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '66',
          FullName: 'Magnus Langrud',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '69',
          FullName: 'Sander Haagenrud Brønn',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '77',
          FullName: 'Stian Jensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '87',
          FullName: 'Kenneth Gustavsson Furulund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '96',
          FullName: 'Christian Olsen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        HomeGoalies: [{
          ShirtNo: '1',
          FullName: 'Kimmy Emil Christensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 5,
          Shots: 22
        }, {
          ShirtNo: '30',
          FullName: 'Aleksander Tyrspappa Grimstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }],
        AwayGoalies: [{
          ShirtNo: '24',
          FullName: 'Ole-Martin Egge',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }, {
          ShirtNo: '33',
          FullName: 'Magnus Røed',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 7,
          Shots: 30
        }]
      }],
      info: [{
        MatchId: 6995808,
        MatchNo: '1331202003',
        MatchDate: '2019-09-22T00:00:00',
        MatchDateFormatted: '22.09.2019',
        Time: '12:00 - 14:00',
        RoundId: 1,
        RoundName: 'Runde 1',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=1',
        Referees: [{
          Name: 'Dommer Espen Sjetne',
          PersonId: 5689960,
          RefereeId: 300590,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=ekFWZGhFcS9lYnZxVDFzL3drYmtzdz090'
        }, {
          Name: 'Dommer Torbjørn Tveit Alvestrand',
          PersonId: 7736233,
          RefereeId: 300591,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=WXdscytTalhLc0xQcTl3QWhuUHdEQT090'
        }],
        EndResult: '7-5',
        PartialResult: ' 4-1, 1-2, 2-2',
        ResultsFormatted: '7-5 (4-1, 1-2, 2-2)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 213920,
        ActivityAreaName: 'Bjølsen matchbane',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=213920',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995808,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995808',
        HomeTeamId: 581673,
        HomeTeamName: 'Lyn',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
        AwayTeamId: 530254,
        AwayTeamName: 'Øreåsen',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
        EventTeamInfo: 'Lyn - Øreåsen',
        Public: '24'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 02:21',
          PartialResult: '1-0',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '14. Oskar Kristoffer Persson',
          Assist: '19. Nicklas Regin',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 03:18',
          PartialResult: '2-0',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '69. Espen Bekkvik',
          Assist: '9. Simon Thomas Persson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 07:59',
          PartialResult: '3-0',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '22. Oskar Antero Ojala',
          Assist: '9. Simon Thomas Persson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 16:02',
          PartialResult: '4-0',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '69. Espen Bekkvik',
          Assist: '9. Simon Thomas Persson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 16:56',
          PartialResult: '4-1',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '10. Joachim Sørby Pedersen',
          Assist: '96. Christian Olsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 06:47',
          PartialResult: '4-2',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '19. Marcus Skillebekk Halvorsen',
          Assist: '20. Andreas Nicolai Baggerød',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 12:24',
          PartialResult: '5-2',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '71. Christoffer Boganes Vadla',
          Assist: '55. Trym Stokland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 16:34',
          PartialResult: '5-3',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '77. Stian Jensen',
          Assist: '15. Niclas Antonsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 00:36',
          PartialResult: '5-4',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '9. Håkon Strand',
          Assist: '19. Marcus Skillebekk Halvorsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 02:26',
          PartialResult: '5-5',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '66. Magnus Langrud',
          Assist: '77. Stian Jensen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 04:18',
          PartialResult: '6-5',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '22. Oskar Antero Ojala',
          Assist: '16. Atle Billing',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 14:13',
          PartialResult: '7-5',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '9. Simon Thomas Persson',
          Assist: '22. Oskar Antero Ojala',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }]
      }],
      pens: [{
        HomeTeam: 'Lyn',
        AwayTeam: 'Øreåsen',
        Penalties: [{
          HomeTime: '2 - 14:40',
          HomePenalty: '24. Nicholas Paulsen Lohrmann, 2 min, Hardt spill',
          AwayTime: '1 - 01:34',
          AwayPenalty: '87. Kenneth Gustavsson Furulund, 2 min, Hardt spill'
        }, {
          HomeTime: '3 - 11:55',
          HomePenalty: '23. Kim Peter Åke Lönn, 2 min, Hardt spill',
          AwayTime: '3 - 07:11',
          AwayPenalty: '9. Håkon Strand, 2 min, Hardt spill'
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Bjørn Egil Johnsen'}, {FullName: 'Fredrik Andresen'}, {FullName: 'Isak Kroon'}, {FullName: 'Jon Magne Stemnes'}],
        AwayCoaches: [{FullName: 'Eskild Aino Nordstad Kolstad'}, {FullName: 'Helge Larsen'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '1',
          FullName: 'Jørn Gilberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '4',
          FullName: 'Birger Mothes Stemnes',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '8',
          FullName: 'Magnus Johnsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Bendik Bjørgaas Austad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '16',
          FullName: 'Jan Erik Siggerud Hagen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Tuomas Petteri Pelo',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '20',
          FullName: 'Aleksi Pelo',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '21',
          FullName: 'Ronnie Mikael Alfred Adolfsson',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '25',
          FullName: 'Fredrik Alexander Holmvik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 4,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '27',
          FullName: 'Sander Johansen Skrolsvik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '75',
          FullName: 'Albin Per Valentin Bruus Green',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 4,
          Assists: 1,
          Points: 5,
          Penalties: 12,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '76',
          FullName: 'Marcus Andresen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '85',
          FullName: 'Langundo Augustin Didier Skei-Hart',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '90',
          FullName: 'Mathias Gram Larsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        AwayPlayers: [{
          ShirtNo: '1',
          FullName: 'Ole-Kristian Bakker',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '2',
          FullName: 'Martinus Toth Blindheim',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '5',
          FullName: 'Johann Jakob Vogel',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Sebastian Lie',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '24',
          FullName: 'Adrian Aaen Skjærbekk',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '25',
          FullName: 'Arya Dehnavi',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '38',
          FullName: 'Henrik Enersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Assists: 0,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '42',
          FullName: 'Tobias Nilssen Opedal',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '50',
          FullName: 'Robin Jensen Sandlie',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '55',
          FullName: 'Magnus Bredeveien Maller',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '82',
          FullName: 'Andreas Ruud Heggelund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        HomeGoalies: [{
          ShirtNo: '1',
          FullName: 'Jørn Gilberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }, {
          ShirtNo: '27',
          FullName: 'Sander Johansen Skrolsvik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Shots: 29
        }],
        AwayGoalies: [{
          ShirtNo: '1',
          FullName: 'Ole-Kristian Bakker',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 7,
          Shots: 26
        }]
      }],
      info: [{
        MatchId: 6995809,
        MatchNo: '1331202004',
        MatchDate: '2019-09-22T00:00:00',
        MatchDateFormatted: '22.09.2019',
        Time: '18:00 - 19:20',
        RoundId: 1,
        RoundName: 'Runde 1',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=1',
        Referees: [{
          Name: 'Dommer Kenneth Halvorsen',
          PersonId: 5950345,
          RefereeId: 227528,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=R2hybXFWSUlpelgvTGl3S2hUL1MxZz090'
        }, {
          Name: 'Dommer Mats Jerry Johansson',
          PersonId: 5156562,
          RefereeId: 301816,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=RlNHWjZGamdTelRJTHhxNkV5YXNFdz090'
        }],
        EndResult: '7-3',
        PartialResult: ' 1-1, 4-0, 2-2',
        ResultsFormatted: '7-3 (1-1, 4-0, 2-2)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 215232,
        ActivityAreaName: 'Jessheim is og flerbrukshall - Innebandy B',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=215232',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995809,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995809',
        HomeTeamId: 695873,
        HomeTeamName: 'Ull/Kisa',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
        AwayTeamId: 495974,
        AwayTeamName: 'Ajer',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
        EventTeamInfo: 'Ull/Kisa - Ajer',
        Public: '100'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 07:06',
          PartialResult: '0-1',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: '38. Henrik Enersen',
          Assist: '5. Johann Jakob Vogel',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 14:54',
          PartialResult: '1-1',
          TeamName: 'Ullensaker/Kisa IL',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Scorer: '19. Tuomas Petteri Pelo',
          Assist: '8. Magnus Johnsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 09:57',
          PartialResult: '2-1',
          TeamName: 'Ullensaker/Kisa IL',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Scorer: '76. Marcus Andresen',
          Assist: '20. Aleksi Pelo',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 13:20',
          PartialResult: '3-1',
          TeamName: 'Ullensaker/Kisa IL',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Scorer: '75. Albin Per Valentin Bruus Green',
          Assist: '27. Sander Johansen Skrolsvik',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 16:46',
          PartialResult: '4-1',
          TeamName: 'Ullensaker/Kisa IL',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Scorer: '21. Ronnie Mikael Alfred Adolfsson',
          Assist: '75. Albin Per Valentin Bruus Green',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 18:29',
          PartialResult: '5-1',
          TeamName: 'Ullensaker/Kisa IL',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Scorer: '75. Albin Per Valentin Bruus Green',
          Assist: '85. Langundo Augustin Didier Skei-Hart',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 09:55',
          PartialResult: '5-2',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: '38. Henrik Enersen',
          Assist: '42. Tobias Nilssen Opedal',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 13:05',
          PartialResult: '6-2',
          TeamName: 'Ullensaker/Kisa IL',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Scorer: '75. Albin Per Valentin Bruus Green',
          Assist: '10. Bendik Bjørgaas Austad',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 15:25',
          PartialResult: '7-2',
          TeamName: 'Ullensaker/Kisa IL',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=695873',
          Scorer: '75. Albin Per Valentin Bruus Green',
          Assist: '21. Ronnie Mikael Alfred Adolfsson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 18:29',
          PartialResult: '7-3',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: '38. Henrik Enersen',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }]
      }],
      pens: [{
        HomeTeam: 'Ull/Kisa',
        AwayTeam: 'Ajer',
        Penalties: [{
          HomeTime: '1 - 03:58',
          HomePenalty: '25. Fredrik Alexander Holmvik, 2 min, Låsing av kølle',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '2 - 07:19',
          HomePenalty: '25. Fredrik Alexander Holmvik, 2 min, Låsing av kølle',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '2 - 11:17',
          HomePenalty: '85. Langundo Augustin Didier Skei-Hart, 2 min, Slag',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '2 - 18:29',
          HomePenalty: '75. Albin Per Valentin Bruus Green, 12 min, Usportslig opptreden',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '3 - 18:50',
          HomePenalty: '20. Aleksi Pelo, 2 min, Ulovlig dytt (mot vant eller målbur)',
          AwayTime: '',
          AwayPenalty: ''
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Eirik Smith'}, {FullName: 'Geir Thomas Bøgle'}, {FullName: 'Stian Halvorsen'}],
        AwayCoaches: [{FullName: 'Erik Dissen'}, {FullName: 'Espen Berg'}, {FullName: 'John Kjetil Bergsmark'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '6',
          FullName: 'Jesper Hjelkrem Dirks',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Markus Jørgensen Larsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Christer Olsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '14',
          FullName: 'Sander Sørby Pedersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '15',
          FullName: 'Niclas Antonsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Marcus Skillebekk Halvorsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '20',
          FullName: 'Andreas Nicolai Baggerød',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '24',
          FullName: 'Ole-Martin Egge',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '25',
          FullName: 'Espen Jakobsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '26',
          FullName: 'Hans Petter Hasle Nilsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '32',
          FullName: 'Kenneth Gustavsson Furulund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 5,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '33',
          FullName: 'Magnus Røed',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '52',
          FullName: 'Magnus Langrud',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 12,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '69',
          FullName: 'Sander Haagenrud Brønn',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '77',
          FullName: 'Stian Jensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '96',
          FullName: 'Christian Olsen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '98',
          FullName: 'Trond Elias Thomassen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        AwayPlayers: [{
          ShirtNo: '4 ',
          FullName: 'Andreas Ervik Heggernes',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Thomas Bergsmark',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 3,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '12',
          FullName: 'Lasse Anthonisen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '13',
          FullName: 'Truls Havre',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 2,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Michael Zlatan Sven Åsberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '20',
          FullName: 'Andre Antonio Valente',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 1,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '34',
          FullName: 'Tom Egil Arnesen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '37',
          FullName: 'Lars Olav Davidsen Nedberg',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 2,
          Points: 4,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '41',
          FullName: 'Georg Bugge',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 0,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '46',
          FullName: 'Kim Haldorsen Straumsnes',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '48',
          FullName: 'Erik Angell Berg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 2,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '50',
          FullName: 'Emil Varre Sandøy',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '56',
          FullName: 'Nikolai Opsahl Johansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Assists: 0,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '91',
          FullName: 'Hassan Mohammed Nawaz',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '97',
          FullName: 'Jørgen Brevik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: null,
          FullName: 'Selvmål',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 0,
          SquadIndividualTypeId: null
        }],
        HomeGoalies: [{
          ShirtNo: '24',
          FullName: 'Ole-Martin Egge',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 5,
          Shots: 5
        }, {
          ShirtNo: '33',
          FullName: 'Magnus Røed',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 9,
          Shots: 17
        }],
        AwayGoalies: [{
          ShirtNo: '12',
          FullName: 'Lasse Anthonisen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }, {
          ShirtNo: '97',
          FullName: 'Jørgen Brevik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 7,
          Shots: 15
        }]
      }],
      info: [{
        MatchId: 6995811,
        MatchNo: '1331202006',
        MatchDate: '2019-09-26T00:00:00',
        MatchDateFormatted: '26.09.2019',
        Time: '19:45 - 21:05',
        RoundId: 2,
        RoundName: 'Runde 2',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=2',
        Referees: [{
          Name: 'Dommer Jon Åge Meller',
          PersonId: 7736256,
          RefereeId: 223625,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=eWVrVjBHNnZIOURNY0JHMGhEdGZxZz090'
        }, {
          Name: 'Dommer Håvard Pedersen',
          PersonId: 8714546,
          RefereeId: 226229,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=WFlmem9rSjBHZFVPQXR6eGQ2aG56UT090'
        }],
        EndResult: '7-14',
        PartialResult: ' 1-6, 2-4, 4-4',
        ResultsFormatted: '7-14 (1-6, 2-4, 4-4)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 214809,
        ActivityAreaName: 'Øreåsenhallen',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=214809',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995811,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995811',
        HomeTeamId: 530254,
        HomeTeamName: 'Øreåsen',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
        AwayTeamId: 581680,
        AwayTeamName: 'BMIL',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
        EventTeamInfo: 'Øreåsen - BMIL',
        Public: '40'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 01:36',
          PartialResult: '0-1',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '37. Lars Olav Davidsen Nedberg',
          Assist: '46. Kim Haldorsen Straumsnes',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 02:28',
          PartialResult: '0-2',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '41. Georg Bugge',
          Assist: '37. Lars Olav Davidsen Nedberg',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 09:44',
          PartialResult: '1-2',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '52. Magnus Langrud (Straffeslag)',
          Assist: '',
          IsPenaltyGoal: true,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 12:21',
          PartialResult: '1-3',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '34. Tom Egil Arnesen',
          Assist: '50. Emil Varre Sandøy',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 16:05',
          PartialResult: '1-4',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '56. Nikolai Opsahl Johansen',
          Assist: '20. Andre Antonio Valente',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 18:33',
          PartialResult: '1-5',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '41. Georg Bugge',
          Assist: '13. Truls Havre',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 19:47',
          PartialResult: '1-6',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '20. Andre Antonio Valente',
          Assist: '10. Thomas Bergsmark',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 01:06',
          PartialResult: '1-7',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '50. Emil Varre Sandøy',
          Assist: '34. Tom Egil Arnesen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 05:54',
          PartialResult: '2-7',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '11. Christer Olsen',
          Assist: '25. Espen Jakobsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 07:19',
          PartialResult: '2-8',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: 'Selvmål',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: true,
          IsHomeGoal: false
        }, {
          Time: '2 - 10:46',
          PartialResult: '2-9',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '37. Lars Olav Davidsen Nedberg',
          Assist: '13. Truls Havre',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 11:17',
          PartialResult: '3-9',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '26. Hans Petter Hasle Nilsen',
          Assist: '98. Trond Elias Thomassen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 18:22',
          PartialResult: '3-10',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '56. Nikolai Opsahl Johansen',
          Assist: '48. Erik Angell Berg',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 01:11',
          PartialResult: '4-10',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '77. Stian Jensen',
          Assist: '52. Magnus Langrud',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 04:04',
          PartialResult: '4-11',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '13. Truls Havre',
          Assist: '37. Lars Olav Davidsen Nedberg',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 04:36',
          PartialResult: '5-11',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '19. Marcus Skillebekk Halvorsen',
          Assist: '20. Andreas Nicolai Baggerød',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 06:47',
          PartialResult: '5-12',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '56. Nikolai Opsahl Johansen',
          Assist: '10. Thomas Bergsmark',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 08:46',
          PartialResult: '5-13',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '19. Michael Zlatan Sven Åsberg',
          Assist: '48. Erik Angell Berg',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 11:23',
          PartialResult: '5-14',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '20. Andre Antonio Valente',
          Assist: '10. Thomas Bergsmark',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 13:09',
          PartialResult: '6-14',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '15. Niclas Antonsen',
          Assist: '77. Stian Jensen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 14:22',
          PartialResult: '7-14',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '96. Christian Olsen',
          Assist: '14. Sander Sørby Pedersen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }]
      }],
      pens: [{
        HomeTeam: 'Øreåsen',
        AwayTeam: 'BMIL',
        Penalties: [{
          HomeTime: '1 - 18:33',
          HomePenalty: '96. Christian Olsen, 2 min, Hardt spill',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '3 - 06:17',
          HomePenalty: '7. Markus Jørgensen Larsen, 2 min, Gjentatte forseelser',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '3 - 07:29',
          HomePenalty: '52. Magnus Langrud, 12 min, Usportslig opptreden',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '3 - 07:29',
          HomePenalty: '32. Kenneth Gustavsson Furulund, 5 min, Hardt spill',
          AwayTime: '',
          AwayPenalty: ''
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Eskild Aino Nordstad Kolstad'}],
        AwayCoaches: [{FullName: 'Itrat Zishan'}, {FullName: 'Kenneth Lorentzen'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '1',
          FullName: 'Ole-Kristian Bakker',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '2',
          FullName: 'Martinus Toth Blindheim',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '3',
          FullName: 'Helge Larsen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Sebastian Lie',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Sverre Mikkelsen Olsbyengen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '24',
          FullName: 'Adrian Aaen Skjærbekk',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '25',
          FullName: 'Arya Dehnavi',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 4,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '30',
          FullName: 'Ferdinand Tofte Vermund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: null
        }, {
          ShirtNo: '38',
          FullName: 'Henrik Enersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '42',
          FullName: 'Tobias Nilssen Opedal',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '50',
          FullName: 'Robin Jensen Sandlie',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '77',
          FullName: 'Eirik André Ottersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: null
        }, {
          ShirtNo: '82',
          FullName: 'Andreas Ruud Heggelund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '86',
          FullName: 'Mike Prestmarken',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: null
        }, {
          ShirtNo: null,
          FullName: 'Selvmål',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 0,
          SquadIndividualTypeId: null
        }],
        AwayPlayers: [{
          ShirtNo: '1',
          FullName: 'Kimmy Emil Christensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '4',
          FullName: 'Julia Paulina Johannesson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Lars Petter Kandre',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '9',
          FullName: 'Simon Thomas Persson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '14',
          FullName: 'Oskar Kristoffer Persson',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '16',
          FullName: 'Atle Billing',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Nicklas Regin',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '22',
          FullName: 'Oskar Antero Ojala',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '23',
          FullName: 'Kim Peter Åke Lönn',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '24',
          FullName: 'Nicholas Paulsen Lohrmann',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '30',
          FullName: 'Aleksander Tyrspappa Grimstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '55',
          FullName: 'Trym Stokland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '66',
          FullName: 'Patrik Mikael Joakim Ohlsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '69',
          FullName: 'Espen Bekkvik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '71',
          FullName: 'Christoffer Boganes Vadla',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 4,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '76',
          FullName: 'Per Hampus Johnsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '88',
          FullName: 'Per Konrad Bergetoft-Karlsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 4,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '',
          FullName: 'Kristian Refshal Hansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        HomeGoalies: [{
          ShirtNo: '1',
          FullName: 'Ole-Kristian Bakker',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }, {
          ShirtNo: '11',
          FullName: 'Sverre Mikkelsen Olsbyengen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 4,
          Shots: 28
        }],
        AwayGoalies: [{
          ShirtNo: '1',
          FullName: 'Kimmy Emil Christensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Shots: 9
        }, {
          ShirtNo: '30',
          FullName: 'Aleksander Tyrspappa Grimstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 1
        }]
      }],
      info: [{
        MatchId: 6995810,
        MatchNo: '1331202005',
        MatchDate: '2019-09-27T00:00:00',
        MatchDateFormatted: '27.09.2019',
        Time: '19:45 - 21:05',
        RoundId: 2,
        RoundName: 'Runde 2',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=2',
        Referees: [{
          Name: 'Dommer Morten Isnes',
          PersonId: 4360125,
          RefereeId: 223710,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=R2FrcHBCU2VIbU5uYmdzM3RMelR4QT090'
        }, {
          Name: 'Dommer Andreas Femtegjeld Sletten',
          PersonId: 7749152,
          RefereeId: 228670,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=TzFIOEh2QU9wY2tLQ0R6cWxtVC8zQT090'
        }],
        EndResult: '3-4',
        PartialResult: ' 0-1, 3-0, 0-3',
        ResultsFormatted: '3-4 (0-1, 3-0, 0-3)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 214305,
        ActivityAreaName: 'Hedmarkshallen',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=214305',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995810,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995810',
        HomeTeamId: 495974,
        HomeTeamName: 'Ajer',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
        AwayTeamId: 581673,
        AwayTeamName: 'Lyn',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
        EventTeamInfo: 'Ajer - Lyn',
        Public: '58'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 04:49',
          PartialResult: '0-1',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '88. Per Konrad Bergetoft-Karlsson',
          Assist: '23. Kim Peter Åke Lönn',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 01:07',
          PartialResult: '1-1',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: '38. Henrik Enersen',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 06:21',
          PartialResult: '2-1',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: 'Selvmål',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: true,
          IsHomeGoal: true
        }, {
          Time: '2 - 18:24',
          PartialResult: '3-1',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: '77. Eirik André Ottersen (Straffeslag)',
          Assist: '',
          IsPenaltyGoal: true,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 12:34',
          PartialResult: '3-2',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '16. Atle Billing',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 12:51',
          PartialResult: '3-3',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '23. Kim Peter Åke Lönn',
          Assist: '88. Per Konrad Bergetoft-Karlsson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 18:09',
          PartialResult: '3-4',
          TeamName: 'Lyn Innebandy',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581673',
          Scorer: '7. Lars Petter Kandre',
          Assist: '9. Simon Thomas Persson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }]
      }],
      pens: [{
        HomeTeam: 'Ajer',
        AwayTeam: 'Lyn',
        Penalties: [{
          HomeTime: '1 - 07:58',
          HomePenalty: '42. Tobias Nilssen Opedal, 2 min, Feil bytte',
          AwayTime: '1 - 09:09',
          AwayPenalty: '71. Christoffer Boganes Vadla, 2 min, Gjentatte forseelser'
        }, {
          HomeTime: '2 - 05:41',
          HomePenalty: '25. Arya Dehnavi, 2 min, Hardt spill',
          AwayTime: '2 - 05:25',
          AwayPenalty: '69. Espen Bekkvik, 2 min, Feil avstand'
        }, {
          HomeTime: '3 - 16:40',
          HomePenalty: '25. Arya Dehnavi, 2 min, Protest',
          AwayTime: '2 - 10:54',
          AwayPenalty: '71. Christoffer Boganes Vadla, 2 min, Holding'
        }, {
          HomeTime: '',
          HomePenalty: '',
          AwayTime: '3 - 02:19',
          AwayPenalty: '88. Per Konrad Bergetoft-Karlsson, 2 min, Slag'
        }, {
          HomeTime: '',
          HomePenalty: '',
          AwayTime: '3 - 08:09',
          AwayPenalty: '76. Per Hampus Johnsson, 2 min, Slag'
        }, {
          HomeTime: '',
          HomePenalty: '',
          AwayTime: '3 - 19:55',
          AwayPenalty: '88. Per Konrad Bergetoft-Karlsson, 2 min, Slag'
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Eskild Kristigonus Nordby'}, {FullName: 'Jan Emil Gudem'}, {FullName: 'Truls Lindahl'}],
        AwayCoaches: [{FullName: 'Christer Andre Nydahl'}, {FullName: 'Geir Ole Løchen'}, {FullName: 'Kim Tobias Härnlund'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '1',
          FullName: 'Jørgen Skogstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '2',
          FullName: 'Ingar Martinussen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '4',
          FullName: 'Magnus Gulliksen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Christopher André Jaksland',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '13',
          FullName: 'Mats Lynum Hartmann',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '22',
          FullName: 'Håkon Hansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '28',
          FullName: 'Robert Andreas Kyllo',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '39',
          FullName: 'Robin Gabrielsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '41',
          FullName: 'Alexander Jaksland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '51',
          FullName: 'Per Axel Wallin',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 2,
          Points: 2,
          Penalties: 4,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '53',
          FullName: 'Petter Knutsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '79',
          FullName: 'Erik Magnus Jirving',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '94',
          FullName: 'Robin Perzan Norstrøm',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 4,
          Assists: 0,
          Points: 4,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '98',
          FullName: 'Vetle Lindset Korslund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        AwayPlayers: [{
          ShirtNo: '2',
          FullName: 'Patrik Haugland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '4',
          FullName: 'Thomas Camillo Gutteberg-Christiansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Alexander Stein Njøs',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Assists: 1,
          Points: 4,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '9',
          FullName: 'Jørgen Myrvold Iversen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Sverre Sjørbotten Gulliksen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Kenneth Rønningen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '13',
          FullName: 'Thomas Hildre Hartvig',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '17',
          FullName: 'Kristian Wiker Holmemo',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '22',
          FullName: 'Anders Nordhagen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 2,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '23',
          FullName: 'Robin Aleksander Gærup',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '31',
          FullName: 'Per Nils Pontus Lundberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '34',
          FullName: 'Ole Bastian Kolstad Løchen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '35',
          FullName: 'Peter Ingemar Danielsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '42',
          FullName: 'Sondre Stokke',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '44',
          FullName: 'John Einar Luther',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '91',
          FullName: 'Tomas Heggelund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        HomeGoalies: [{
          ShirtNo: '1',
          FullName: 'Jørgen Skogstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 8,
          Shots: 23
        }],
        AwayGoalies: [{
          ShirtNo: '35',
          FullName: 'Peter Ingemar Danielsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 6,
          Shots: 31
        }]
      }],
      info: [{
        MatchId: 6995813,
        MatchNo: '1331202008',
        MatchDate: '2019-09-29T00:00:00',
        MatchDateFormatted: '29.09.2019',
        Time: '13:00 - 14:20',
        RoundId: 2,
        RoundName: 'Runde 2',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=2',
        Referees: [{
          Name: 'Dommer Kenneth Halvorsen',
          PersonId: 5950345,
          RefereeId: 227528,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=R2hybXFWSUlpelgvTGl3S2hUL1MxZz090'
        }, {
          Name: 'Dommer Mats Jerry Johansson',
          PersonId: 5156562,
          RefereeId: 301816,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=RlNHWjZGamdTelRJTHhxNkV5YXNFdz090'
        }],
        EndResult: '6-8',
        PartialResult: ' 3-4, 1-1, 2-3',
        ResultsFormatted: '6-8 (3-4, 1-1, 2-3)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 213937,
        ActivityAreaName: 'Heggedalshallen',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=213937',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995813,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995813',
        HomeTeamId: 743009,
        HomeTeamName: 'Asker',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
        AwayTeamId: 581696,
        AwayTeamName: 'Lillestrøm',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
        EventTeamInfo: 'Asker - Lillestrøm',
        Public: '72'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 01:16',
          PartialResult: '0-1',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '31. Per Nils Pontus Lundberg',
          Assist: '11. Kenneth Rønningen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 02:07',
          PartialResult: '1-1',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '94. Robin Perzan Norstrøm',
          Assist: '98. Vetle Lindset Korslund',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 05:06',
          PartialResult: '1-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '4. Thomas Camillo Gutteberg-Christiansen',
          Assist: '7. Alexander Stein Njøs',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 05:54',
          PartialResult: '2-2',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '79. Erik Magnus Jirving',
          Assist: '51. Per Axel Wallin',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 05:57',
          PartialResult: '2-3',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '11. Kenneth Rønningen',
          Assist: '44. John Einar Luther',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 06:33',
          PartialResult: '3-3',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '94. Robin Perzan Norstrøm',
          Assist: '41. Alexander Jaksland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 14:13',
          PartialResult: '3-4',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '7. Alexander Stein Njøs',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 04:24',
          PartialResult: '4-4',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '28. Robert Andreas Kyllo',
          Assist: '39. Robin Gabrielsson',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 19:55',
          PartialResult: '4-5',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '7. Alexander Stein Njøs',
          Assist: '22. Anders Nordhagen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 00:14',
          PartialResult: '5-5',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '94. Robin Perzan Norstrøm',
          Assist: '7. Christopher André Jaksland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 12:27',
          PartialResult: '5-6',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '10. Sverre Sjørbotten Gulliksen',
          Assist: '22. Anders Nordhagen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 13:31',
          PartialResult: '5-7',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '7. Alexander Stein Njøs',
          Assist: '91. Tomas Heggelund',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 17:12',
          PartialResult: '5-8',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '22. Anders Nordhagen',
          Assist: '4. Thomas Camillo Gutteberg-Christiansen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 19:33',
          PartialResult: '6-8',
          TeamName: 'Asker',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=743009',
          Scorer: '94. Robin Perzan Norstrøm',
          Assist: '51. Per Axel Wallin',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }]
      }],
      pens: [{
        HomeTeam: 'Asker',
        AwayTeam: 'Lillestrøm',
        Penalties: [{
          HomeTime: '2 - 00:57',
          HomePenalty: '94. Robin Perzan Norstrøm, 2 min, Slag',
          AwayTime: '1 - 04:25',
          AwayPenalty: '42. Sondre Stokke, 2 min, Gjentatte forseelser'
        }, {
          HomeTime: '2 - 12:32',
          HomePenalty: '51. Per Axel Wallin, 2 min, Låsing av kølle',
          AwayTime: '1 - 12:00',
          AwayPenalty: '11. Kenneth Rønningen, 2 min, Slag'
        }, {
          HomeTime: '2 - 15:38',
          HomePenalty: '22. Håkon Hansen, 2 min, Slag',
          AwayTime: '1 - 15:09',
          AwayPenalty: '44. John Einar Luther, 2 min, Holding'
        }, {
          HomeTime: '2 - 18:54',
          HomePenalty: '51. Per Axel Wallin, 2 min, Obstruksjon',
          AwayTime: '2 - 07:29',
          AwayPenalty: '2. Patrik Haugland, 2 min, Ulovlig dytt (mot vant eller målbur)'
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Geir Ole Løchen'}, {FullName: 'Kim Tobias Härnlund'}],
        AwayCoaches: [{FullName: 'Claus Jørgen Kvasnes'}, {FullName: 'Marko Johannes Länsman'}, {FullName: 'Steinar Engebretsen'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '2',
          FullName: 'Patrik Haugland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 2,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '4',
          FullName: 'Thomas Camillo Gutteberg-Christiansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 2,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Alexander Stein Njøs',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '9',
          FullName: 'Jørgen Myrvold Iversen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Sverre Sjørbotten Gulliksen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Kenneth Rønningen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '13',
          FullName: 'Thomas Hildre Hartvig',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 2,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '17',
          FullName: 'Kristian Wiker Holmemo',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Emil Andrè Johannessen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '22',
          FullName: 'Anders Nordhagen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 5,
          Assists: 1,
          Points: 6,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '31',
          FullName: 'Per Nils Pontus Lundberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '33',
          FullName: 'Filip Pokorny',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '34',
          FullName: 'Ole Bastian Kolstad Løchen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '35',
          FullName: 'Peter Ingemar Danielsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '42',
          FullName: 'Sondre Stokke',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 0,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '44',
          FullName: 'John Einar Luther',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '91',
          FullName: 'Tomas Heggelund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        AwayPlayers: [{
          ShirtNo: '1',
          FullName: 'Hans Sebastian Lundberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '2',
          FullName: 'Erik Christensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '5',
          FullName: 'Oscar Fredrik Baldetorp',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Amund Hansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Jimmi Benteson Bruland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '12',
          FullName: 'Jørgen Kvasnes',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '14',
          FullName: 'Daniel Gundersen Engebretsen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '17',
          FullName: 'Jonas Frantzen Lie',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Lasse Kvasnes',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '22',
          FullName: 'Christoffer Ellingham',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '25',
          FullName: 'Lars Arne Rønningen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '28',
          FullName: 'Christoffer Maarud Lundgreen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 4,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '48',
          FullName: 'Eivind Hindrum',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '49',
          FullName: 'Glenn Børmarken',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '95',
          FullName: 'Pål-Andre Holbø',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }],
        HomeGoalies: [{
          ShirtNo: '35',
          FullName: 'Peter Ingemar Danielsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Shots: 11
        }],
        AwayGoalies: [{
          ShirtNo: '1',
          FullName: 'Hans Sebastian Lundberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }, {
          ShirtNo: '95',
          FullName: 'Pål-Andre Holbø',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 10,
          Shots: 39
        }]
      }],
      info: [{
        MatchId: 6995814,
        MatchNo: '1331202009',
        MatchDate: '2019-10-10T00:00:00',
        MatchDateFormatted: '10.10.2019',
        Time: '19:45 - 21:05',
        RoundId: 3,
        RoundName: 'Runde 3',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=3',
        Referees: [{
          Name: 'Dommer Jon Åge Meller',
          PersonId: 7736256,
          RefereeId: 223625,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=eWVrVjBHNnZIOURNY0JHMGhEdGZxZz090'
        }, {
          Name: 'Dommer Håvard Pedersen',
          PersonId: 8714546,
          RefereeId: 226229,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=WFlmem9rSjBHZFVPQXR6eGQ2aG56UT090'
        }],
        EndResult: '10-2',
        PartialResult: ' 5-0, 1-2, 4-0',
        ResultsFormatted: '10-2 (5-0, 1-2, 4-0)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 214411,
        ActivityAreaName: 'Skedsmohallen A',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=214411',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995814,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995814',
        HomeTeamId: 581696,
        HomeTeamName: 'Lillestrøm',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
        AwayTeamId: 504455,
        AwayTeamName: 'Grei',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
        EventTeamInfo: 'Lillestrøm - Grei',
        Public: '43'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 00:54',
          PartialResult: '1-0',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '7. Alexander Stein Njøs',
          Assist: '34. Ole Bastian Kolstad Løchen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 02:45',
          PartialResult: '2-0',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '22. Anders Nordhagen',
          Assist: '7. Alexander Stein Njøs',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 04:17',
          PartialResult: '3-0',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '42. Sondre Stokke',
          Assist: '22. Anders Nordhagen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 06:38',
          PartialResult: '4-0',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '2. Patrik Haugland',
          Assist: '4. Thomas Camillo Gutteberg-Christiansen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 16:45',
          PartialResult: '5-0',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '22. Anders Nordhagen',
          Assist: '13. Thomas Hildre Hartvig',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 06:51',
          PartialResult: '5-1',
          TeamName: 'Grei',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
          Scorer: '14. Daniel Gundersen Engebretsen',
          Assist: '19. Lasse Kvasnes',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 09:47',
          PartialResult: '5-2',
          TeamName: 'Grei',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=504455',
          Scorer: '2. Erik Christensen',
          Assist: '14. Daniel Gundersen Engebretsen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 12:30',
          PartialResult: '6-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '22. Anders Nordhagen',
          Assist: '2. Patrik Haugland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 06:22',
          PartialResult: '7-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '22. Anders Nordhagen',
          Assist: '13. Thomas Hildre Hartvig',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 10:41',
          PartialResult: '8-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '10. Sverre Sjørbotten Gulliksen',
          Assist: '91. Tomas Heggelund',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 13:00',
          PartialResult: '9-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '42. Sondre Stokke',
          Assist: '2. Patrik Haugland',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 16:14',
          PartialResult: '10-2',
          TeamName: 'Lillestrøm Innebandyklubb',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581696',
          Scorer: '22. Anders Nordhagen',
          Assist: '4. Thomas Camillo Gutteberg-Christiansen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }]
      }],
      pens: [{
        HomeTeam: 'Lillestrøm',
        AwayTeam: 'Grei',
        Penalties: [{
          HomeTime: '2 - 08:54',
          HomePenalty: '44. John Einar Luther, 2 min, Gjentatte forseelser',
          AwayTime: '1 - 01:46',
          AwayPenalty: '28. Christoffer Maarud Lundgreen, 2 min, Hardt spill'
        }, {
          HomeTime: '',
          HomePenalty: '',
          AwayTime: '2 - 12:54',
          AwayPenalty: '28. Christoffer Maarud Lundgreen, 2 min, Ulovlig dytt (mot vant eller målbur)'
        }, {
          HomeTime: '',
          HomePenalty: '',
          AwayTime: '2 - 19:19',
          AwayPenalty: '49. Glenn Børmarken, 2 min, For mange spillere på banen'
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Anton Mats Brenner'}, {FullName: 'Didrik Thorbjørn Voss'}, {FullName: 'Stig Magne Solem'}],
        AwayCoaches: [{FullName: 'Eirik Smith'}, {FullName: 'Jørgen Christensen'}, {FullName: 'Stian Halvorsen'}, {FullName: 'Thomas Bøgle'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '1',
          FullName: 'Jacob Voss',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '2',
          FullName: 'Victor Gustaf Ekestubbe',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '3',
          FullName: 'Sander Hekne Thoresen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Magnus Hermansen Oswold',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '8',
          FullName: 'Fredrik Sundell',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Aleksander Nodland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 3,
          Assists: 0,
          Points: 3,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '12',
          FullName: 'Bendik Govertsen Johnsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '13',
          FullName: 'Vetle Meier Hobbesland',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '15',
          FullName: 'Kjetil Denvik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '18',
          FullName: 'Mathias Bentz Hammerstad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Johan Rannem Solem',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 2,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '20',
          FullName: 'Lukas Joaquin Mondaca Haugen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 0,
          Points: 2,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '21',
          FullName: 'Erik Viggo Nielsen de Santana',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '29',
          FullName: 'Bjørn Aasmund Østen Fredsted',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '31',
          FullName: 'Robin Kristoffer Simonsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '55',
          FullName: 'Oskar Sjåvåg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        AwayPlayers: [{
          ShirtNo: '10',
          FullName: 'Joachim Sørby Pedersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Christer Olsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '14',
          FullName: 'Sander Sørby Pedersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '15',
          FullName: 'Niclas Antonsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Marcus Skillebekk Halvorsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '24',
          FullName: 'Ole-Martin Egge',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '25',
          FullName: 'Espen Jakobsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 12,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '26',
          FullName: 'Hans Petter Hasle Nilsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '32',
          FullName: 'Kenneth Gustavsson Furulund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '33',
          FullName: 'Magnus Røed',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '36',
          FullName: 'Thomas Bøgle',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 2,
          SquadIndividualTypeId: 1018
        }, {
          ShirtNo: '69',
          FullName: 'Sander Haagenrud Brønn',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '77',
          FullName: 'Stian Jensen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '96',
          FullName: 'Christian Olsen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '98',
          FullName: 'Trond Elias Thomassen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        HomeGoalies: [{
          ShirtNo: '31',
          FullName: 'Robin Kristoffer Simonsen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Shots: 18
        }],
        AwayGoalies: [{
          ShirtNo: '33',
          FullName: 'Magnus Røed',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 7,
          Shots: 35
        }]
      }],
      info: [{
        MatchId: 6995815,
        MatchNo: '1331202010',
        MatchDate: '2019-10-12T00:00:00',
        MatchDateFormatted: '12.10.2019',
        Time: '16:00 - 17:20',
        RoundId: 3,
        RoundName: 'Runde 3',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=3',
        Referees: [{
          Name: 'Dommer Tommy Eriksen',
          PersonId: 7149373,
          RefereeId: 228053,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=Q2lyR3NiZVBIUi9Xd3g0dnYxZjdXdz090'
        }, {
          Name: 'Dommer Trond Erik Olsen',
          PersonId: 4431065,
          RefereeId: 227399,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=L1B2NDkrbElOZWlPc3Z2Mk5mWUhKUT090'
        }],
        EndResult: '7-2',
        PartialResult: ' 2-1, 4-0, 1-1',
        ResultsFormatted: '7-2 (2-1, 4-0, 1-1)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 214304,
        ActivityAreaName: 'Bækkelagshallen',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=214304',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995815,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995815',
        HomeTeamId: 580779,
        HomeTeamName: 'Bækkelaget',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
        AwayTeamId: 530254,
        AwayTeamName: 'Øreåsen',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
        EventTeamInfo: 'Bækkelaget - Øreåsen',
        Public: '56'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 02:53',
          PartialResult: '1-0',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '20. Lukas Joaquin Mondaca Haugen',
          Assist: '7. Magnus Hermansen Oswold',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 03:08',
          PartialResult: '1-1',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '11. Christer Olsen',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '1 - 08:09',
          PartialResult: '2-1',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '10. Aleksander Nodland',
          Assist: '19. Johan Rannem Solem',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 01:24',
          PartialResult: '3-1',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '20. Lukas Joaquin Mondaca Haugen',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 03:28',
          PartialResult: '4-1',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '10. Aleksander Nodland',
          Assist: '29. Bjørn Aasmund Østen Fredsted',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 14:23',
          PartialResult: '5-1',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '29. Bjørn Aasmund Østen Fredsted',
          Assist: '15. Kjetil Denvik',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 14:42',
          PartialResult: '6-1',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '13. Vetle Meier Hobbesland',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '3 - 05:55',
          PartialResult: '6-2',
          TeamName: 'Øreåsen',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=530254',
          Scorer: '77. Stian Jensen (Straffeslag)',
          Assist: '',
          IsPenaltyGoal: true,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '3 - 10:13',
          PartialResult: '7-2',
          TeamName: 'Bækkelaget',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=580779',
          Scorer: '10. Aleksander Nodland',
          Assist: '19. Johan Rannem Solem',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }]
      }],
      pens: [{
        HomeTeam: 'Bækkelaget',
        AwayTeam: 'Øreåsen',
        Penalties: [{
          HomeTime: '2 - 05:50',
          HomePenalty: '3. Sander Hekne Thoresen, 2 min, Hardt spill',
          AwayTime: '1 - 13:52',
          AwayPenalty: '25. Espen Jakobsen, 12 min, Usportslig opptreden'
        }, {
          HomeTime: '2 - 19:23',
          HomePenalty: '8. Fredrik Sundell, 2 min, Forsinkelse av spillet',
          AwayTime: '1 - 19:26',
          AwayPenalty: '96. Christian Olsen, 2 min, Slag'
        }, {
          HomeTime: '3 - 01:40',
          HomePenalty: '55. Oskar Sjåvåg, 2 min, Slag',
          AwayTime: '1 - 19:26',
          AwayPenalty: '11. Christer Olsen, 2 min, Gjentatte forseelser'
        }, {
          HomeTime: '3 - 02:24',
          HomePenalty: '20. Lukas Joaquin Mondaca Haugen, 2 min, Feil avstand',
          AwayTime: '3 - 08:44',
          AwayPenalty: '32. Kenneth Gustavsson Furulund, 2 min, Ulovlig dytt (mot vant eller målbur)'
        }]
      }]
    },
    {
      participants: [{
        HomeCoaches: [{FullName: 'Erik Dissen'}, {FullName: 'Espen Berg'}, {FullName: 'John Kjetil Bergsmark'}, {FullName: 'Johny Tore Mikael Wallenius'}],
        AwayCoaches: [{FullName: 'Eskild Aino Nordstad Kolstad'}],
        HomeOwnGoals: [],
        AwayOwnGoals: [],
        HomePlayers: [{
          ShirtNo: '4 ',
          FullName: 'Andreas Ervik Heggernes',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '5',
          FullName: 'Mads Asbjørn Sand Dørstad',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '6',
          FullName: 'Truls Eriksen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '10',
          FullName: 'Thomas Bergsmark',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '12',
          FullName: 'Lasse Anthonisen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '13',
          FullName: 'Truls Havre',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '19',
          FullName: 'Michael Zlatan Sven Åsberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '20',
          FullName: 'Andre Antonio Valente',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '25',
          FullName: 'Frederic Ringvold Westheim',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '34',
          FullName: 'Tom Egil Arnesen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '37',
          FullName: 'Lars Olav Davidsen Nedberg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 0,
          Points: 1,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '41',
          FullName: 'Georg Bugge',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 1,
          Assists: 1,
          Points: 2,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '46',
          FullName: 'Kim Haldorsen Straumsnes',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '48',
          FullName: 'Erik Angell Berg',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '50',
          FullName: 'Emil Varre Sandøy',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '56',
          FullName: 'Nikolai Opsahl Johansen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '60',
          FullName: 'Bendik Fürst Mustad',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 0,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '68',
          FullName: 'Erik Andreas Karlsson',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '97',
          FullName: 'Jørgen Brevik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }],
        AwayPlayers: [{
          ShirtNo: '1',
          FullName: 'Ole-Kristian Bakker',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '2',
          FullName: 'Martinus Toth Blindheim',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '3',
          FullName: 'Helge Larsen',
          IsCaptain: true,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '7',
          FullName: 'Sebastian Lie',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '11',
          FullName: 'Sverre Mikkelsen Olsbyengen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1011
        }, {
          ShirtNo: '24',
          FullName: 'Adrian Aaen Skjærbekk',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '25',
          FullName: 'Arya Dehnavi',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 1,
          Points: 1,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '38',
          FullName: 'Henrik Enersen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Assists: 0,
          Points: 2,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '42',
          FullName: 'Tobias Nilssen Opedal',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '50',
          FullName: 'Robin Jensen Sandlie',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 2,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '55',
          FullName: 'Magnus Bredeveien Maller',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '82',
          FullName: 'Andreas Ruud Heggelund',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }, {
          ShirtNo: '96',
          FullName: 'Armin-Saentia Zahedi',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Assists: 0,
          Points: 0,
          Penalties: 0,
          SquadIndividualCategoryId: 1,
          SquadIndividualTypeId: 1006
        }],
        HomeGoalies: [{
          ShirtNo: '12',
          FullName: 'Lasse Anthonisen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 2,
          Shots: 19
        }, {
          ShirtNo: '97',
          FullName: 'Jørgen Brevik',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }],
        AwayGoalies: [{
          ShirtNo: '1',
          FullName: 'Ole-Kristian Bakker',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 5,
          Shots: 27
        }, {
          ShirtNo: '11',
          FullName: 'Sverre Mikkelsen Olsbyengen',
          IsCaptain: false,
          IsAlternateCaptain: false,
          Goals: 0,
          Shots: 0
        }]
      }],
      info: [{
        MatchId: 6995816,
        MatchNo: '1331202011',
        MatchDate: '2019-10-12T00:00:00',
        MatchDateFormatted: '12.10.2019',
        Time: '16:00 - 17:46',
        RoundId: 3,
        RoundName: 'Runde 3',
        RoundUrl: 'PageCalendarTeamDetail.aspx?tournamentId=390052&roundId=3',
        Referees: [{
          Name: 'Dommer Kenneth Halvorsen',
          PersonId: 5950345,
          RefereeId: 227528,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=R2hybXFWSUlpelgvTGl3S2hUL1MxZz090'
        }, {
          Name: 'Dommer Mats Jerry Johansson',
          PersonId: 5156562,
          RefereeId: 301816,
          WebPartUrl: 'PagePersonDetail.aspx?LinkId=RlNHWjZGamdTelRJTHhxNkV5YXNFdz090'
        }],
        EndResult: '5-2',
        PartialResult: ' 4-0, 1-2, 0-0',
        ResultsFormatted: '5-2 (4-0, 1-2, 0-0)',
        ActivityName: 'Innebandy',
        ActivityAreaId: 213930,
        ActivityAreaName: 'Skøyenhallen',
        ActivityAreaUrl: 'PageVenueActivityAreaDetail.aspx?LinkId=213930',
        SeasonId: 200868,
        TournamentId: 390052,
        TournamentName: '1. div. øst menn 19/20 - NBF',
        TournamentUrl: 'PageTournamentDetails.aspx?LinkId=390052&SeasonId=200868',
        LinkId: 6995816,
        HasMatchReportFile: true,
        MatchReportUrl: 'api/v1/match/GetMatchReport?matchId=6995816',
        HomeTeamId: 581680,
        HomeTeamName: 'BMIL',
        HomeTeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
        AwayTeamId: 495974,
        AwayTeamName: 'Ajer',
        AwayTeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
        EventTeamInfo: 'BMIL - Ajer',
        Public: '25'
      }],
      goals: [{
        GoalsInOrder: [{
          Time: '1 - 06:45',
          PartialResult: '1-0',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '60. Bendik Fürst Mustad',
          Assist: '41. Georg Bugge',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 08:52',
          PartialResult: '2-0',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '37. Lars Olav Davidsen Nedberg',
          Assist: '46. Kim Haldorsen Straumsnes',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 12:55',
          PartialResult: '3-0',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '25. Frederic Ringvold Westheim',
          Assist: '',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '1 - 15:06',
          PartialResult: '4-0',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '41. Georg Bugge',
          Assist: '6. Truls Eriksen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }, {
          Time: '2 - 00:19',
          PartialResult: '4-1',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: '38. Henrik Enersen',
          Assist: '25. Arya Dehnavi',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 02:09',
          PartialResult: '4-2',
          TeamName: 'Ajer',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=495974',
          Scorer: '38. Henrik Enersen',
          Assist: '7. Sebastian Lie',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: false
        }, {
          Time: '2 - 08:42',
          PartialResult: '5-2',
          TeamName: 'BMIL Herrer 1',
          TeamUrl: 'PageOrgDetail.aspx?LinkId=581680',
          Scorer: '60. Bendik Fürst Mustad',
          Assist: '12. Lasse Anthonisen',
          IsPenaltyGoal: false,
          IsOwnGoal: false,
          IsHomeGoal: true
        }]
      }],
      pens: [{
        HomeTeam: 'BMIL',
        AwayTeam: 'Ajer',
        Penalties: [{
          HomeTime: '1 - 18:46',
          HomePenalty: '37. Lars Olav Davidsen Nedberg, 2 min, Slag',
          AwayTime: '3 - 07:02',
          AwayPenalty: '50. Robin Jensen Sandlie, 2 min, Slag'
        }, {
          HomeTime: '2 - 09:53',
          HomePenalty: '34. Tom Egil Arnesen, 2 min, Hardt spill',
          AwayTime: '',
          AwayPenalty: ''
        }, {
          HomeTime: '2 - 12:20',
          HomePenalty: '41. Georg Bugge, 2 min, Spill med hånd',
          AwayTime: '',
          AwayPenalty: ''
        }]
      }]
    }
  ];

  // should return matches sorted by MatchDate
  getAllMatches(): MatchReport[] {
    const simples = [];
    this.matches.forEach(complex => {
      simples.push(this.simplifyMatchObject(complex));
    });
    return simples;
  }

  getMatch(id: number): MatchReport {
    const complexMatchReport = this.matches
      .find(match => parseInt(match.info[0].MatchNo, 10) === id);
    return this.simplifyMatchObject(complexMatchReport);
  }

  private simplifyMatchObject(matchReport: ComplexMatchReport): MatchReport {
    return {
      info: matchReport.info[0],
      pens: matchReport.pens[0],
      goals: matchReport.goals[0],
      participants: matchReport.participants[0]
    };
  }

  getSummaryPerTeam(): LeagueEntry[] {
    const allMatchesList: MatchForTeam[] = this.getAllMatchesList();

    const matchesPerTeam = this.getMatchesPerTeam(allMatchesList);
    return this.transformIntoArray(matchesPerTeam);
  }

  private transformIntoArray(matchesPerTeam: Map<string, MatchForTeam[]>): LeagueEntry[] {
    const leagueTable: LeagueEntry[] = [];

    matchesPerTeam.forEach(entry => {
      const stats: LeagueTeam = this.createEmptyStats();
      entry.forEach(matchEntry => {

        const matchResult: MatchResult = this.getPointsForMatch(matchEntry);
        stats.points.push(matchResult);
        stats.victories += matchEntry.goalsFor > matchEntry.goalsAgainst ? 1 : 0;
        stats.penaltyVictories += this.getPenaltyVictory(matchResult);
        stats.losses += matchEntry.goalsFor < matchEntry.goalsAgainst ? 1 : 0;
        stats.lossPenalties += this.getPenaltyLoss(matchResult);
        stats.goalsFor.push(matchEntry.goalsFor);
        stats.goalsAgainst.push(matchEntry.goalsAgainst);
        stats.matchesPlayed++;
      });
      leagueTable.push({
        teamName: entry[0].teamName, stats
      });
    });
    return leagueTable;
  }

  private getPenaltyVictory(matchResult: MatchResult) {
    return matchResult === MatchResult.WIN_PENS ? 1 : 0;
  }

  private getPenaltyLoss(matchResult: MatchResult) {
    return matchResult === MatchResult.LOSS_PENS ? 1 : 0;
  }

  private getPointsForMatch(matchEntry: MatchForTeam): number {
    if (matchEntry.penalties) {
      if (matchEntry.goalsFor > matchEntry.goalsAgainst) {
        return MatchResult.WIN_PENS;
      } else {
        return MatchResult.LOSS_PENS;
      }
    }
    return matchEntry.goalsFor > matchEntry.goalsAgainst
      ? MatchResult.WIN
      : MatchResult.LOSS;
  }

  private createEmptyStats(): LeagueTeam {
    return {
      goalsFor: [],
      goalsAgainst: [],
      matchesPlayed: 0,
      lossPenalties: 0,
      losses: 0,
      penaltyVictories: 0,
      victories: 0,
      points: []
    };
  }

  private getMatchesPerTeam(allMatchesList: MatchForTeam[]): Map<string, MatchForTeam[]> {
    const matchesPerTeam: Map<string, MatchForTeam[]> = new Map();
    allMatchesList.forEach(match => {
      if (matchesPerTeam.get(match.teamName)) {
        const matchForTeams = matchesPerTeam.get(match.teamName);
        matchForTeams.push(match);
      } else {
        matchesPerTeam.set(match.teamName, [match]);
      }
    });
    return matchesPerTeam;
  }

  getAllMatchesList(): MatchForTeam[] {
    const matchesPerTeam = [];
    const allMatches = this.getAllMatches();

    allMatches.forEach(match => {
      const homeTeamData: MatchForTeam = {
        teamName: this.getHomeTeam(match),
        goalsFor: this.getHomeGoals(match.info.EndResult),
        goalsAgainst: this.getAwayGoals(match.info.EndResult),
        points: this.getMatchResult(match.info.EndResult, Team.HOME),
        matchResult: this.getMatchResult(match.info.EndResult, Team.HOME),
        penalties: this.isPenaltyShooutout(match.info.PartialResult)
      };
      matchesPerTeam.push(homeTeamData);

      const awayTeamData: MatchForTeam = {
        teamName: this.getAwayTeam(match),
        goalsFor: this.getAwayGoals(match.info.EndResult),
        goalsAgainst: this.getHomeGoals(match.info.EndResult),
        points: this.getMatchResult(match.info.EndResult, Team.AWAY),
        matchResult: this.getMatchResult(match.info.EndResult, Team.AWAY),
        penalties: this.isPenaltyShooutout(match.info.PartialResult)
      };
      matchesPerTeam.push(awayTeamData);
    });
    return matchesPerTeam;
  }

  private getAwayTeam(match: MatchReport): string {
    return match.info.AwayTeamName;
  }

  private getHomeTeam(match: MatchReport): string {
    return match.info.HomeTeamName;
  }

  private getMatchResult(endResult: string, team: Team): MatchResult {
    if (team === Team.HOME) {
      return this.getHomeGoals(endResult) > this.getAwayGoals(endResult) ?
        MatchResult.WIN :
        MatchResult.LOSS;
    }
    return this.getHomeGoals(endResult) > this.getAwayGoals(endResult) ?
      MatchResult.LOSS :
      MatchResult.WIN;
  }

  private getAwayGoals(endResult: string): number {
    return parseInt(endResult.split('-')[1], 10);
  }

  private getHomeGoals(endResult: string): number {
    return parseInt(endResult.split('-')[0], 10);
  }

  private isPenaltyShooutout(partialResult: string) {
    const numberOfPeriodes = partialResult.split(',');
    return numberOfPeriodes.length === 4;
  }
}
