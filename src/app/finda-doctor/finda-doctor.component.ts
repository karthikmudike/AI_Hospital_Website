import { Component, NgModule, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { DataService } from '../service/DataService/data-service.service';
import { NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-finda-doctor',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './finda-doctor.component.html',
  styleUrl: './finda-doctor.component.css'
})
export class FindaDoctorComponent implements OnInit{

   constructor(private access: DataService)
   {

   }

   message: any;
   Doctors: any;
   search: any;
   alert: any = false;
   ngOnInit(): void {
      this.message = false;
   }

   searchDoctor(name: any)
   {
      this.alert = false;
      this.access.getDoctorByName(name).subscribe(Response=>{
         if(Response.toString())
            {
               this.assign(Response);
               this.message = true;
            }else
            {
               this.message = false;
               this.alert = true;
            }
      });
   }

   viewAll()
   {
      this.alert = false;
      this.message = true;
      this.access.getAllDoctor().subscribe(Response=>{this.assign(Response)})
   }

   assign(Response: any)
   {
      this.Doctors = Response;
   }
}

export class Doctors
{
  doctorId: any;
  doctorFirstName: any;
  doctorLastName: any;
  gender: any;
  phoneNumber: any;
  email: any;
  department: any;

  constructor(doctorId: any,
    doctorFirstName: any,
    doctorLastName: any,
    gender: any,
    phoneNumber: any,
    email: any,
    department: any)
    {
      this.doctorId = doctorId;
      this.doctorFirstName = doctorFirstName;
      this.doctorLastName = doctorLastName;
      this.gender = gender;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.department = department;
    }
}