import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPaymentGateway } from '../../model/paymentGateway';

@Injectable({
  providedIn: 'root'
})
export class ApiPaymentGatewayService {

  public context: string = '/dummy/payment'

  constructor(private _http: HttpClient) { }

  //DUMMY SERVICE FOR CHALLENGE
  send(payment: IPaymentGateway): boolean {
    let response = Math.floor(Math.random() * 10);
    return response < 7 ? true : false;
  }
}
