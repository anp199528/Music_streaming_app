import { TestBed } from '@angular/core/testing';

import { TrendingapiService } from './trendingapi.service';

describe('TrendingapiService', () => {
  let service: TrendingapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
