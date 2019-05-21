import { TestBed } from '@angular/core/testing';

import { BandloginService } from './bandlogin.service';

describe('BandloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BandloginService = TestBed.get(BandloginService);
    expect(service).toBeTruthy();
  });
});
