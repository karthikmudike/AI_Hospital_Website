import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emergency-care',
  standalone: true,
  imports: [],
  templateUrl: './emergency-care.component.html',
  styleUrl: './emergency-care.component.css'
})
export class EmergencyCareComponent {

  constructor(private route: Router){}

  chatService()
  {
    this.route.navigate([`/CustomerSupport/`]);
  }
}
