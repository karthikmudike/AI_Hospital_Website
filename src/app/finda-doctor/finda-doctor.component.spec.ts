import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindaDoctorComponent } from './finda-doctor.component';

describe('FindaDoctorComponent', () => {
  let component: FindaDoctorComponent;
  let fixture: ComponentFixture<FindaDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindaDoctorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindaDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
