import {validatePostcode} from './postcode-validator';
import {FormControl} from '@angular/forms';

describe('PostcodeValidator', () => {
  let control;

  beforeEach(() => {
    control = new FormControl();
  });

  it('should return null if postcode contains four numbers and two letters', () => {
    control.value = '1231TY';
    const result = validatePostcode(control);
    expect(result).toBeNull();
  });

  it('should return invalidPostcode true if postcode contains not enough numbers', () => {
    control.value = '12TY';
    const result = validatePostcode(control);
    expect(result.invalidPostcode).toBeTrue();
  });

  it('should return invalidPostcode true if postcode contains too many numbers', () => {
    control.value = '13112TY';
    const result = validatePostcode(control);
    expect(result.invalidPostcode).toBeTrue();
  });

  it('should return invalidPostcode true if postcode contains no numbers', () => {
    control.value = 'TY';
    const result = validatePostcode(control);
    expect(result.invalidPostcode).toBeTrue();
  });

  it('should return invalidPostcode true if postcode contains not enough letters', () => {
    control.value = '1234T';
    const result = validatePostcode(control);
    expect(result.invalidPostcode).toBeTrue();
  });

  it('should return invalidPostcode true if postcode contains too many letters', () => {
    control.value = '1234TTRE';
    const result = validatePostcode(control);
    expect(result.invalidPostcode).toBeTrue();
  });

  it('should return invalidPostcode true if postcode contains numbers after letters', () => {
    control.value = '1234TT324';
    const result = validatePostcode(control);
    expect(result.invalidPostcode).toBeTrue();
  });
});
