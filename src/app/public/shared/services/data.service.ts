import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DropdownInterface } from './../types/data/dropdown-interface';
import { Injectable } from '@angular/core';
@Injectable()
export class SGRDataService {
  //#region config & private vars

  // Сервис (Предоставляемые Услуги от Акселератора)
  // Старая версия
  // private _servicesIniitialValue: DropdownInterface[] = [
  //   {
  //     title: 'Пилотное тестирование',
  //   },
  //   {
  //     title: 'Московский акселератор',
  //   },
  //   {
  //     title: 'Карта инновационных решений',
  //   },
  //   {
  //     title: 'StartHub.Moscow',
  //   },
  //   {
  //     title: 'Субсидия на инжиниринг',
  //   },
  //   {
  //     title: 'МИК +',
  //   },
  //   {
  //     title: 'МЭЦ +',
  //   },
  //   {
  //     title: 'Инвестиционная упаковка',
  //   },
  // ];
  private _servicesIniitialValue: DropdownInterface[] = [
    {
      title: 'Найти финансирование',
    },
    {
      title: 'Доработать ценностное предложение, масштабировать бизнес',
    },
    {
      title: 'Расширить нетворк',
    },
    {
      title: 'Найти заказчиков / партнеров',
    },
    {
      title: 'Протестировать продукт',
    },
    {
      title: 'Доработать прототип',
    },
    {
      title: 'Выпустить мелкую серию продукта',
    },
    {
      title: 'Найти помещение в аренду',
    },
    {
      title: 'Выйти на международный рынок',
    },
    {
      title: 'Получить консультацию по бизнес-вопросам',
    },
  ];

  // Технологическая ниша компании для Инновационных компаний
  private _techBaseInitialValue: DropdownInterface[] = [
    {
      title: 'Космос',
    },
    {
      title: 'Консалтинг',
    },
    {
      title: 'NoneTechStackType',
    },
    {
      title: 'Спорт',
    },
    {
      title: 'Страхование',
    },
    {
      title: 'ИТ, разработка ПО',
    },
    {
      title: 'BioTech',
    },
    {
      title: 'Туризм',
    },
    {
      title: 'Безопасность',
    },
    {
      title: 'Телекоммуникации',
    },
    {
      title: 'RetailTech и E-commerce',
    },
    {
      title: 'Игры',
    },
    {
      title: 'HealthTech',
    },
    {
      title: 'Энергетика',
    },
    {
      title: 'FinTech',
    },
    {
      title: 'Маркетинг и реклама',
    },
    {
      title: 'FoodTech',
    },
    {
      title: 'Мода',
    },
    {
      title: 'Экология',
    },
    {
      title: 'Промышленность и Индустрия 4.0',
    },
    {
      title: 'Медиа и коммуникации',
    },
    {
      title: 'Развлечения',
    },
    {
      title: 'Транспорт и логистика',
    },
    {
      title: 'Услуги для населения',
    },
    {
      title: 'Недвижимость и строительство',
    },
    {
      title: 'HRTech',
    },
    {
      title: 'EdTech',
    },
  ];

  // Стадия развития компании для Инновационных компаний
  private _stateCompanyInitialValue: DropdownInterface[] = [
    {
      title: 'Посевная',
    },
    {
      title: 'Ранний рост',
    },
    {
      title: 'Расширение',
    },
    {
      title: 'Зрелость',
    },
    {
      title: 'Любая',
    },
  ];

  // Рынок для Инновационных компаний
  private _marketInitialValue: DropdownInterface[] = [
    {
      title: 'Transport & Logistics',
    },
    {
      title: 'FashionTech',
    },
    {
      title: 'CleanTech',
    },
    {
      title: 'Advertising & Marketing',
    },
    {
      title: 'Мedia & Communication',
    },
    {
      title: 'NoneType',
    },
    {
      title: 'AgroTech',
    },
    {
      title: 'PropTech',
    },
    {
      title: 'E-commerce',
    },
    {
      title: 'Consumer Goods & Services',
    },
    {
      title: 'Telecom',
    },
    {
      title: 'Gaming',
    },
    {
      title: 'Entertainment',
    },
    {
      title: 'SafetyTech',
    },
    {
      title: 'LegalTech',
    },
    {
      title: 'Travel',
    },
    {
      title: 'SportTech',
    },
    {
      title: 'RetailTech',
    },
    {
      title: 'FoodTech',
    },
    {
      title: 'FinTech',
    },
    {
      title: 'Business Software',
    },
    {
      title: 'Cybersecurity',
    },
    {
      title: 'Healthcare',
    },
    {
      title: 'IndustrialTech',
    },
    {
      title: 'SpaceTech',
    },
    {
      title: 'HRTech',
    },
    {
      title: 'InsuranceTech',
    },
    {
      title: 'EdTech',
    },
  ];

