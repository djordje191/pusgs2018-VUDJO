import { TestBed, inject } from '@angular/core/testing';

import { ListOfBranchesService } from './list-of-branches.service';

describe('ListOfBranchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListOfBranchesService]
    });
  });

  it('should be created', inject([ListOfBranchesService], (service: ListOfBranchesService) => {
    expect(service).toBeTruthy();
  }));
});
