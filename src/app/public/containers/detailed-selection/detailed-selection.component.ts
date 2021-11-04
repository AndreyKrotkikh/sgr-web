import { Router } from '@angular/router';
import { StepperFormInterface } from './../../shared/types/common/stepper-form.interface';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../shared/services/layout.service';
import { FormService } from '../../shared/services/form.service';
import { LocalStorageService } from '../../shared/services/localstorage.service';

@Component({
  selector: 'app-detailed-selection',
  styleUrls: ['./detailed-selection.component.scss'],
  templateUrl: 'detailed-selection.component.html',
})
export class DetailedSelectionComponent implements OnInit {
  public stepperConfig!: StepperFormInterface;

  constructor(
    private _layoutService: LayoutService,
    private _router: Router,
    private _localstorageService: LocalStorageService,
    private _formService: FormService,
  ) {}

  ngOnInit() {
    this._layoutService.setCurrentPageConfig({
      title: 'Персонализированный подбор',
      subTitle: 'Подбор сервисов с высокой точностью',
    });

    this._formService.stepper$.subscribe((stepper) => {
      this.stepperConfig = stepper;
    });

    if (this._router.url.includes('draft')) {
      this._fillForm();
    }
  }


  private _fillForm() {
    const draftForm = this._localstorageService.getDetailedDraft();
    this._formService.setDetailedForm(draftForm);
  }
}