  // 'Технологии' для Инновационных компаний"
  private _technologiesInitialValue: DropdownInterface[] = [
    {
      title: 'Новые материалы',
    },
    {
      title: 'Биометрия',
    },
    {
      title: 'Нейротехнологии',
    },
    {
      title: 'AR/VR',
    },
    {
      title: 'Компьютерное зрение',
    },
    {
      title: 'NoneTechType',
    },
    {
      title: 'Блокчейн',
    },
    {
      title: 'Беспилотники',
    },
    {
      title: '3D моделирование',
    },
    {
      title: 'Аддитивные технологии',
    },
    {
      title: 'Нанотехнологии',
    },
    {
      title: 'Интернет вещей',
    },
    {
      title: 'Зеленые технологии',
    },
    {
      title: 'Искусственный интеллект и машинное обучение',
    },
    {
      title: 'Биотехнологии',
    },
    {
      title: 'Новые и портативные источники энергии',
    },
    {
      title: 'Робототехника',
    },
  ];

  // 'Бизнес-модель для Инновационных компаний'
  private _businessModelInitialValue: DropdownInterface[] = [
    {
      title: 'B2C',
    },
    {
      title: 'NoneBusinessType',
    },
    {
      title: 'B2B2C',
    },
    {
      title: 'P2P',
    },
    {
      title: 'B2G',
    },
    {
      title: 'B2B',
    },
  ];

  // Категория МСП
  private _categoryMSPInitialValue: DropdownInterface[] = [
    {
      title: 'ЮЛ Микро',
    },
    {
      title: 'ЮЛ Среднее',
    },
    {
      title: 'ЮЛ Малое',
    },
    {
      title: 'ИП Микро',
    },
    {
      title: 'ИП Малое',
    },
  ];

  // 'Резидент технопарков'
  private _residentOfParksInitialValue: DropdownInterface[] = [
    {
      title: 'Технопарк "НИИ Точных приборов"',
    },
    {
      title: 'Технопарк "МЗТА"',
    },
    {
      title: 'Технопарк "Отрадное"',
    },
    {
      title: 'Технопарк "НИИССУ"',
    },
    {
      title: 'Технопарк "Фотоника"',
    },
    {
      title: 'Технопарк "Слава"',
    },
    {
      title: 'Технопарк "Физтехпарк"',
    },
    {
      title: 'Технопарк "Научный парк МГУ"',
    },
    {
      title: 'Технопарк "Радиофизика"',
    },
    {
      title: 'Технопарк "ВТИ"',
    },
    {
      title: 'Технопарк "Мосгормаш"',
    },
    {
      title: 'Технопарк "Курчатовский институт"',
    },
    {
      title: 'Технопарк "Водный стадион"',
    },
    {
      title: 'Технопарк "Нагатино"',
    },
    {
      title: 'Технопарк "Полюс"',
    },
    {
      title: 'Технополис "Москва"',
    },
    {
      title: 'Технопарк "Центр хайтек инноваций "РИКОР"',
    },
    {
      title: 'NoneTechParksType',
    },
    {
      title: 'Технопарк "ИТЭЛМА"',
    },
    {
      title: 'Технопарк "ЭЛМА"',
    },
    {
      title: 'Технопарк "Сколково"',
    },
    {
      title: 'Технопарк "ЦНИИТМАШ"',
    },
    {
      title: 'Технопарк "Строгино"',
    },
    {
      title: 'Технопарк "Сапфир"',
    },
    {
      title: 'Технопарк "Связь инжиниринг"',
    },
  ];

  //#endregion
  constructor(private _http: HttpClient) {}

  // Сервис (Предоставляемые Услуги от Акселератора)
  get serviceList(): DropdownInterface[] {
    return this._servicesIniitialValue;
  }

  // Технологическая ниша компании для Инновационных компаний
  get techBaseList(): DropdownInterface[] {
    return this._techBaseInitialValue;
  }

  // Стадия развития компании для Инновационных компаний
  get stateCompanyList(): DropdownInterface[] {
    return this._stateCompanyInitialValue;
  }

  //Рынок для Инновационных компаний
  get marketList(): DropdownInterface[] {
    return this._marketInitialValue;
  }

  // 'Технологии' для Инновационных компаний"
  get technologiesList(): DropdownInterface[] {
    return this._technologiesInitialValue;
  }

  // 'Бизнес-модель для Инновационных компаний'
  get businessModelList(): DropdownInterface[] {
    return this._businessModelInitialValue;
  }

  // Категория МСП
  get categoryMSPList(): DropdownInterface[] {
    return this._categoryMSPInitialValue;
  }

  // 'Резидент технопарков'
  get residentOfParkList(): DropdownInterface[] {
    return this._residentOfParksInitialValue;
  }

  public getOCVDList(): Observable<any> {
    const url = '../../../../assets/data/okvedList.json';
    return this._http.get<any>(url);
  }

  // var options = {
  //     method: "POST",
  //     mode: "cors",
  //
  //     body:
  // }

  // fetch(url, options)
  // .then(response => response.text())
  // .then(result => console.log(result))
  // .catch(error => console.log("error", error));
}
