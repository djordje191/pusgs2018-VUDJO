import { TestBed, inject } from '@angular/core/testing';

import { AproveServiceService } from './aprove-service.service';

describe('AproveServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AproveServiceService]
    });
  });

  it('should be created', inject([AproveServiceService], (service: AproveServiceService) => {
    expect(service).toBeTruthy();
  }));
});
