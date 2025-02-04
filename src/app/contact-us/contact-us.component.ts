import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/DataService/data-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [NgIf, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

   constructor(private service: ActivatedRoute, private http: DataService){
    }
    messageValue: any = false;
    error: any = false;
  message()
  {
    if(this.obj.customerName&&this.obj.email&&this.obj.phoneNumber)
    {
      this.messageValue = true;
      this.error = false;
      this.obj.customerId = 1;
      this.http.CustomerData(this.obj).subscribe(Response=>{console.log(Response)});
    }else
    {
        this.error = true;
    }
  }

  obj: CustomerService = {
    customerId: undefined,
    customerName: undefined,
    customerLName: undefined,
    phoneNumber: undefined,
    email: undefined,
    message: undefined
  };

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
