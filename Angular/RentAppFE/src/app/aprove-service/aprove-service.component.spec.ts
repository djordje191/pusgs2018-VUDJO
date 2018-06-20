import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproveServiceComponent } from './aprove-service.component';

describe('AproveServiceComponent', () => {
  let component: AproveServiceComponent;
  let fixture: ComponentFixture<AproveServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AproveServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
