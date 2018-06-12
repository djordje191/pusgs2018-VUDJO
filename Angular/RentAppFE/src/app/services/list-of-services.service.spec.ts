import { TestBed, inject } from '@angular/core/testing';

import { ListOfServicesService } from './list-of-services.service';

describe('ListOfServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListOfServicesService]
    });
  });

  it('should be created', inject([ListOfServicesService], (service: ListOfServicesService) => {
    expect(service).toBeTruthy();
  }));
});
