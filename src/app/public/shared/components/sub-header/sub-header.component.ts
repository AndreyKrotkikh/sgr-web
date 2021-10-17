import { CurrentPageInterface } from './../../types/current-page.interface';
import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sub-header',
  styleUrls: ['./sub-header.component.scss'],
  template: `
  <h1>{{currentPageConfig?.title}}</h1>
  <span>{{currentPageConfig?.subTitle}}</span>
  `
})

export class SubHeaderComponent implements OnInit {

  public currentPageConfig!: CurrentPageInterface;

  constructor(private _layoutInterface: LayoutService) {
  }

  ngOnInit() {
    this._layoutInterface.currentPageConfig$.subscribe(value => {
      this.currentPageConfig = value;
    })
  }
}
