import { TestBed } from '@angular/core/testing';

import { GigServiceService } from './gig-service.service';

describe('GigServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GigServiceService = TestBed.get(GigServiceService);
    expect(service).toBeTruthy();
  });
});
