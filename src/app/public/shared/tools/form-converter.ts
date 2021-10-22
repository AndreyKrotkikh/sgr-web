import {
  ExpressFormInnerInterface,
  ExpressFormInterface,
} from './../types/common/express-form.interface';
import { formatDate } from '@angular/common';
import { ExpressFormRequestInterface } from '../types/express-form-request.interface';

export class FormConverter {
  public static convertExpressForm(
    form: ExpressFormInnerInterface
  ): ExpressFormRequestInterface {
    const b_model = form.businessModel;
    const found_date = new Array(formatDate(form.dateCreation, 'yyyy-MM-dd', 'en-US'));
    const market_type = form.market;
    const service = new Array(form.service);
    const tech_type = form.technologies;
    const evo_stage = new Array(form.stage);

    let formRequest: ExpressFormRequestInterface = {
      start_up: {
        b_model: b_model,
        found_date: found_date,
        market_type: market_type,
        service: service,
        tech_type: tech_type,
        evo_stage: evo_stage
      },
    };
    return formRequest;
  }

  public static convertDetailedForm(form: any): any {
    return form;
  }
}
