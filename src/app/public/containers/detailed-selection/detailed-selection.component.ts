import { StepperFormInterface } from './../../shared/types/common/stepper-form.interface';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../shared/services/layout.service';
import { SGRDataService } from '../../shared/services/data.service';
import { FormService } from '../../shared/services/form.service';

@Component({
  selector: 'app-detailed-selection',
  styleUrls: ['./detailed-selection.component.scss'],
  templateUrl: 'detailed-selection.component.html',
})
export class DetailedSelectionComponent implements OnInit {
  public expressForm!: FormGroup;
  public stepperConfig!: StepperFormInterface;

  constructor(private _layoutService: LayoutService, private _formService: FormService) {}

  ngOnInit() {
    this._layoutService.setCurrentPageConfig({
      title: 'Точный подбор',
      subTitle: 'Подбор сервисов с высокой точностью',
    });

    this._formService.stepper$.subscribe(stepper => {
      this.stepperConfig = stepper;
    })
  }

  //#region Stepper

  //#endregion

  public cancel() {}

  public onSubmit() {}
}
