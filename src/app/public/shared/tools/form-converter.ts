import { formatDate } from '@angular/common';
import { ExpressFormRequestInterface } from '../types/express-form-request.interface';

export class FormConverter {
  public static convertExpressForm(form: any): ExpressFormRequestInterface {
    const b_model = form.businessModel.map(
      (x: { id: number; itemName: string }) => x.itemName
    );
    const found_date = formatDate(form.creationDate, 'yyyy-MM-dd', 'en-US');
    const market_type = form.market.map(
      (x: { id: number; itemName: string }) => x.itemName
    );
    const service = form.services;
    const tech_type = form.technologies.map(
      (x: { id: number; itemName: string }) => x.itemName
    );

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
}
