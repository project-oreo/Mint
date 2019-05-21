import { TestBed } from '@angular/core/testing';

import { PromotersignupService } from './promotersignup.service';

describe('PromotersignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromotersignupService = TestBed.get(PromotersignupService);
    expect(service).toBeTruthy();
  });
});
