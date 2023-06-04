import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatStepper } from '@angular/material/stepper';
import { PaymentGatewayService } from '../service/payment-gateway.service';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.sass']
})
export class PaymentGatewayComponent implements OnInit, AfterContentInit{

  @ViewChild('steeper') paymentStepper!: MatStepper;

  constructor(
    private _formBuilder: FormBuilder,
    public breakpointObserver: BreakpointObserver,
    private _paymentGatewayService: PaymentGatewayService,
    private _translate: TranslateService
    ){
      //this.paymentStepper = new MatStepper();
    }

  paymentGatewayForm: UntypedFormGroup = this._formBuilder.group({
    personalInfoForm: this._formBuilder.group({
      birth: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]],
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
      expiryDate: ['', [Validators.required, Validators.minLength(4)]],
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

  isLinear = false;
  steeperOrientation = 'horizontal';

  ngAfterContentInit(): void {
    let a = this.paymentStepper?._steps.length;
    console.log(a, 'steps')
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.paymentStepper.orientation = 'horizontal';
          console.log('Viewport width is 600px or greater!');
        } else {
          this.paymentStepper.orientation = 'vertical';
          console.log('Viewport width is less than 600px!');
        }
      });
  }

  //DUMMY PAYMENT SEND AND RESPONSE
  sendPayment() {
    if (this._paymentGatewayService.sendPayment(this.paymentGatewayForm.value)) {
      Swal.fire(
        this._translate.instant('message.success.title'),
        this._translate.instant('message.success.message'),
        'success'
      );
    } else {
      Swal.fire(
        this._translate.instant('message.error.title'),
        this._translate.instant('message.error.message'),
        'error'
      );
    }
  }
}
