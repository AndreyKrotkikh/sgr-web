import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { StepperFormInterface } from '../types/common/stepper-form.interface';
import { CurrentPageInterface } from '../types/current-page.interface';

@Injectable({ providedIn: 'root' })
export class FormService {
  private _form: any;

  public stepper$: BehaviorSubject<StepperFormInterface> =
    new BehaviorSubject<StepperFormInterface>({
      currentStepIdx: 0,
      currentStepName: '1',
      maxSteps: 4,
    });

  constructor() {}

  public resetAll() {
    this._form = null;
  }

  public setDetailedForm(value: any) {
    console.log('SETED', value);
    this._form = value;
  }

  public setExpressForm(value: any) {
    console.log('SETED', value);
    this._form = value;
  }

  public getForm(): Observable<any> {
    console.log('GETTED', this._form);
    return of(this._form);
  }
}
