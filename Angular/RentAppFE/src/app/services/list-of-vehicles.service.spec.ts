import { TestBed, inject } from '@angular/core/testing';

import { ListOfVehiclesService } from './list-of-vehicles.service';

describe('ListOfVehiclesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListOfVehiclesService]
    });
  });

  it('should be created', inject([ListOfVehiclesService], (service: ListOfVehiclesService) => {
    expect(service).toBeTruthy();
  }));
});
