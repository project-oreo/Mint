import { TestBed } from '@angular/core/testing';

import { GigupdateService } from './gigupdate.service';

describe('GigupdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GigupdateService = TestBed.get(GigupdateService);
    expect(service).toBeTruthy();
  });
});
