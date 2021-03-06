import {FormControl} from '@angular/forms';
import {validateEmail} from './email-validator';

describe('EmailValidator', () => {
  let control: FormControl;

  beforeEach(() => {
    control = new FormControl();
  });

  it('should return invalidEmail true if only @ is present', () => {
    control.setValue('@');
    const result = validateEmail(control);
    expect(result.inValidEmail).toBeTrue();
  });

  it('should return invalidEmail true if only a . is present', () => {
    control.setValue('.');
    const result = validateEmail(control);
    expect(result.inValidEmail).toBeTrue();
  });

  it('should return invalidEmail true if no . comes after the @', () => {
    control.setValue('mail.test@com');
    const result = validateEmail(control);
    expect(result.inValidEmail).toBeTrue();
  });

  it('should return invalidEmail true if no characters are given after .', () => {
    control.setValue('mail@test.');
    const result = validateEmail(control);
    expect(result.inValidEmail).toBeTrue();
  });

  it('should return null if email is valid', () => {
    control.setValue('mail@test.c');
    const result = validateEmail(control);
    expect(result).toBeNull();
  });
});
