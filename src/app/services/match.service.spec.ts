import {TestBed} from '@angular/core/testing';

import {MatchService} from './match.service';

describe('MatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchService = TestBed.get(MatchService);
    expect(service).toBeTruthy();
  });


  it('should parse match data for hometeam', () => {
    const service: MatchService = TestBed.get(MatchService);

    const allMatchesForTeam = service.getAllMatchesList();

    console.log(JSON.stringify(allMatchesForTeam));

    expect(allMatchesForTeam.length).toEqual(2);
  });


});
