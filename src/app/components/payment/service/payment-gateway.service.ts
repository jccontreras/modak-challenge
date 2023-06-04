import { Injectable } from '@angular/core';
import { IPaymentGateway } from 'src/app/common/model/paymentGateway';
import { ApiPaymentGatewayService } from 'src/app/common/service/api-payment-gateway/api-payment-gateway.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentGatewayService {

  constructor(private _apiPaymentGatewaySerivice: ApiPaymentGatewayService) { }

  sendPayment(payment: IPaymentGateway): boolean {
    return this._apiPaymentGatewaySerivice.send(payment);
  }
}
