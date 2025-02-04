import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyCareComponent } from './emergency-care.component';

describe('EmergencyCareComponent', () => {
  let component: EmergencyCareComponent;
  let fixture: ComponentFixture<EmergencyCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencyCareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
