import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { CurrentPageInterface } from '../types/current-page.interface';

@Injectable({ providedIn: 'root' })
export class FormService {

  private _form: any;

  constructor() {}

  public resetAll() {
    this._form = null;
  }
  public setExpressForm(value: any) {
    console.log('SETED', value)
    this._form = value; //.next(value);
  }

  public getForm(): Observable<any> {
    console.log('GETTED', this._form)
    return of(this._form)
  }
}
