import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../shared/services/layout.service';
import { DropdownInterfaceMilti } from '../../shared/types/data/dropdown-interface';
import { SGRDataService } from '../../shared/services/data.service';
import { FormService } from '../../shared/services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'learning.component',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss'],
})
export class LearningComponent implements OnInit {
  // Form
  public learningForm!: FormGroup;

  // Dropdown data
  public marketList: DropdownInterfaceMilti[] = [];
  public fondList: DropdownInterfaceMilti[] = [];
  public technologiesList: DropdownInterfaceMilti[] = [];
  public stageList: DropdownInterfaceMilti[] = [];
  public servicesList: DropdownInterfaceMilti[] = [];
  public businessModelList: DropdownInterfaceMilti[] = [];

  constructor(
    private _layoutService: LayoutService,
    private _dataService: SGRDataService,
    private _router: Router,
    private _formService: FormService,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this._layoutService.setCurrentPageConfig({
      title: 'Дообучение модели',
      subTitle:
        'Повышайте точность подбора, с помощью дополнительных данных, на основе историй стартапов',
    });

    this._initValue();
  }

  public cancel(): void {
    this._router.navigate(['/']);
  }

  onSubmit() {
    // send request to API
  }
  // const b_model = form.businessModel;
  // const found_date = new Array(
  //   formatDate(form.dateCreation, 'yyyy-MM-dd', 'en-US')
  // );
  // const market_type = form.market;
  // const service = new Array(form.service);
  // const tech_type = form.technologies;
  // const evo_stage = new Array(form.stage);
  // const techp_residents = form.residentList;
  // const inno_comp =  [...[], +form.isInnovation];
  // const msk_inno =  [...[], +form.isMemberMoscow];
  // const msp =  [...[], +form.isCompanyMSP];
  // const msp_cat = new Array(form.mspCategory);
  // const nav_stat =  [...[], +form.isPublished];
  // const skolk_inno =  [...[], +form.isSkolkovo];
  // const start_up =  [...[], +form.isStatup];
  // const tech_stack = form.companyTechnology;
  //'fond_type':1,
  // 'result':1

  private _initValue(): void {
    this.learningForm = this._formBuilder.group({
      market: [],
      dateCreation: ['', [Validators.required]],
      stage: '',
      technologies: [],
      residentList: [],
      isInnovation: 0,
      isMemberMoscow: 0,
      isCompanyMSP: 0,
      mspCategory: '',
      isPublished: 0,
      isSkolkovo: 0,
      isStatup: 0,
      companyTechnology: [],
      service: ['', [Validators.required]],
      businessModel: [],
      fond_type: 0,
      result: 0,
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
    this.stageList = this._dataService.stateCompanyList.map((x, index) => {
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

    this.fondList = this._dataService.fondList;
  }

  get dateCreation() {
    return this.learningForm.get('dateCreation');
  }

  get service() {
    return this.learningForm.get('service');
  }

  // todo: всплывающее окно
  // подробное описание страницы.

  // todo: всплывающее окно
  // сообщение об успешном обучении
}

// update_to_send = {
//     'start_up': {
//         'service': ['Найти финансирование'],
//         'found_date': ['2021-06-01'],
//         'market_type': ['Healthcare', 'IndustrialTech'],
//         'tech_type': ['Биотехнологии'],
//         'tech_stack': ['ИТ, разработка ПО'],
//         'techp_residents': ['Технопарк "Сколково"'],
//         'b_model': ['B2C'],
//         'evo_stage': ['Посевная'],
//         'skolk_inno': [1],
//         'msk_inno': [1],
//         'nav_stat': [1],
//         'inno_comp': [1],
//         'start_up': [1],
//         'msp': [1],
//         'msp_cat': ['ИП Микро'],
//         'fond_type':1,
//         'result':1
//     }
// }
// 'result':1 вот это ещё поле нужно, 1 - успех, 0 - не успех
