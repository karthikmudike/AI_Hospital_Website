import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalChatAIComponent } from './medical-chat-ai.component';

describe('MedicalChatAiComponent', () => {
  let component: MedicalChatAIComponent;
  let fixture: ComponentFixture<MedicalChatAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalChatAIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalChatAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
