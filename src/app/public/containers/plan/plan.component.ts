import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LayoutService } from '../../shared/services/layout.service';

@Component({
  selector: 'plan',
  styleUrls: ['./plan.component.scss'],
  templateUrl: './plan.component.html',
})
export class PlanComponent implements OnInit {
  constructor(
    private titleService: Title,
    private _layoutService: LayoutService
  ) {}

  ngOnInit() {
    this._layoutService.setCurrentPageConfig({
      title: 'План развития',
      subTitle: 'Ознакомьтесь с Вашим планом',
    });

    this.titleService.setTitle('Startup Guide | Мой план по развитию проекта');
  }
}
