import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTestingComponent } from './observable-testing.component';
import {interval} from 'rxjs';

describe('ObservableTestingComponent', () => {
  it('testing observable timer (warning: endless)', () => {
    const secondsCounter = interval(10);

    secondsCounter.subscribe(n => console.log(`It's been ${n} seconds since subscribing!`));
  });
});
