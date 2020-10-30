import { TestBed } from '@angular/core/testing';

import { FoodDonationService } from './food-donation.service';

describe('FoodDonationService', () => {
  let service: FoodDonationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodDonationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
