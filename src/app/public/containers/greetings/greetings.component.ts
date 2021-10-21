import { MatDialog } from '@angular/material/dialog';
import { LayoutService } from '../../shared/services/layout.service';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/services/localstorage.service';
import { FormService } from '../../shared/services/form.service';
import { DraftModalDialog } from '../../shared/components/modals/draft-modal-dialog/draft-modal-dialog.component';
import { DetailedFormInterface } from '../../shared/types/common/detailed-form.interface';
import { Router } from '@angular/router';
import { ExpressFormInterface } from '../../shared/types/common/express-form.interface';

@Component({
  selector: 'app-greetings',
  styleUrls: ['./greetings.component.scss'],
  templateUrl: 'greetings.component.html',
})
export class GreetingsComponent implements OnInit {
  private _detailedFormDraft!: DetailedFormInterface;
  private _expressFormDraft!: ExpressFormInterface;

  constructor(
    private _layoutService: LayoutService,
    private _localstorageService: LocalStorageService,
    private _router: Router,
    private _formService: FormService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this._layoutService.setCurrentPageConfig({
      title: 'Подбор сервиса',
      subTitle: 'Подберите сервисы за несколько кликов',
    });
  }

  onExpress() {
    this._expressFormDraft = this._localstorageService.getExpressDraft();
    if (this._expressFormDraft) {
      this.openExpressDialog();
    } else {
      this._router.navigate(['/express']);
    }
  }

  onDetailed() {
    this._detailedFormDraft = this._localstorageService.getDetailedDraft();
    if (this._detailedFormDraft) {
      this.openDetailedDialog();
    } else {
      this._router.navigate(['/detailed']);
    }
  }

  openDetailedDialog() {
    const dialogRef = this.dialog.open(DraftModalDialog, {
      height: '390px',
      width: '485px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result === 'edit') {
        this._formService.setDetailedForm(this._detailedFormDraft);
        this._router.navigate(['/detailed']);
      } else if (result === 'new') {
        this._formService.resetAll();
        this._formService.initDetailedForm();
        this._router.navigate(['/detailed']);
      } else {
        return;
      }
    });
  }

  openExpressDialog() {
    const dialogRef = this.dialog.open(DraftModalDialog, {
      height: '390px',
      width: '485px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      if (result === 'edit') {
        this._formService.setExpressForm(this._expressFormDraft);
        this._router.navigate(['/express']);
      } else if (result === 'new') {
        this._formService.resetAll();
        this._formService.initExpressForm();
        this._router.navigate(['/express']);
      } else {
        return;
      }
    });
  }
}
