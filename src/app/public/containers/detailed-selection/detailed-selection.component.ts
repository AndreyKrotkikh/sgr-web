import { StepperFormInterface } from './../../shared/types/common/stepper-form.interface';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../shared/services/layout.service';

@Component({
  selector: 'app-detailed-selection',
  styleUrls: ['./detailed-selection.component.scss'],
  templateUrl: 'detailed-selection.component.html',
})
export class DetailedSelectionComponent implements OnInit {
  public expressForm!: FormGroup;
  public stepperConfig!: StepperFormInterface;

  constructor(private _layoutService: LayoutService) {}

  ngOnInit() {
    this._layoutService.setCurrentPageConfig({
      title: 'Точный подбор',
      subTitle: 'Подбор сервисов с высокой точностью',
    });

    this.stepperConfig = {
      currentStepIdx: 0,
      currentStepName: '1',
      maxSteps: 4,
    };
  }

  public prevStep() {
    if (this.stepperConfig.currentStepIdx === 0) {
      return;
    }

    this.stepperConfig.currentStepIdx--;
  }

  public nextStep() {
    if (this.stepperConfig.currentStepIdx === this.stepperConfig.maxSteps-1) {
      return;
    }

    this.stepperConfig.currentStepIdx++;
  }

  public cancel() {}

  public onSubmit() {}
}
