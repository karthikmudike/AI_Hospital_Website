import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/DataService/data-service.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-patient-record',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './patient-record.component.html',
  styleUrl: './patient-record.component.css'
})
export class PatientRecordComponent implements OnInit{

  info: any = sessionStorage.getItem("PatientNumber");

  obj: PatientRecord = {
    patientId: undefined,
    patientName: undefined,
    patientAge: undefined,
    patientGender: undefined,
    patientAddress: undefined,
    patientCity: undefined,
    patientZipCode: undefined,
    patientDOB: undefined,
    patientPhoneNumber: undefined,
    patientEmail: undefined,
    isBeenHere: undefined
  };

  Doc: Doctors = {
    doctorId: undefined,
    doctorFirstName: undefined,
    doctorLastName: undefined,
    gender: undefined,
    phoneNumber: undefined,
    email: undefined,
    department: undefined
  }

  constructor(private route: Router, private access: DataService) {
  }
    Records: any;
  ngOnInit(): void {
     this.access.getPatientData(sessionStorage.getItem("PatientNumber")).subscribe(Response=>{this.assignObject(Response)});
     this.access.getPatientRecord(sessionStorage.getItem("PatientNumber")).subscribe(Response=>{this.Records=Response;});
     this.access.getDoctorById(sessionStorage.getItem("PatientNumber")).subscribe(Response=>{this.assignDocObject(Response);});
  }

  assignObject(Response: any)
  {
      this.obj = Response;
      this.obj.patientDOB = new Date(this.obj.patientDOB).toISOString().split('T')[0];
  }

  assignDocObject(Response: any)
  {
      this.Doc = Response;
  }

  home()
  {
    this.route.navigate(['/hospitalService']);
  }

}

export class PatientRecord {
  patientId: any;
  patientName: any;
  patientAge: any;
  patientGender: any;
  patientAddress: any;
  patientCity: any;
  patientZipCode: any;
  patientDOB: any;
  patientPhoneNumber: any;
  patientEmail: any;
  isBeenHere: any;

  constructor(patientId: any,
    patientName: any,
    patientAge: any,
    patientGender: any,
    patientAddress: any,
    patientCity: any,
    patientZipCode: any,
    patientDOB: any,
    patientPhoneNumber: any,
    patientEmail: any,
    isBeenHere: any)
    {
        this.patientName = patientName,
        this.patientId = patientId;
        this.patientAddress = patientAddress;
        this.patientAge = patientAge;
        this.patientCity = patientCity;
        this.patientDOB = patientDOB;
        this.patientZipCode = patientZipCode;
        this.patientGender = patientGender;
        this.patientPhoneNumber = patientPhoneNumber;
        this.patientEmail = patientEmail;
        this.isBeenHere = isBeenHere;
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
      this.doctorLastName = doctorFirstName;
      this.gender = gender;
      this.phoneNumber = phoneNumber;
      this.email = email;
      this.department = department;
    }
}