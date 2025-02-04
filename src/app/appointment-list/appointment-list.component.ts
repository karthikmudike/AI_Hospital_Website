import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/DataService/data-service.service';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {

  constructor(private route: Router, private data: DataService) { }
  ngOnInit(): void {
    this.data.getAllAppointments(sessionStorage.getItem("PatientNumber")).subscribe(Response=>{this.assignAppointments(Response);});
  }

  info: any = sessionStorage.getItem('PatientNumber');
  appointments: any;

  appointment() {
    this.route.navigate(['appointments']);
  }

  home() {
    this.route.navigate(['hospitalService']);
  }

  assignAppointments(Response: any)
  {
      this.appointments = Response;
  }

  viewAppointment(AppointmentId: any){
    this.route.navigate([`/appointment/${AppointmentId}`]);
  }

  deleteAppointment(AppointmentId: any)
  {
    this.data.deleteAppointmentRecord(AppointmentId).subscribe(Response=>{this.data.getAllAppointments(sessionStorage.getItem("PatientNumber")).subscribe(Response=>{this.assignAppointments(Response);})});
  }
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