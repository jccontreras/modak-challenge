import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.sass']
})
export class ContactInformationComponent implements OnChanges{

  @Input()
  public contactInfoForm!: UntypedFormGroup;

  ngOnChanges(changes: SimpleChanges): void {
    this.contactInfoForm = changes['contactInfoForm'].currentValue;
  }
}
