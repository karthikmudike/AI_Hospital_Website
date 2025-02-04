import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalServicesComponent } from './hospital-service.component';

describe('HospitalServiceComponent', () => {
  let component: HospitalServicesComponent;
  let fixture: ComponentFixture<HospitalServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
