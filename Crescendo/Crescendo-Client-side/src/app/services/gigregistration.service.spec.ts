import { TestBed } from '@angular/core/testing';

import { GigregistrationService } from './gigregistration.service';

describe('GigregistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GigregistrationService = TestBed.get(GigregistrationService);
    expect(service).toBeTruthy();
  });
});
