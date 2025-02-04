import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { API_URL } from '../../app.constant';
import { appointment } from '../../appointment/appointment.component';
import { CustomerService } from '../../customer-care/customer-care.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Request: HttpClient, private basicAuth: BasicAuthenticationService) { }

  getPatientData(id: any)
  {
    return this.Request.get(`${API_URL}/PatientList/${id}`);
  }

  getPatientRecord(id: any)
  {
    return this.Request.get(`${API_URL}/MedicalHistory/${id}`);
  }

  getDoctorById(id: any)
  {
    return this.Request.get(`${API_URL}/DoctorsList/${id}`);
  }

  getAllDoctor()
  {
    return this.Request.get(`${API_URL}/DoctorsListAll`);
  }

  getDoctorByName(name: string)
  {
      return this.Request.get(`${API_URL}/DoctorRecordByName/${name}`);
  }

  getBillByPatientId(Id: any)
  {
    return this.Request.get(`${API_URL}/BillPaymentOfPatient/${Id}`);
  }

  getAllAppointments(Id: any)
  {
    return this.Request.get(`${API_URL}/AllAppointment/${Id}`);
  }

  getAppointmentsDetails(Id: any)
  {
    return this.Request.get(`${API_URL}/AppointmentDetails/${Id}`);
  }

  deleteAppointmentRecord(Id: any)
  {
    return this.Request.delete(`${API_URL}/DeleteTheReocrd/${Id}`);
  }

  
  updateTheAppointment(Appointment: appointment, id: any)
  {
    return this.Request.put<appointment>(`${API_URL}/AppointmentUpdate/${id}`, Appointment);
  }

  deleteBillPayment(Id: any)
  {
    return this.Request.delete(`${API_URL}/DeleteTheRecord/${Id}`)
  }

  getChatGPTToken()
  {
    return this.Request.get(`${API_URL}/getChatGPT/token`);
  }

  CustomerData(obj: CustomerService)
  {
    console.log(obj);
    return this.Request.post(`${API_URL}/CustomerService/`, obj);
  }

  getCustomerData()
  {
    return this.Request.get(`${API_URL}/getCustomerService/`);
  }

  deleteList(Id: any)
  {
    return this.Request.delete(`${API_URL}/DeleteList/${Id}`);
  }

}