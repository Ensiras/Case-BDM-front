import {AbstractControl} from '@angular/forms';

export function validateEmail(control: AbstractControl) {
  const value = control.value;
  if (value.includes('@')) {
    const postfix = value.substr(value.indexOf('@'));
    if (postfix.includes('.')) {
      return null;
    }
  }
  return { inValidEmail: true };
}
