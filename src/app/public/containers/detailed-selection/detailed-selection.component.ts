import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../shared/services/layout.service';

@Component({
  selector: 'app-detailed-selection',
  template: ``
})

export class DetailedSelectionComponent implements OnInit {
  constructor(private _layoutService: LayoutService) { }

  ngOnInit() {
    this._layoutService.setCurrentPageConfig({
      title: 'Точный подбор',
      subTitle: 'Подбор сервисов с высокой точностью'
    })
  }
}
