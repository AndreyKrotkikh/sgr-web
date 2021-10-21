import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { DetailedFormInterface } from '../types/common/detailed-form.interface';
import { ExpressFormInterface } from '../types/common/express-form.interface';
import { StepperFormInterface } from '../types/common/stepper-form.interface';

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

  public initExpressForm() {
    const initExpressForm: ExpressFormInterface = {
      type: 'express',
      isNew: true,
      form: {
        businessModel: [],
        dateCreation: '',
        market: [],
        service: '',
        technologies: [],
        stage: ''
      },
    };
    this._form = initExpressForm;
  }

  public initDetailedForm() {
    const initDetailedForm: DetailedFormInterface = {
      type: 'detailed',
      isNew: true,
      form: {
        businessModel: [],
        companyTechnology: '',
        dateCreation: '',
        isAccreditated: 0,
        isCompanyMSP: 0,
        isExporter: 0,
        isInnovation: 0,
        isMemberMoscow: 0,
        isPublished: 0,
        isSkolkovo: 0,
        isStatup: 0,
        market: [],
        mspCategory: '',
        ocvd: '',
        patentList: [],
        productList: [],
        residentList: [],
        service: '',
        stage: '',
        technologies: [],
      },
    };
    this._form = initDetailedForm;
  }

  public setDetailedForm(detailedForm: DetailedFormInterface) {
    console.log('Detailed Form Setted: ', detailedForm);
    this._form = detailedForm;
  }

  public setExpressForm(expressForm: ExpressFormInterface) {
    console.log('Express Form Setted: ', expressForm);
    this._form = expressForm;
  }

  public getForm(): Observable<any> {
    console.log('Form getted: ', this._form);
    return of<any>(this._form);
  }
}
