import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-payment-gateway',
  templateUrl: './payment-gateway.component.html',
  styleUrls: ['./payment-gateway.component.sass']
})
export class PaymentGatewayComponent implements OnInit, AfterContentInit{

  @ViewChild('steeper') paymentStepper!: MatStepper;

  paymentGatewayForm: UntypedFormGroup = this._formBuilder.group({
    personalInfoForm: this._formBuilder.group({
      birth: ['', Validators.required],
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

  print() {
    console.log(this.paymentGatewayForm.value, 'main form')
  }

  constructor(
    private _formBuilder: FormBuilder,
    public breakpointObserver: BreakpointObserver
    ){
      //this.paymentStepper = new MatStepper();
    }

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
}
