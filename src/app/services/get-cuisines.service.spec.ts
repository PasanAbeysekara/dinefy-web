import { TestBed } from '@angular/core/testing';

import { GetCuisinesService } from './get-cuisines.service';

describe('GetCuisinesService', () => {
  let service: GetCuisinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCuisinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
