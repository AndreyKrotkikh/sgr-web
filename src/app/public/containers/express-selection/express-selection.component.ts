import {
  DropdownInterface,
  DropdownInterfaceMilti,
} from './../../shared/types/data/dropdown-interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '../../shared/services/form.service';
import { LayoutService } from '../../shared/services/layout.service';
import { SGRDataService } from '../../shared/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-express-selection',
  styleUrls: ['./express-selection.component.scss'],
  templateUrl: './expres-selection.component.html',
})
export class ExpressSelectionComponent implements OnInit {
  // Form
  public expressForm!: FormGroup;

  // Dropdown data
  public marketList: DropdownInterfaceMilti[] = [];
  public technologiesList: DropdownInterfaceMilti[] = [];
  public servicesList: DropdownInterface[] = [];
  public businessModelList: DropdownInterfaceMilti[] = [];

  public dropdownSettings: any = [];

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _layoutService: LayoutService,
    private _dataService: SGRDataService,
    private _formService: FormService
  ) {}

  ngOnInit() {
    this._layoutService.setCurrentPageConfig({
      title: 'Экспресс-подбор',
      subTitle: 'Быстрый подбор сервисов, за несколько кликов',
    });
    this._formService.resetAll();
    this.initValue();
  }

  public cancel(): void {
    this._router.navigate(['/']);
  }

  onSubmit() {
    console.log(this.expressForm.value);
    let mappedData = this.expressForm.value;
    this._formService.setExpressForm({ type: 'express', form: mappedData });
    this._router.navigate(['/recommendation']);
  }

  private initValue(): void {
    this.expressForm = this._formBuilder.group({
      market: [],
      creationDate: '',
      technologies: [],
      services: '',
      businessModel: [],
    });

    this.businessModelList = this._dataService.businessModelList.map(
      (x, index) => {
        return {
          id: index,
          itemName: x.title,
        };
      }
    );
    this.marketList = this._dataService.marketList.map((x, index) => {
      return {
        id: index,
        itemName: x.title,
      };
    });
    this.technologiesList = this._dataService.technologiesList.map(
      (x, index) => {
        return {
          id: index,
          itemName: x.title,
        };
      }
    );
    this.servicesList = this._dataService.serviceList;

    this.dropdownSettings = {
      text: 'Выберите',
      enableSearchFilter: false,
    };
  }

  get market() {
    return this.expressForm.get('market');
  }

  get creationDate() {
    return this.expressForm.get('creationDate');
  }

  get technologies() {
    return this.expressForm.get('technologies');
  }

  get services() {
    return this.expressForm.get('services');
  }

  get businessModel() {
    return this.expressForm.get('businessModel');
  }
}
