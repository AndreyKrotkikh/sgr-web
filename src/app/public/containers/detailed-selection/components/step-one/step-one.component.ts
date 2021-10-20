import { DropdownInterfaceMilti } from './../../../../shared/types/data/dropdown-interface';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SGRDataService } from 'src/app/public/shared/services/data.service';
import { DropdownInterface } from 'src/app/public/shared/types/data/dropdown-interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/public/shared/services/form.service';
import { DetailedFormInterface } from 'src/app/public/shared/types/common/detailed-form.interface';
import { MatSelect } from '@angular/material/select';
import { LocalStorageService } from 'src/app/public/shared/services/localstorage.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
})
export class StepOneComponent implements OnInit, AfterViewInit {
  private readonly RELOAD_TOP_SCROLL_POSITION = 100;
  @ViewChild('ocvdSelect') selectOcvd!: MatSelect;

  // Form
  public stepOneForm!: FormGroup;

  public stageList: DropdownInterfaceMilti[] = [];
  public ocvdList: DropdownInterfaceMilti[] = [];
  public viewOcvdList: DropdownInterfaceMilti[] = [];

  public servicesList: DropdownInterfaceMilti[] = [];
  public marketList: DropdownInterfaceMilti[] = [];

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

  ngAfterViewInit() {
    this.selectOcvd.openedChange.subscribe(() => {
      this.registerPanelScrollEvent();
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  public onKey(target: any) {
    console.log('Search result: ', this.search(target.value));
  }

  public search(value: string) {
    let filter = value.toLowerCase();
    return this.ocvdList.filter((ocvd) =>
      ocvd.itemName.toLowerCase().startsWith(filter)
    );
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
          stage: changedForm.companyStage,
          market: changedForm.market,
        },
      };
      this._localstorageService.setDetailedDraft(updatedForm);
      this._formService.setDetailedForm(updatedForm);
    });
  }

  private registerPanelScrollEvent() {
    const panel = this.selectOcvd.panel.nativeElement;
    panel.addEventListener('scroll', (event: any) =>
      this.loadAllOnScroll(event)
    );
  }

  private loadAllOnScroll(event: any) {
    if (event.target.scrollTop > this.RELOAD_TOP_SCROLL_POSITION) {
      this.viewOcvdList = this.ocvdList;
    }
  }

  private initValue(): void {
    this._dataService.getOCVDList().subscribe((resp) => {
      this.ocvdList = resp.data.map((x: { group: string; name: string }) => {
        return {
          id: x.group,
          itemName: `${x.group} ${x.name}`,
        };
      });
      this.viewOcvdList = [...this.ocvdList.slice(0, 10)];
    });

    this.marketList = this._dataService.marketList.map((x, index) => {
      return {
        id: index,
        itemName: x.title,
      };
    });
    this.servicesList = this._dataService.serviceList.map((x, index) => {
      return {
        id: index,
        itemName: x.title,
      };
    });

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
      ocvd: '',
      creationDate: '',
      services: '',
      companyStage: '',
      market: [],
    });

    if (!this._stepperForm?.isNew) {
      this.stepOneForm.patchValue({
        market: this._stepperForm?.form?.market,
        companyStage: this._stepperForm?.form?.stage,
        services: this._stepperForm?.form?.service,
        creationDate: this._stepperForm?.form?.dateCreation,
        ocvd: this._stepperForm?.form?.ocvd,
      });
    }
  }
}
