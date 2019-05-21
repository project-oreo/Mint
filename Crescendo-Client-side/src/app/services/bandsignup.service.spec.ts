import { TestBed } from '@angular/core/testing';

import { BandsignupService } from './bandsignup.service';

describe('BandsignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BandsignupService = TestBed.get(BandsignupService);
    expect(service).toBeTruthy();
  });
});
