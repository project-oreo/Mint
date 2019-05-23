import { TestBed } from '@angular/core/testing';

import { BandhomeService } from './bandhome.service';

describe('BandhomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BandhomeService = TestBed.get(BandhomeService);
    expect(service).toBeTruthy();
  });
});
