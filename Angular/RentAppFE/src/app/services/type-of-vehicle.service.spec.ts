import { TestBed, inject } from '@angular/core/testing';

import { TypeOfVehicleService } from './type-of-vehicle.service';

describe('TypeOfVehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeOfVehicleService]
    });
  });

  it('should be created', inject([TypeOfVehicleService], (service: TypeOfVehicleService) => {
    expect(service).toBeTruthy();
  }));
});
