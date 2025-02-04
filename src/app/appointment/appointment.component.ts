import { Component, OnInit} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { DataService } from '../service/DataService/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent implements OnInit{

  constructor(private data: DataService, private route: ActivatedRoute, private router: Router){
    this.data.getPatientData(sessionStorage.getItem("PatientNumber")).subscribe(Response => {this.assignPatientRecord(Response);});
  }

  ngOnInit(): void {
    
    if(this.route.snapshot.params['id'])
    {
      this.data.getAppointmentsDetails(this.route.snapshot.params['id']).subscribe(Response=>{this.assignPatientAppointmentDetails(Response)})
    }
    
  }

  assignPatientRecord(Response: any)
  {
    this.obj1 = Response;
    this.obj1.patientDOB = this.obj1.patientDOB.split('T')[0];
  }

  assignPatientAppointmentDetails(Response: any)
  {
      this.obj = Response;
      this.obj.appointmentDate = this.obj.appointmentDate.split('T')[0];
  }

  submitTheAppointment()
  {
    this.obj.patientId = sessionStorage.getItem("PatientNumber");
    this.obj.appointmentDate = this.obj.appointmentDate.split('T')[0];
    if(this.route.snapshot.params['id']!=null)
    {
      this.data.updateTheAppointment(this.obj, this.route.snapshot.params['id']).subscribe();
      this.router.navigate(['/appointmentList']);
    }else
    {
      this.obj.appointmentId = undefined;
      this.data.updateTheAppointment(this.obj, 0).subscribe();
      this.router.navigate(['/appointmentList']);
    }
  }

  obj: appointment = {
    appointmentId: undefined,
    patientId: undefined,
    reason: undefined,
    appointmentDate: undefined,
    appointmentSlot: undefined
  };

  obj1: PatientRecord = {
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



}


export class appointment {
  appointmentId: any;
  patientId: any;
  reason: any;
  appointmentDate: any;
  appointmentSlot: any;

  constructor(appointmentId: any,
    patientId: any,
    reason: any,
    appointmentDate: any,
    appointmentSlot: any) {
    this.appointmentId = appointmentId;
    this.patientId = patientId;
    this.reason = reason;
    this.appointmentDate = appointmentDate
    this.appointmentSlot = appointmentSlot;

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
