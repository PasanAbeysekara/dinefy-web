import { TestBed } from '@angular/core/testing';

import { GetFacilitiesService } from './get-facilities.service';

describe('GetFacilitiesService', () => {
  let service: GetFacilitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFacilitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
