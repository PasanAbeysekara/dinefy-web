import { TestBed } from '@angular/core/testing';

import { GetPropertyMenusService } from './get-property-menus.service';

describe('GetPropertyMenusService', () => {
  let service: GetPropertyMenusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPropertyMenusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
