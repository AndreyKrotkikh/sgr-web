import { DropdownInterfaceMilti } from './../../../../shared/types/data/dropdown-interface';
import { Component, OnInit } from '@angular/core';
import { SGRDataService } from 'src/app/public/shared/services/data.service';
import { DropdownInterface } from 'src/app/public/shared/types/data/dropdown-interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/public/shared/services/form.service';
import { DetailedFormInterface } from 'src/app/public/shared/types/common/detailed-form.interface';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
})
export class StepOneComponent implements OnInit {
  // Form
  public stepOneForm!: FormGroup;

  public stageList: DropdownInterfaceMilti[] = [];
  public ocvdList: DropdownInterfaceMilti[] = [];
  public servicesList: DropdownInterface[] = [];
  public marketList: DropdownInterfaceMilti[] = [];

  public dropdownSettingsSingle: any = [];
  public dropdownSettingsMultie: any = [];

  private _stepperForm!: DetailedFormInterface;

  constructor(
    private _formService: FormService,
    private _dataService: SGRDataService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initValue();
    this.formUpdate();
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  private formUpdate() {
    this.stepOneForm.valueChanges.subscribe((changedForm) => {
      const updatedForm: DetailedFormInterface = {
        ...this._stepperForm,
        isNew: false,
        form: {
          ...this._stepperForm.form,
          ocvd: changedForm.ocvd,
          dateCreation: changedForm.creationDate,
          service: changedForm.services,
          stage: changedForm.companyStage[0],
          market: changedForm.market,
        },
      };

      this._formService.setDetailedForm(updatedForm);
    });
  }

  private initValue(): void {
    this._dataService.getOCVDList().subscribe((resp) => {
      this.ocvdList = resp.data.map((x: { group: string; name: string }) => {
        return {
          id: x.group,
          itemName: `${x.group} ${x.name}`,
        };
      });
    });
    this.marketList = this._dataService.marketList.map((x, index) => {
      return {
        id: index,
        itemName: x.title,
      };
    });
    this.servicesList = this._dataService.serviceList;

    this.stageList = this._dataService.stateCompanyList.map((x, index) => {
      return {
        id: index,
        itemName: x.title,
      };
    });

    this._formService.getForm().subscribe((form) => {
      this._stepperForm = form;
    });

    this.dropdownSettingsSingle = {
      text: 'Выберите',
      singleSelection: true,
      enableSearchFilter: true,
    };
    this.dropdownSettingsMultie = {
      text: 'Выберите',
      singleSelection: false,
      enableSearchFilter: false,
    };

    this.stepOneForm = this._formBuilder.group({
      ocvd: this._stepperForm.isNew ? '' : this._stepperForm.form.ocvd,
      creationDate: this._stepperForm.isNew
        ? ''
        : this._stepperForm.form.dateCreation,
      services: this._stepperForm.isNew ? '' : this._stepperForm.form.service,
      companyStage: this._stepperForm.isNew ? '' : this._stepperForm.form.stage,
      market: this._stepperForm.isNew ? [] : this._stepperForm.form.market,
    });
  }
}
