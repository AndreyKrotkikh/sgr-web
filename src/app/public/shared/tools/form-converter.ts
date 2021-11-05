import {
  ExpressFormInnerInterface,
  ExpressFormInterface,
} from './../types/common/express-form.interface';
import { formatDate } from '@angular/common';
import { ExpressFormRequestInterface } from '../types/express-form-request.interface';
import { DetailedFormRequestInterface } from '../types/detailed-form-request.interface';
import { DetailedFormInnerInterface } from '../types/common/detailed-form.interface';

export class FormConverter {
  public static convertExpressForm(
    form: ExpressFormInnerInterface
  ): ExpressFormRequestInterface {
    const b_model = form.businessModel;
    const found_date = new Array(
      formatDate(form.dateCreation, 'yyyy-MM-dd', 'en-US')
    );
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
        evo_stage: evo_stage,
      },
    };
    return formRequest;
  }

  public static convertDetailedForm(
    form: DetailedFormInnerInterface
  ): DetailedFormRequestInterface {
    console.log('Converting...', form);

    const b_model = form.businessModel;
    const found_date = new Array(
      formatDate(form.dateCreation, 'yyyy-MM-dd', 'en-US')
    );
    const market_type = form.market;
    const service = new Array(form.service);
    const tech_type = form.technologies;
    const evo_stage = new Array(form.stage);
    const techp_residents = form.residentList;
    const fond_type = [...[], form.fond];
    const inno_comp =  [...[], +form.isInnovation];
    const msk_inno =  [...[], +form.isMemberMoscow];
    const msp =  [...[], +form.isCompanyMSP];
    const msp_cat = new Array(form.mspCategory);
    const nav_stat =  [...[], +form.isPublished];
    const skolk_inno =  [...[], +form.isSkolkovo];
    const start_up =  [...[], +form.isStatup];
    const tech_stack = form.companyTechnology;

    let formRequest: DetailedFormRequestInterface = {
      start_up: {
        b_model: b_model,
        found_date: found_date,
        market_type: market_type,
        service: service,
        tech_type: tech_type,
        evo_stage: evo_stage,
        fond_type: fond_type,
        inno_comp: inno_comp,
        msk_inno: msk_inno,
        msp: msp,
        msp_cat: msp_cat,
        nav_stat: nav_stat,
        skolk_inno: skolk_inno,
        start_up: start_up,
        tech_stack: tech_stack,
        techp_residents: techp_residents,
      },
    };

    return formRequest;
  }
}
