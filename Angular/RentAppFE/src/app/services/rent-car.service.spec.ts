import { TestBed, inject } from '@angular/core/testing';

import { RentCarService } from './rent-car.service';

describe('RentCarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RentCarService]
    });
  });

  it('should be created', inject([RentCarService], (service: RentCarService) => {
    expect(service).toBeTruthy();
  }));
});
