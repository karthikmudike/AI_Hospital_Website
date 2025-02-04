import { Component } from '@angular/core';
import { ChatService } from '../service/ChatGPT/chat.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medical-chat-ai',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './medical-chat-ai.component.html',
  styleUrl: './medical-chat-ai.component.css'
})
export class MedicalChatAIComponent {

  messages: { role: string, content: string }[] = [];
  userInput: string = '';

  constructor(private chatService: ChatService) { }

  sendMessage(): void {
    const output = "Medicine or Medicine Brand Name : "+this.userInput.trim()+" give me one line information about this medicine or medicine brand, if exist, if not exist reply with saying 'No medicine with this name, Thank You'."
    if (output) {
      this.messages.push({ role: 'user', content: this.userInput.trim() });
      this.chatService.sendMessage(output).subscribe(response => {
        const reply = response.choices[0].message.content;
        this.messages.push({ role: 'assistant', content: reply });
      });
      this.userInput = '';
    }
  }

}
