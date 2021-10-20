import { formatDate } from '@angular/common';
import { ExpressFormRequestInterface } from '../types/express-form-request.interface';

export class FormConverter {
  public static convertExpressForm(form: any): ExpressFormRequestInterface {
    console.log('EXPRESSS FORM: ', form)
    const b_model = form.businessModel;
    const found_date = formatDate(form.creationDate, 'yyyy-MM-dd', 'en-US');
    const market_type = form.market;
    const service = form.services;
    const tech_type = form.technologies;

    let formRequest: ExpressFormRequestInterface = {
      start_up: {
        b_model: b_model,
        found_date: found_date,
        market_type: market_type,
        service: service,
        tech_type: tech_type,
      },
    };
    console.log('CONVERTED', formRequest);
    return formRequest;
  }

  public static convertDetailedForm(form: any): any {
    return form;
  }
}
