import { validateBedrag } from './bedrag-validator';
import {FormControl} from '@angular/forms';

describe('BedragValidator', () => {
  let control: FormControl;

  beforeEach(() => {
    control = new FormControl();
  });

  it('when input is a round number should return null', () => {
    control.setValue('10');
    const result = validateBedrag(control);
    expect(result).toBeNull();
  });

  it('when input is a round number with whitespace should return null', () => {
    control.setValue(' 10  ');
    const result = validateBedrag(control);
    expect(result).toBeNull();
  });

  it('when input is not a number should return invalidBedrag: true', () => {
    control.setValue('awdwad 231');
    const result = validateBedrag(control);
    expect(result.inValidBedrag).toBeTrue();
  });

  it('when input is a decimal should return null', () => {
    control.setValue('10.34');
    const result = validateBedrag(control);
    expect(result).toBeNull();
  });

  it('when input is a number with a decimal comma should return null', () => {
    control.setValue('10,34');
    const result = validateBedrag(control);
    expect(result).toBeNull();
  });

  it('when input is a number with periods and commas should return invalidBedrag: true', () => {
    control.setValue('145.210,34');
    const result = validateBedrag(control);
    expect(result.inValidBedrag).toBeTrue();
  });
});
