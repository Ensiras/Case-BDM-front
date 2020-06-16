import {FormGroup} from '@angular/forms';

export function validateBezorgwijzen(control: FormGroup) {
  const controls = control.controls;
  let bezorgAfhalenThuis;
  let bezorgAfhalenMagazijn;
  let bezorgVersturenVooruit;
  let bezorgVersturenRembours;

  // checking for undefined
  if (controls.bezorgAfhalenThuis) {
    bezorgAfhalenThuis = controls.bezorgAfhalenThuis.value;
  }
  if (controls.bezorgAfhalenMagazijn) {
    bezorgAfhalenMagazijn = controls.bezorgAfhalenMagazijn.value;
  }
  if (controls.bezorgVersturenVooruit) {
    bezorgVersturenVooruit = controls.bezorgVersturenVooruit.value;
  }
  if (controls.bezorgVersturenRembours) {
    bezorgVersturenRembours = controls.bezorgVersturenRembours.value;
  }

  if (bezorgAfhalenThuis || bezorgAfhalenMagazijn || bezorgVersturenVooruit || bezorgVersturenRembours) {
    return null;
  }
  return {invalidBezorgwijzen: true};
}
