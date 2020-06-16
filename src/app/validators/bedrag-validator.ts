import {AbstractControl} from '@angular/forms';

export function validateBedrag(control: AbstractControl) {
  let value = control.value;
  value = value.replace(',', '.');
  if (Number(value)) {
    return null;
  }
  return {inValidBedrag: true};
}
