import { Component, OnInit } from '@angular/core';
import { FormService } from '../../shared/services/form.service';
import { LayoutService } from '../../shared/services/layout.service';
import { RecommendationService } from '../../shared/services/recommendation.service';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormConverter } from '../../shared/tools/form-converter';
import { LocalStorageService } from '../../shared/services/localstorage.service';
import { ResultInterface } from '../../shared/types/data/recommendation-results.inerface';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-recommendation',
  styleUrls: ['./recommendation.component.scss'],
  templateUrl: './recommendation.component.html',
})
export class RecommendationComponent implements OnInit {
  public isLoading: boolean = false;

  public questionnaire: any;
  public recommendationList: string[] = [];
  public prevRecommendationList: ResultInterface[] = [];

  constructor(
    private _router: Router,
    private _formService: FormService,
    private _layoutService: LayoutService,
    private _localstorageService: LocalStorageService,
    private _recommendationService: RecommendationService
  ) {}

  ngOnInit() {
    this._layoutService.setCurrentPageConfig({
      title: 'Результаты подбора',
      subTitle: 'Ознакомьтесь с Вашими результатами',
    });

    this.prevRecommendationList = this._localstorageService.getResults()?.prev.slice(0, 5);
    this.isLoading = true;

    // Создаем переиспользуемый observable, с логикой запросов - если тип Express - отправляем на аналитику экспресса, иначе в Detailed
    const recommendation$ = this._formService.getForm().pipe(
      switchMap((formObject) => {
        console.log('FORM: ', formObject);
        if (!formObject) {
          throw 'err_no_form';
        }

        this.questionnaire = formObject;
        if (formObject.type === 'express') {
          const requestForm = FormConverter.convertExpressForm(formObject.form);

          console.log('In Express: ', requestForm);
          return this._recommendationService.getExpressRecommendation(
            requestForm
          );
        } else {
          const requestForm = FormConverter.convertDetailedForm(
            formObject.form
          );

          console.log('In Detailed: ', requestForm);
          return this._recommendationService.getDetailedRecommendation(
            formObject
          );
        }
      })
    );

    // Проверяем готовность АПИ методом checkAPI(), если всё хорошо используем поток Observable для получения рекомендаций
    // Иначе вызываем initAPI(), для подготовки
    this._recommendationService
      .checkAPI()
      .pipe(
        switchMap((isAPIready) => {
          if (isAPIready.status === 'data not loaded') {
            return this._recommendationService.initAPI().pipe(
              switchMap((isAPIinit) => {
                if (isAPIinit.status === 'ok') {
                  return recommendation$;
                } else {
                  // Добавить обработку ошибки (нет соединения с сервером / произошла ошибка на сервере, попробуйте еще раз)
                  return recommendation$;
                }
              })
            );
          } else {
            return recommendation$;
          }
        })
      )
      .subscribe(
        (response) => {
          this.isLoading = false;
          this.recommendationList = response;

          // improve it, after API update
          const newRecommendationList: ResultInterface[] = response.map((x: string) => {
            return {
              name: x,
              score: 10,
              rate: 10
            }
          })
          this._localstorageService.setResults(newRecommendationList)
          console.log('response: ', response);
        },
        (error) => {
          // ADD MESSAGE ABOUT ERROR
          this.isLoading = false;
          if (error === 'err_no_form') {
            console.log('обработать ошибку, нет данных в форме')
          }
          console.log('error', error);
        }
      );
  }
}
