import {validateBezorgwijzen} from './artikel-bezorgwijze-validator';
import {FormControl, FormGroup} from '@angular/forms';

describe('ArtikelBezorgwijzeValidator', () => {
  const formGroup = new FormGroup({
    bezorgAfhalenThuis: new FormControl(),
    bezorgAfhalenMagazijn: new FormControl(),
    bezorgVersturenVooruit: new FormControl(),
    bezorgVersturenRembours: new FormControl()
  });

  it('when any bezorgwijze in FormGroup is checked should return null', () => {
    formGroup.controls.bezorgAfhalenThuis.setValue(true);
    const result = validateBezorgwijzen(formGroup);
    expect(result).toBeNull();
  });

  it('when no bezorgwijze in formGroup is checked should return validation error', () => {
    // None of the controls are set to anything
    const result = validateBezorgwijzen(formGroup);
    expect(result.inValidBezorgwijzen).toEqual(true);
  });

  it('when not all controls are defined should still validate correctly', () => {
    const formGroupIncomplete = new FormGroup({
      bezorgVersturenVooruit: new FormControl(),
      bezorgVersturenRembours: new FormControl()
    });
    const resultInvalid = validateBezorgwijzen(formGroupIncomplete);
    expect(resultInvalid.inValidBezorgwijzen).toBeTrue();
  });
});
