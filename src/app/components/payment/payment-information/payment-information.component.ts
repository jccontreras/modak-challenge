import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment-information',
  templateUrl: './payment-information.component.html',
  styleUrls: ['./payment-information.component.sass']
})
export class PaymentInformationComponent implements OnChanges{

  @Input()
  public paymentInfoForm!: UntypedFormGroup;

  public cvcHide = true;

  ngOnChanges(changes: SimpleChanges): void {
    this.paymentInfoForm = changes['paymentInfoForm'].currentValue;
  }
}
