import { StepperFormInterface } from './../../shared/types/common/stepper-form.interface';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../shared/services/layout.service';
import { FormService } from '../../shared/services/form.service';

@Component({
  selector: 'app-detailed-selection',
  styleUrls: ['./detailed-selection.component.scss'],
  templateUrl: 'detailed-selection.component.html',
})
export class DetailedSelectionComponent implements OnInit {
  public stepperConfig!: StepperFormInterface;

  constructor(
    private _layoutService: LayoutService,
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
  }
}
