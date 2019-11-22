import {async, getTestBed, TestBed} from '@angular/core/testing';

import {MatchSmallerService} from './match-smaller.service';
import {ComplexMatchReport} from '../models/complex-match-report.model';


describe('MatchSmallerService', () => {

  let injector: TestBed;
  let service: MatchSmallerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [MatchSmallerService]
    }).compileComponents();
  }));
  beforeEach(() => {
    injector = getTestBed();
    service = injector.get(MatchSmallerService);
  });

  const dummyMatchObject: ComplexMatchReport = {
    info: [],
    participants: [],
    pens: [],
    goals: [{
      GoalsInOrder: [
        {
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
  };

  /*it('should extract goals from match object', () => {
    const allMatches: MatchReport[] = service.getAllMatches();
    const goalsFromMatch = service.getGoalsFromAllMatches(allMatches);
    expect(goalsFromMatch.length).toEqual(22);
  });

  it('should group goals per match', () => {
    const allMatches: MatchReport[] = service.getAllMatches();
    const map = service.groupGoalsPerMatch(allMatches);
    expect(map.size).toEqual(2);
  });*/
});
