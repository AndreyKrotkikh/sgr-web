import { DropdownInterfaceMilti } from '../../../../shared/types/data/dropdown-interface';
import { Component, OnInit } from '@angular/core';
import { SGRDataService } from 'src/app/public/shared/services/data.service';
import { DropdownInterface } from 'src/app/public/shared/types/data/dropdown-interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DetailedFormInterface } from 'src/app/public/shared/types/common/detailed-form.interface';
import { FormService } from 'src/app/public/shared/services/form.service';
import { LocalStorageService } from 'src/app/public/shared/services/localstorage.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
})
export class StepThreeComponent implements OnInit {
  // Form
  public stepThreeForm!: FormGroup;
  private _stepperForm!: DetailedFormInterface;

  constructor(
    private _formService: FormService,
    private _formBuilder: FormBuilder,
    private _localstorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.initValue();
    this.formUpdate();
  }

  onItemSelect(item: any) {
  }

  private formUpdate() {
    this.stepThreeForm.valueChanges.subscribe((changedForm) => {
      const updatedForm: DetailedFormInterface = {
        ...this._stepperForm,
        type: 'detailed',
        isNew: false,
        form: {
          ...this._stepperForm?.form,
          isExporter: changedForm.isExporter,
          isSkolkovo: changedForm.isSkolkovo,
          isMemberMoscow: changedForm.isMemberMoscow,
          isInnovation: changedForm.isInnovation,
          isPublished: changedForm.isPublished,
          isAccreditated: changedForm.isAccreditated,
          isStatup: changedForm.isStatup,
        },
      };

      this._localstorageService.setDetailedDraft(updatedForm);
      this._formService.setDetailedForm(updatedForm);
    });
  }

  private initValue(): void {
    // ============== GET CURRENT FORM ============================= //
    this._formService.getForm().subscribe((form) => {
      this._stepperForm = form;
    });

    // ============== SET CURRENT FORM ============================= //
    this.stepThreeForm = this._formBuilder.group({
      isExporter: '',
      isSkolkovo: 0,
      isMemberMoscow: '',
      isInnovation: '',
      isPublished: [],
      isAccreditated: 0,
      isStatup: 0,
    });

    if (!this._stepperForm?.isNew) {
      this.stepThreeForm.patchValue({
        isExporter: this._stepperForm?.form?.isExporter,
        isSkolkovo: this._stepperForm?.form?.isSkolkovo,
        isMemberMoscow: this._stepperForm?.form?.isMemberMoscow,
        isInnovation: this._stepperForm?.form?.isInnovation,
        isPublished: this._stepperForm?.form?.isPublished,
        isAccreditated: this._stepperForm?.form?.isAccreditated,
        isStatup: this._stepperForm?.form?.isStatup,
      });
    }
  }
}
