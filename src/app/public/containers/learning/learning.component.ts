import { AttentionLearningModalDialog } from './../../shared/components/modals/attention-learning-modal-dialog/attention-learning-modal-dialog.component';
import { RecommendationService } from './../../shared/services/recommendation.service';
import { FormConverter } from './../../shared/tools/form-converter';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../shared/services/layout.service';
import { DropdownInterfaceMilti } from '../../shared/types/data/dropdown-interface';
import { SGRDataService } from '../../shared/services/data.service';
import { FormService } from '../../shared/services/form.service';
import { Router } from '@angular/router';
import { SuccessLearningModalDialog } from '../../shared/components/modals/success-learning-modal-dialog/success-learning-modal-dialog.component';

@Component({
  selector: 'learning.component',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss'],
})
export class LearningComponent implements OnInit {
  // Form
  public learningForm!: FormGroup;

  public isLoading: boolean = false;

  // Dropdown data
  public marketList: DropdownInterfaceMilti[] = [];
  public fondList: DropdownInterfaceMilti[] = [];
  public technologiesList: DropdownInterfaceMilti[] = [];
  public stageList: DropdownInterfaceMilti[] = [];
  public servicesList: DropdownInterfaceMilti[] = [];
  public businessModelList: DropdownInterfaceMilti[] = [];
  public residentAvaibleList: DropdownInterfaceMilti[] = [];

  public mspList: DropdownInterfaceMilti[] = [];
  public companyTechnologyList: DropdownInterfaceMilti[] = [];
  public technologyList: DropdownInterfaceMilti[] = [];

  constructor(
    private _layoutService: LayoutService,
    private _dataService: SGRDataService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _recommendationService: RecommendationService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this._layoutService.setCurrentPageConfig({
      title: 'Дообучение модели',
      subTitle:
        'Повышайте точность подбора, с помощью дополнительных данных, на основе историй стартапов',
    });

    this._initValue();
    this._openAttention();
  }

  public cancel(): void {
    this._router.navigate(['/']);
  }

  public isMSP(): boolean {
    return this.learningForm.value.isCompanyMSP === '1' ? true : false;
  }

  onSubmit() {
    this.isLoading = true;
    // send request to API
    const request = FormConverter.convertLearningForm(this.learningForm.value);
    this._recommendationService.updateLearn(request).subscribe((resp) => {
      this._openSuccess();
      this.isLoading = false;
    });
  }

  private _initValue(): void {
    this.learningForm = this._formBuilder.group({
      market: [], // +
      dateCreation: ['', [Validators.required]], // +
      stage: '', // +
      technologies: [], // +
      residentList: [], // +
      isInnovation: 0, // +
      isMemberMoscow: 0, // +
      isCompanyMSP: 0, // +
      mspCategory: '', // +
      isPublished: 0, // +
      isSkolkovo: 0, // +
      isStatup: 0, // +
      companyTechnology: [], // +
      service: ['', [Validators.required]], // +
      businessModel: [], // +
      fond_type: 0, // +
      result: 0, // +
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
    this.residentAvaibleList = this._dataService.residentOfParkList.map(
      (x, index) => {
        return {
          id: index,
          itemName: x.title,
        };
      }
    );
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

  private _openAttention() {
    const dialogRef = this.dialog.open(AttentionLearningModalDialog, {
      height: '390px',
      width: '485px',
    });

    dialogRef.afterClosed().subscribe(() => {});
  }

  private _openSuccess() {
    const dialogRef = this.dialog.open(SuccessLearningModalDialog, {
      height: '390px',
      width: '485px',
    });

    dialogRef.afterClosed().subscribe(() => {});
  }
}
