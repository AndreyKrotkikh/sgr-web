import { ExpressFormInnerInterface } from './../types/common/express-form.interface';
import { formatDate } from '@angular/common';
import { ExpressFormRequestInterface } from '../types/express-form-request.interface';
import { DetailedFormRequestInterface } from '../types/detailed-form-request.interface';
import { DetailedFormInnerInterface } from '../types/common/detailed-form.interface';
import { LearningFormInnerInterface } from '../types/common/learning-form-inner.interface';
import { LearningFormRequestInterface } from '../types/learning-form-request.interface';

export class FormConverter {
  public static convertExpressForm(
    form: ExpressFormInnerInterface
  ): ExpressFormRequestInterface {
    const b_model = form.businessModel ? form.businessModel : [];
    const found_date = [
      ...[],
      formatDate(form.dateCreation, 'yyyy-MM-dd', 'en-US'),
    ];
    const market_type = form.market ? form.market : [];
    const service = [...[], form.service];
    const tech_type = form.technologies ? form.technologies : [];
    const evo_stage = [...[], form.stage];

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
    const b_model = form.businessModel ? form.businessModel : [];
    const found_date = [
      ...[],
      formatDate(form.dateCreation, 'yyyy-MM-dd', 'en-US'),
    ];
    const market_type = form.market ? form.market : [];
    const service = [...[], form.service];
    const tech_type = form.technologies ? form.technologies : [];
    const evo_stage = [...[], form.stage];
    const techp_residents = form.residentList ? form.residentList : [];
    const inno_comp = [...[], +form.isInnovation];
    const msk_inno = [...[], +form.isMemberMoscow];
    const msp = [...[], +form.isCompanyMSP];
    const msp_cat = [...[], form.mspCategory];
    const nav_stat = [...[], +form.isPublished];
    const skolk_inno = [...[], +form.isSkolkovo];
    const start_up = [...[], +form.isStatup];
    const tech_stack = form.companyTechnology ? form.companyTechnology : [];

    let formRequest: DetailedFormRequestInterface = {
      start_up: {
        b_model: b_model,
        found_date: found_date,
        market_type: market_type,
        service: service,
        tech_type: tech_type,
        evo_stage: evo_stage,
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

  public static convertLearningForm(
    form: LearningFormInnerInterface
  ): DetailedFormRequestInterface {
    const b_model = form.businessModel;
    const found_date = [
      ...[],
      formatDate(form.dateCreation, 'yyyy-MM-dd', 'en-US'),
    ];
    const market_type = form.market ? form.market : [];
    const service = [...[], form.service];
    const tech_type = form.technologies ? form.technologies : [];
    const evo_stage = [...[], form.stage];
    const techp_residents = form.residentList  ? form.residentList : [];
    const inno_comp = [...[], +form.isInnovation];
    const msk_inno = [...[], +form.isMemberMoscow];
    const msp = [...[], +form.isCompanyMSP];
    const msp_cat = [...[], form.mspCategory];
    const nav_stat = [...[], +form.isPublished];
    const skolk_inno = [...[], +form.isSkolkovo];
    const start_up = [...[], +form.isStatup];
    const tech_stack = form.companyTechnology ? form.companyTechnology : [];
    const fond_type = form.fond_type;
    const result = +form.result;

    let formRequest: LearningFormRequestInterface = {
      start_up: {
        b_model: b_model,
        found_date: found_date,
        market_type: market_type,
        service: service,
        tech_type: tech_type,
        evo_stage: evo_stage,
        inno_comp: inno_comp,
        msk_inno: msk_inno,
        msp: msp,
        msp_cat: msp_cat,
        nav_stat: nav_stat,
        skolk_inno: skolk_inno,
        start_up: start_up,
        tech_stack: tech_stack,
        techp_residents: techp_residents,
        fond_type: fond_type,
        result: result,
      },
    };

    return formRequest;
  }
}
