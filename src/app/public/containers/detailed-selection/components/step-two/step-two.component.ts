import { DropdownInterfaceMilti } from '../../../../shared/types/data/dropdown-interface';
import { Component, OnInit } from '@angular/core';
import { SGRDataService } from 'src/app/public/shared/services/data.service';
import { DropdownInterface } from 'src/app/public/shared/types/data/dropdown-interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DetailedFormInterface } from 'src/app/public/shared/types/common/detailed-form.interface';
import { FormService } from 'src/app/public/shared/services/form.service';
import { LocalStorageService } from 'src/app/public/shared/services/localstorage.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
})
export class StepTwoComponent implements OnInit {
  // Form
  public stepTwoForm!: FormGroup;

  public companyTechnologyList: DropdownInterfaceMilti[] = [];
  public technologyList: DropdownInterfaceMilti[] = [];
  public mspList: DropdownInterfaceMilti[] = [];
  public businessModelList: DropdownInterfaceMilti[] = [];
  public residentAvaibleList: DropdownInterfaceMilti[] = [];

  public dropdownSettingsSingle: any = [];
  public dropdownSettingsMultie: any = [];

  private _stepperForm!: DetailedFormInterface;

  constructor(
    private _formService: FormService,
    private _dataService: SGRDataService,
    private _formBuilder: FormBuilder,
    private _localstorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.initValue();
    this.formUpdate();
  }

  public isMSP(): boolean {
    return this.stepTwoForm.value.isCompanyMSP === '1' ? true : false;
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  private formUpdate() {
    this.stepTwoForm.valueChanges.subscribe((changedForm) => {
      const updatedForm: DetailedFormInterface = {
        ...this._stepperForm,
        isNew: false,
        form: {
          ...this._stepperForm.form,
          companyTechnology: changedForm.companyTechnology,
          isCompanyMSP: changedForm.isCompanyMSP,
          technologies: changedForm.technologies,
          mspCategory: changedForm.mspCategory,
          businessModel: changedForm.businessModel,
          residentList: changedForm.residentList,
        },
      };

      this._localstorageService.setDetailedDraft(updatedForm);
      this._formService.setDetailedForm(updatedForm);
    });
  }

  private initValue(): void {
    // ============== GET DATA FOR DROPDOWNS ============================= //
    this.technologyList = this._dataService.technologiesList.map((x, index) => {
      return {
        id: index,
        itemName: x.title,
      };
    });
    this.companyTechnologyList = this._dataService.techBaseList.map(
      (x, index) => {
        return {
          id: index,
          itemName: x.title,
        };
      }
    );
    this.mspList = this._dataService.categoryMSPList.map((x, index) => {
      return {
        id: index,
        itemName: x.title,
      };
    });
    this.businessModelList = this._dataService.businessModelList.map(
      (x, index) => {
        return {
          id: index,
          itemName: x.title,
        };
      }
    );
    this.residentAvaibleList = this._dataService.residentOfParkList.map(
      (x, index) => {
        return {
          id: index,
          itemName: x.title,
        };
      }
    );
    // ============== DROPDOWN SETTINGS ============================= //
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

    // ============== GET CURRENT FORM ============================= //
    this._formService.getForm().subscribe((form) => {
      this._stepperForm = form;
    });

    // ============== SET CURRENT FORM ============================= //
    this.stepTwoForm = this._formBuilder.group({
      companyTechnology: '',
      isCompanyMSP: 0,
      technologies: '',
      mspCategory: '',
      businessModel: [],
      residentList: [],
    });

    if (!this._stepperForm?.isNew) {
      this.stepTwoForm.patchValue({
        companyTechnology: this._stepperForm?.form?.companyTechnology,
        isCompanyMSP: this._stepperForm?.form?.isCompanyMSP,
        technologies: this._stepperForm?.form?.technologies,
        mspCategory: this._stepperForm?.form?.mspCategory,
        businessModel: this._stepperForm?.form?.businessModel,
        residentList: this._stepperForm?.form?.residentList,
      });
    }
  }
}
