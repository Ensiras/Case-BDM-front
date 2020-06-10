import {AbstractControl} from '@angular/forms';

export function validateEmail(control: AbstractControl) {
  const value = control.value;
  if (value.includes('@')) {
    const afterAt = value.substr(value.indexOf('@'));
    const regex = new RegExp('');
    if (afterAt.includes('.')) {
      const suffix = afterAt.substr(afterAt.indexOf('.'));
      if (suffix.length >= 2) {
        return null;
      }
    }
  }
  return { inValidEmail: true };
}
