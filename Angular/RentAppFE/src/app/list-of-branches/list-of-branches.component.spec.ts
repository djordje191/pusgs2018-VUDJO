import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBranchesComponent } from './list-of-branches.component';

describe('ListOfBranchesComponent', () => {
  let component: ListOfBranchesComponent;
  let fixture: ComponentFixture<ListOfBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfBranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
