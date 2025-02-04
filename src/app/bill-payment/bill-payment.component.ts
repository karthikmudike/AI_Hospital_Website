import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/DataService/data-service.service';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-payment',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './bill-payment.component.html',
  styleUrl: './bill-payment.component.css'
})
export class BillPaymentComponent implements OnInit {

  billPayment: any = true;

  setBill1() {
    this.billPayment = false;
    this.access.deleteBillPayment(sessionStorage.getItem('PatientNumber')).subscribe();
  }

  setBill()
  {
    this.billPayment = false;
  }
   x: any = true;
  setBill2()
  {
    this.x = false;
  }

  info: any = sessionStorage.getItem("PatientNumber");
  constructor(private access: DataService, private route: Router) { }

  ngOnInit(): void {
    this.access.getPatientData(sessionStorage.getItem("PatientNumber")).subscribe(Response => {
      this.assignPatientData(Response);
    });
    this.access.getBillByPatientId(sessionStorage.getItem("PatientNumber")).subscribe(Response => {
      this.assignPatientBills(Response);
      if(this.TotalPrice==0){this.billPayment=false}
    });
  }

  home() {
    this.route.navigate(["hospitalService"]);
  }

  Record: PatientRecord = {
    patientId: undefined,
    patientName: undefined,
    patientAddress: undefined,
    patientCity: undefined,
    patientZipCode: undefined,
    patientPhoneNumber: undefined,
    patientEmail: undefined
  };

  Bills: any;

  TotalPrice: any = 0;

  assignPatientData(Response: any) {
    if (Response != null) {
      this.Record = Response;
    }
  }

  assignPatientBills(Response: any) {
    this.Bills = Response;

    for (let bill of this.Bills) {
      this.TotalPrice = this.TotalPrice + bill.price;
    }
  }

}

export class PatientRecord {
  patientId: any;
  patientName: any;
  patientAddress: any;
  patientCity: any;
  patientZipCode: any;
  patientPhoneNumber: any;
  patientEmail: any;

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
    isBeenHere: any) {
    this.patientName = patientName,
      this.patientId = patientId;
    this.patientAddress = patientAddress;
    this.patientCity = patientCity;
    this.patientZipCode = patientZipCode;
    this.patientPhoneNumber = patientPhoneNumber;
    this.patientEmail = patientEmail;
  }
}

export class Bill {
  billId: any;
  description: any;
  price: any;
  patientId: any;

  constructor(billId: any,
    description: any,
    price: any,
    patientId: any) {
    this.billId = billId;
    this.description = description;
    this.price = price;
  }
}