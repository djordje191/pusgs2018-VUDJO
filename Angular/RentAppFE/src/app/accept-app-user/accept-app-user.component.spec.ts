import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptAppUserComponent } from './accept-app-user.component';

describe('AcceptAppUserComponent', () => {
  let component: AcceptAppUserComponent;
  let fixture: ComponentFixture<AcceptAppUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptAppUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptAppUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
