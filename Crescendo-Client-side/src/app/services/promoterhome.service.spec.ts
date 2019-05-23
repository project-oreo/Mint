import { TestBed } from '@angular/core/testing';

import { PromoterhomeService } from './promoterhome.service';

describe('PromoterhomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromoterhomeService = TestBed.get(PromoterhomeService);
    expect(service).toBeTruthy();
  });
});
