import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.sass']
})
export class PersonalInformationComponent implements OnChanges{

  @Input()
  public personalInfoForm!: UntypedFormGroup;

  public maxDate: Date;

  ngOnChanges(changes: SimpleChanges): void {
    this.personalInfoForm = changes['personalInfoForm'].currentValue;
  }

  constructor() {
    const currentDate = new Date();
    this.maxDate = new Date(currentDate);
  }
}
