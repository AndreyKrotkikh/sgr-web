export interface ExpressFormInterface {
  type: string;
  isNew: boolean;
  form: ExpressFormInnerInterface;
}

export interface ExpressFormInnerInterface {
  // Дата основания
  dateCreation: string;
  // Рынок для Инновационных компаний
  market: string[];
  // Технологии для Инновационных компаний
  technologies: string[];
  // Предоставляемые Услуги от Акселератора
  service: string;
  // Бизнес-модель для Инновационных компаний
  businessModel: string[];
  // Стадия развития компании
  stage: string;
}
