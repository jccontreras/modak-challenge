import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatStepper, StepperOrientation } from '@angular/material/stepper';
import { PaymentGatewayService } from '../service/payment-gateway.service';
import { TranslateService } from '@ngx-translate/core';
import { Observable, map } from 'rxjs';
import { MaxDateValidator } from 'src/app/common/validator/dateValidator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.sass']
})
export class PaymentGatewayComponent{

  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    public breakpointObserver: BreakpointObserver,
    private _paymentGatewayService: PaymentGatewayService,
    private _translate: TranslateService
    ){
      this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
    }

  paymentGatewayForm: UntypedFormGroup = this._formBuilder.group({
    personalInfoForm: this._formBuilder.group({
      birth: ['', [Validators.required, Validators.pattern("^(0[1-9]|1[0-2])\/?(0[1-9]|[12][0-9]|3[01])\/?([0-9]{4})$"), MaxDateValidator]],
      gender: ['', Validators.required],
      idNumber: ['', Validators.required]
    }),
    contactInfoForm: this._formBuilder.group({
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cellphone: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    }),
    paymentInfoForm: this._formBuilder.group({
      creditCardNumber: ['', [Validators.required, Validators.minLength(16), Validators.pattern('[0-9]*')]],
      cvc: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[0-9]*')]],
      expiryDate: ['', [Validators.required, Validators.pattern("^(0[1-9]|1[0-2])\/?([0-9]{2})$")]],
    })
  });

  get personalInfoForm() {
    return this.paymentGatewayForm.get('personalInfoForm') as UntypedFormGroup;
  }

  get contactInfoForm() {
    return this.paymentGatewayForm.get('contactInfoForm') as UntypedFormGroup;
  }

  get paymentInfoForm() {
    return this.paymentGatewayForm.get('paymentInfoForm') as UntypedFormGroup;
  }

  //DUMMY PAYMENT SEND AND RESPONSE
  sendPayment(steeper: MatStepper) {
    if (this._paymentGatewayService.sendPayment(this.paymentGatewayForm.value)) {
      Swal.fire(
        this._translate.instant('message.success.title'),
        this._translate.instant('message.success.message'),
        'success',
      );
      steeper.reset();
    } else {
      Swal.fire(
        this._translate.instant('message.error.title'),
        this._translate.instant('message.error.message'),
        'error'
      );
    }
  }
}
