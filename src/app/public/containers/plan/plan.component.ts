import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { AttentionModalDialog } from '../../shared/components/modals/attention-modal-dialog/attention-modal-dialog.component';
import { LayoutService } from '../../shared/services/layout.service';

@Component({
  selector: 'plan',
  styleUrls: ['./plan.component.scss'],
  templateUrl: './plan.component.html',
})
export class PlanComponent implements OnInit {
  constructor(
    private titleService: Title,
    private _layoutService: LayoutService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this._layoutService.setCurrentPageConfig({
      title: 'План развития',
      subTitle: 'Ознакомьтесь с Вашим планом',
    });

    this.titleService.setTitle('Startup Guide | Мой план по развитию проекта');

    this._openAttention();
  }

  private _openAttention() {
    const dialogRef = this.dialog.open(AttentionModalDialog, {
      height: '390px',
      width: '485px',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
