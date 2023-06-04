import { TestBed } from '@angular/core/testing';

import { ApiSendPaymentService } from './api-send-payment.service';

describe('ApiSendPaymentService', () => {
  let service: ApiSendPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSendPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
