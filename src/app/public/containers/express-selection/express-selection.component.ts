import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../shared/services/layout.service';

@Component({
  selector: 'app-express-selection',
  template: ``
})

export class ExpressSelectionComponent implements OnInit {
  constructor(private _layoutService: LayoutService) { }

  ngOnInit() {
    this._layoutService.setCurrentPageConfig({
      title: 'Экспресс-подбор',
      subTitle: 'Быстрый подбор сервисов, за несколько кликов'
    })
  }
}