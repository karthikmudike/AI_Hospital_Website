import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  admin = false;
  constructor(public basicAuth: BasicAuthenticationService, private route: Router)
  {
    const x = sessionStorage.getItem('ADMIN');
    if(x!=null)
    {
      this.admin = true;
    }
  }

  logInn()
  {
      this.route.navigate([`/login`]);
  }

  logOut()
  {
      this.basicAuth.loggedOut();
  }

    toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if(menu)
    {
      menu.classList.toggle("open");
      // icon.classList.toggle("open");
    }
  }

  toggleUp()
  {
    const menu = document.querySelector(".menu-links");
    if(menu)
    {
      menu.classList.toggle("open");
    }
  }
  
}
