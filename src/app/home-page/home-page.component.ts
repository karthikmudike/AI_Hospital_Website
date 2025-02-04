import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {



  constructor(private  router1: Router)
  {

  }

 name:   any;


 learnMore()
 {
   this.router1.navigate([`hospitalService`]);
 }

 welcomePage()
 {
    this.router1.navigate([`login`]);
 }

}
