import { TestBed } from '@angular/core/testing';

import { ApiPaymentGatewayService } from './api-payment-gateway.service';

describe('ApiPaymentGatewayService', () => {
  let service: ApiPaymentGatewayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPaymentGatewayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
