import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormService } from 'src/app/public/shared/services/form.service';
import { StepperFormInterface } from 'src/app/public/shared/types/common/stepper-form.interface';
import { DetailedFormInterface } from 'src/app/public/shared/types/common/detailed-form.interface';

@Component({
  selector: 'app-stepper-actions',
  template: `
    <div class="actions">
      <button type="button" (click)="cancel()">Отмена</button>
      <button
        type="button"
        (click)="prevStep()"
        [disabled]="!getIsBackAvaible()"
      >
        Назад
      </button>
      <button
        type="button"
        class="button__accent"
        [disabled]="stepperConfig.currentIsInvalid"
        (click)="nextStep()"
        *ngIf="getIsNextAvaible()"
      >
        Далее
      </button>
      <button
        type="button"
        (click)="applyForm()"
        [disabled]="stepperConfig.currentIsInvalid"
        class="button__accent"
        *ngIf="getIsApplyAvaible()"
      >
        Подобрать
      </button>
    </div>
    <p class="warning-text" *ngIf="stepperConfig.currentIsInvalid">
      Чтобы продолжить - заполните обязательные поля.
    </p>
  `,
})
export class StepperActionsComponent implements OnInit {
  public stepperConfig!: StepperFormInterface;

  constructor(private _formService: FormService, private _router: Router) {}

  ngOnInit() {
    this._formService.stepper$.subscribe((stepper) => {
      this.stepperConfig = stepper;
    });

  }

  public applyForm() {
    this._router.navigate(['/recommendation']);
  }

  public getIsApplyAvaible(): boolean {
    if (this.stepperConfig.currentStepIdx === this.stepperConfig.maxSteps - 1) {
      return true;
    } else {
      return false;
    }
  }

  public getIsNextAvaible(): boolean {
    if (this.stepperConfig.currentStepIdx === this.stepperConfig.maxSteps - 1) {
      return false;
    } else {
      return true;
    }
  }

  public getIsBackAvaible(): boolean {
    if (this.stepperConfig.currentStepIdx === 0) {
      return false;
    } else {
      return true;
    }
  }

  public prevStep() {
    if (this.stepperConfig.currentStepIdx === 0) {
      return;
    }

    this.stepperConfig.currentStepIdx--;
  }

  public nextStep() {
    if (this.stepperConfig.currentStepIdx === this.stepperConfig.maxSteps - 1) {
      return;
    }

    this.stepperConfig.currentStepIdx++;
  }

  public cancel(): void {
    this._router.navigate(['/']);
  }
}
