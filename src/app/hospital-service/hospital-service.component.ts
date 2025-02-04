import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../service/DataService/data-service.service';

@Component({
  selector: 'app-hospital-services',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './hospital-service.component.html',
  styleUrl: './hospital-service.component.css'
})

export class HospitalServicesComponent implements OnInit{


  TokenGPT!: TokenGPT;

  constructor(private access: BasicAuthenticationService, private data: DataService){
  }
  ngOnInit(): void {
    this.patientNumber = sessionStorage.getItem("PatientNumber");
  }
  patientNumber: any;
  assignPatientNumber(number: any)
  {
    if(sessionStorage.getItem("PatientNumber")==null)
    {
      sessionStorage.setItem("PatientNumber",number);
      this.patientNumber = sessionStorage.getItem("PatientNumber");
    }else{
      sessionStorage.removeItem("PatientNumber");
      sessionStorage.setItem("PatientNumber",number);
      this.patientNumber = sessionStorage.getItem("PatientNumber");
    }
  }

  checkThePatientData()
  {
    if(sessionStorage.getItem("PatientNumber")==null)
    {
      return true;
    }else
    {
      return false;
    }
  }

  checkTheLoggin()
  {
    return this.access.isUserLoggedIn();
  }

  getGPTToken()
  {
    this.data.getChatGPTToken().subscribe(Response=>{this.assignToken(Response);});
  }

  assignToken(Response: any)
  {
    this.TokenGPT = Response;
    sessionStorage.setItem("TokenAPI",this.TokenGPT.token);
  }
}

class TokenGPT
{
  token: any;

    constructor(token: any)
    {
      this.token = token;
    }
} 