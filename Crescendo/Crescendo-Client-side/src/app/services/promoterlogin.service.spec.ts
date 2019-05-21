import { TestBed } from '@angular/core/testing';

import { PromoterloginService } from './promoterlogin.service';

describe('PromoterloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromoterloginService = TestBed.get(PromoterloginService);
    expect(service).toBeTruthy();
  });
});
