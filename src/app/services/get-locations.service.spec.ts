import { TestBed } from '@angular/core/testing';

import { GetLocationsService } from './get-locations.service';

describe('GetLocationsService', () => {
  let service: GetLocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetLocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
