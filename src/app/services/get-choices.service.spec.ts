import { TestBed } from '@angular/core/testing';

import { GetChoicesService } from './get-choices.service';

describe('GetChoicesService', () => {
  let service: GetChoicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetChoicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
