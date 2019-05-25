import { TestBed } from '@angular/core/testing';

import { PromoterEndorseService } from './promoter-endorse.service';

describe('PromoterEndorseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromoterEndorseService = TestBed.get(PromoterEndorseService);
    expect(service).toBeTruthy();
  });
});
