import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(private router: Router, private basicAuth: BasicAuthenticationService)
  {
  }
  username: any;
  password: any;
  message: any = true;
  
  basicLogInn_Guest()
  {
      this.basicLogInn('karthik','0702');
  }

  basicLogInn(username: string, password: string)
  {
    if(username=="kar")
    {
      sessionStorage.setItem('ADMIN', 'true');
    }
    this.basicAuth.executeJWTAuthentication(username,password).subscribe(
      data => {
        this.router.navigate(['hospitalService'])
        this.message = true;
      },
      error => {
        console.log(error)
        this.message = false;
      }
    )
  }
}
