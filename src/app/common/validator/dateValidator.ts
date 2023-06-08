import { AbstractControl } from '@angular/forms';

export function MaxDateValidator(control: AbstractControl): { [key: string]: boolean } | null {
  let dateSetter = Date.parse(control.value);
  if (dateSetter > Date.now()) {
    return { maxDate: true };
  }
  return null;
}