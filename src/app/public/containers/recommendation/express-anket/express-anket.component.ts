import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'express-anket',
  template: ` <div class="profile__table">
    <div class="profile__table-row">
      <div class="profile__property-name">Рынок</div>
      <div class="profile__property-value">
        <p *ngFor="let item of questionnaire?.form?.market">{{ item }}</p>
      </div>
    </div>
    <hr />
    <div class="profile__table-row">
      <div class="profile__property-name">Дата основания</div>
      <div class="profile__property-value">
        {{ questionnaire?.form?.creationDate | date: 'yyyy.MM.dd' }}
      </div>
    </div>
    <hr />
    <div class="profile__table-row">
      <div class="profile__property-name">
        Технологии для Инновационных компаний
      </div>
      <div class="profile__property-value">
        <p *ngFor="let item of questionnaire?.form?.technologies">{{ item }}</p>
      </div>
    </div>
    <hr />
    <div class="profile__table-row">
      <div class="profile__property-name">
        Предоставляемые Услуги от Акселератора
      </div>
      <div class="profile__property-value">
        {{ questionnaire?.form?.services }}
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
  </div>`,
})
export class ExpressAnketComponent implements OnInit {
  @Input()
  questionnaire: any;

  constructor() {}

  ngOnInit() {}
}
