import { LayoutService } from '../../shared/services/layout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greetings',
  styleUrls: ['./greetings.component.scss'],
  templateUrl: 'greetings.component.html'
})

export class GreetingsComponent implements OnInit {
  constructor(private _layoutService: LayoutService) { }

  ngOnInit() {
    this._layoutService.setCurrentPageConfig({
      title: 'Подбор сервиса',
      subTitle: 'Подберите сервисы за несколько кликов'
    })
  }
}
