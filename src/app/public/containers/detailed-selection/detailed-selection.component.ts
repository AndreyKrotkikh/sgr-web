import { StepperFormInterface } from './../../shared/types/common/stepper-form.interface';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../shared/services/layout.service';
import { SGRDataService } from '../../shared/services/data.service';
import { FormService } from '../../shared/services/form.service';
import { MatDialog } from '@angular/material/dialog';
import { DraftModalDialog } from '../../shared/components/modals/draft-modal-dialog/draft-modal-dialog.component';
import { LocalStorageService } from '../../shared/services/localstorage.service';
import { DetailedFormInterface } from '../../shared/types/common/detailed-form.interface';

@Component({
  selector: 'app-detailed-selection',
  styleUrls: ['./detailed-selection.component.scss'],
  templateUrl: 'detailed-selection.component.html',
})
export class DetailedSelectionComponent implements OnInit {
  public stepperConfig!: StepperFormInterface;

  private _formDraft!: DetailedFormInterface;

  constructor(
    private _layoutService: LayoutService,
    private _formService: FormService,
    private _localstorageService: LocalStorageService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this._layoutService.setCurrentPageConfig({
      title: 'Точный подбор',
      subTitle: 'Подбор сервисов с высокой точностью',
    });

    this._formService.stepper$.subscribe((stepper) => {
      this.stepperConfig = stepper;
    });

    this._formDraft = this._localstorageService.getDetailedDraft();
    if(this._formDraft) {
      this.openDialog();
    } else {
      this._formService.resetAll();
      this._formService.initDetailedForm();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DraftModalDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result === 'edit') {
        this._formService.setDetailedForm(this._formDraft);
      } else {
      }
    });
  }
}
