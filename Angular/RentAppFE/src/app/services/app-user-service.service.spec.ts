import { TestBed, inject } from '@angular/core/testing';

import { AppUserServiceService } from './app-user-service.service';

describe('AppUserServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppUserServiceService]
    });
  });

  it('should be created', inject([AppUserServiceService], (service: AppUserServiceService) => {
    expect(service).toBeTruthy();
  }));
});
