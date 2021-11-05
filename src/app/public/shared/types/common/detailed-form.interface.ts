export interface DetailedFormInterface {
  type: string;
  isNew: boolean;
  form: DetailedFormInnerInterface;
}

export interface IsInvalidStateInterface {
  stateIdx: number;
  isInvalid: boolean;
}

export interface DymanicFormInterface {
  name: string;
}

export interface DetailedFormInnerInterface {
  // step 1
  // Основной ОКВЭД
  ocvd: string;
  // Дата основания
  dateCreation: string;
  // Предоставляемые Услуги от Акселератора
  service: string;
  // Стадия развития компании
  stage: string;
  // Рынок для Инновационных компаний
  market: string[];

  // step 2
  // Технологическая ниша компании
  companyTechnology: string[];
  // Компания является малым или средним предприятием
  isCompanyMSP: number;
  // Категория МСП - если на предыдущий вопрос ответ "Да"
  mspCategory: string;
  // Технологии для Инновационных компаний
  technologies: string[];
  // Бизнес-модель для Инновационных компаний
  businessModel: string[];
  // Является ли компания резидентом технопарков
  residentList: string[];

  // step 3
  // Является ли комнания экспортером
  isExporter: number;
  // Организация  участник Сколково
  isSkolkovo: number;
  // Участник инновационного кластера города Москвы
  isMemberMoscow: number;
  // Инновационная компания
  isInnovation: number;
  // Опубликован на Навигаторе по стартап-экосистеме Москвы
  isPublished: number;
  // Организация аккредитована на Бирже контрактного производства
  isAccreditated: number;
  // Стартап
  isStatup: number;

  // step 4
  // Патенты компании
  patentList: DymanicFormInterface[];
  // Продукты компании
  productList: DymanicFormInterface[];
}
