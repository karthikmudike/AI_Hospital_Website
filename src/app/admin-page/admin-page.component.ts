import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../service/DataService/data-service.service';

@Component({
  selector: 'app-admin-page',
  imports: [FormsModule, NgFor],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

  constructor(private http: DataService)
  {
    this.http.getCustomerData().subscribe(Response=>{this.assign(Response)})
  }
  obj: any;
  assign(
    Response: any
  ){
    console.log(Response);
      this.obj = Response;
  }

  delete(Id: any)
  {
    console.log(Id);
    this.http.deleteList(Id).subscribe(Response=>{this.http.getCustomerData().subscribe(Response1=>{this.assign(Response1)})});
  }

}




export class CustomerService {
  customerId: any;
  customerName: any;
  customerLName: any;
  phoneNumber: any;
  email: any;
  message: any;

  constructor(customerId: any,
    customerName: any,
    customerLName: any,
    phoneNumber: any,
    email: any,
    message: any

  )
    {
        this.customerId = customerId;
        this.customerName = customerName;
        this.customerLName = customerLName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.message = message;
    }
}
