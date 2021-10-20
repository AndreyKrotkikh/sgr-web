import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'detailed-anket',
  template: ` <div class="profile__table">
    <div class="profile__table-row profile__table-row__title">
      <p>Шаг <strong>1</strong></p>
    </div>
    <div class="profile__table-row">
      <div class="profile__property-name">Дата основания</div>
      <div class="profile__property-value">
        {{ questionnaire?.form?.dateCreation | date: 'yyyy.MM.dd' }}
      </div>
    </div>
    <hr />
    <div class="profile__table-row">
      <div class="profile__property-name">Стадия развития компании</div>
      <div class="profile__property-value">
        {{ questionnaire?.form?.stage }}
      </div>
    </div>
    <hr />
    <div class="profile__table-row">
      <div class="profile__property-name">Основной ОКВЭД</div>
      <div class="profile__property-value">
        {{ questionnaire?.form?.ocvd }}
      </div>
    </div>
    <hr />
    <div class="profile__table-row">
      <div class="profile__property-name">
        Предоставляемые услуги от акселератора
      </div>
      <div class="profile__property-value">
        {{ questionnaire?.form?.service }}
      </div>
    </div>
    <hr />
    <div class="profile__table-row">
      <div class="profile__property-name">Рынок для инновационных компаний</div>
      <div class="profile__property-value">
        <p *ngFor="let item of questionnaire?.form?.market">{{ item }}</p>
      </div>
    </div>

    <div class="profile__table-row profile__table-row__title">
      <p>Шаг <strong>2</strong></p>
    </div>

    <div class="profile__table-row">
      <div class="profile__property-name">Технологическая ниша компании</div>
      <div class="profile__property-value">
        <p *ngFor="let item of questionnaire?.form?.companyTechnology">
          {{ item }}
        </p>
      </div>
    </div>
    <hr />

    <div class="profile__table-row">
      <div class="profile__property-name">
        Технологии для инновационных компаний
      </div>
      <div class="profile__property-value">
        <p *ngFor="let item of questionnaire?.form?.technologies">{{ item }}</p>
      </div>
    </div>
    <hr />

    <div class="profile__table-row">
      <div class="profile__property-name">
        Бизнес-модель для Инновационных компаний
      </div>
      <div class="profile__property-value">
        <p *ngFor="let item of questionnaire?.form?.businessModel">
          {{ item }}
        </p>
      </div>
    </div>
    <hr />

    <div class="profile__table-row">
      <div class="profile__property-name">
        Компания является малым или средним предприятием
      </div>
      <div class="profile__property-value">
        <ng-container [ngSwitch]="questionnaire?.form?.isCompanyMSP">
          <p *ngSwitchCase="'0'">Нет</p>
          <p *ngSwitchCase="'1'">Да</p>
        </ng-container>
      </div>
    </div>
    <hr />

    <div class="profile__table-row">
      <div class="profile__property-name">Категория МСП</div>
      <div class="profile__property-value">
        {{ questionnaire?.form?.mspCategory }}
      </div>
    </div>
    <hr />

    <div class="profile__table-row">
      <div class="profile__property-name">
        Является ли компания резидентом технопарков
      </div>
      <div class="profile__property-value">
        <p *ngFor="let item of questionnaire?.form?.residentList">
          {{ item }}
        </p>
      </div>
    </div>

    <div class="profile__table-row profile__table-row__title">
      <p>Шаг <strong>3</strong></p>
    </div>

    <div class="profile__table-row">
      <div class="profile__property-name">Является ли комнания экспортером</div>
      <div class="profile__property-value">
        <ng-container [ngSwitch]="questionnaire?.form?.isExporter">
          <p *ngSwitchCase="'0'">Нет</p>
          <p *ngSwitchCase="'1'">Да</p>
        </ng-container>
      </div>
    </div>
    <hr />

    <div class="profile__table-row">
      <div class="profile__property-name">
        Участник инновационного кластера города Москвы
      </div>
      <div class="profile__property-value">
        <ng-container [ngSwitch]="questionnaire?.form?.isMemberMoscow">
          <p *ngSwitchCase="'0'">Нет</p>
          <p *ngSwitchCase="'1'">Да</p>
        </ng-container>
      </div>
    </div>
    <hr />

    <div class="profile__table-row">
      <div class="profile__property-name">Организация участник Сколково</div>
      <div class="profile__property-value">
        <ng-container [ngSwitch]="questionnaire?.form?.isSkolkovo">
          <p *ngSwitchCase="'0'">Нет</p>
          <p *ngSwitchCase="'1'">Да</p>
        </ng-container>
      </div>
    </div>
    <hr />

    <div class="profile__table-row">
      <div class="profile__property-name">Инновационная компания</div>
      <div class="profile__property-value">
        <ng-container [ngSwitch]="questionnaire?.form?.isInnovation">
          <p *ngSwitchCase="'0'">Нет</p>
          <p *ngSwitchCase="'1'">Да</p>
        </ng-container>
      </div>
    </div>
    <hr />

    <div class="profile__table-row">
      <div class="profile__property-name">
        Организация аккредитована на Бирже контрактного производства
      </div>
      <div class="profile__property-value">
        <ng-container [ngSwitch]="questionnaire?.form?.isAccreditated">
          <p *ngSwitchCase="'0'">Нет</p>
          <p *ngSwitchCase="'1'">Да</p>
        </ng-container>
      </div>
    </div>
    <hr />

    <div class="profile__table-row">
      <div class="profile__property-name">Стартап</div>
      <div class="profile__property-value">
        <ng-container [ngSwitch]="questionnaire?.form?.isStatup">
          <p *ngSwitchCase="'0'">Нет</p>
          <p *ngSwitchCase="'1'">Да</p>
        </ng-container>
      </div>
    </div>

    <div class="profile__table-row profile__table-row__title">
      <p>Шаг <strong>4</strong></p>
    </div>

    <div class="profile__table-row">
      <div class="profile__property-name">Патенты компании</div>
      <div class="profile__property-value">
        <p *ngFor="let item of questionnaire?.form?.patentList">
          {{ item.name }}
        </p>
      </div>
    </div>
    <hr />

    <div class="profile__table-row">
      <div class="profile__property-name">Продукты компании</div>
      <div class="profile__property-value">
        <p *ngFor="let item of questionnaire?.form?.productList">
          {{ item.name }}
        </p>
      </div>
    </div>
    <hr />
  </div>`,
})
export class DetailedAnketComponent implements OnInit {
  @Input()
  questionnaire: any;

  constructor() {}

  ngOnInit() {}
}
