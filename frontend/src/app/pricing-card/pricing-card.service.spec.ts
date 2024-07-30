import { TestBed } from '@angular/core/testing';

import { PricingCardService } from './pricing-card.service';

describe('PricingCardService', () => {
  let service: PricingCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PricingCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
