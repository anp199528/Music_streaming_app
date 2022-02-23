import { TestBed } from '@angular/core/testing';

import { NewrelapiService } from './newrelapi.service';

describe('NewrelapiService', () => {
  let service: NewrelapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewrelapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
