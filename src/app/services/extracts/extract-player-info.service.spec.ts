import {TestBed} from '@angular/core/testing';

import {ExtractPlayerInfoService} from './extract-player-info.service';

describe('ExtractPlayerInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtractPlayerInfoService = TestBed.get(ExtractPlayerInfoService);
    expect(service).toBeTruthy();
  });
});
