import { Component, OnInit } from '@angular/core';
import { FormService } from '../../shared/services/form.service';
import { LayoutService } from '../../shared/services/layout.service';
import { RecommendationService } from '../../shared/services/recommendation.service';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recommendation',
  styleUrls: ['./recommendation.component.scss'],
  templateUrl: './recommendation.component.html',
})
export class RecommendationComponent implements OnInit {
  public isLoading: boolean = false;

  public questionnaire: any;

  constructor(
    private _router: Router,
    private _formService: FormService,
    private _layoutService: LayoutService,
    private _recommendationService: RecommendationService
  ) {}

  ngOnInit() {
    this._layoutService.setCurrentPageConfig({
      title: 'Результаты подбора',
      subTitle: 'Ознакомьтесь с Вашими результатами',
    });

    // this.isLoading = true;
    this._formService
      .getForm()
      .pipe(
        switchMap((form) => {
          console.log('FORM: ', form);
          if (!form) {
            this._router.navigate(['/']);
          }

          this.questionnaire = form;
          if (form.type === 'express') {
            console.log('IM EXPRESS');
            return this._recommendationService.getExpressRecommendation(form);
          } else {
            return this._recommendationService.getDetailedRecommendation(form);
          }
        })
      )
      .subscribe(
        (response) => {
          console.log('response: ', response);
        },
        (error) => {
          console.log('error');
        }
      );

    // subscribe(expressForm => {
    //   this._recommendationService.getExpressRecommendation(expressForm).subscribe(response => {

    //   });
    //   this.isLoading = false
    // })
    // TODO: request to API
    // SAVE TO STATE DATA
  }
}
