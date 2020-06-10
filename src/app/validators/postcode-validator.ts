import {AbstractControl} from '@angular/forms';

export function validatePostcode(control: AbstractControl) {
  const value = control.value;
  const regex = new RegExp('^[0-9]{4}[a-zA-Z]{2}$');
  if (regex.test(value)) {
    return null;
  }
  return {invalidPostcode: true};
}
