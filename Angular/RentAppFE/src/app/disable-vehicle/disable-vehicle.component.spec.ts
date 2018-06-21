import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableVehicleComponent } from './disable-vehicle.component';

describe('DisableVehicleComponent', () => {
  let component: DisableVehicleComponent;
  let fixture: ComponentFixture<DisableVehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisableVehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
