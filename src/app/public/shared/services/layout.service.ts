import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CurrentPageInterface } from '../types/current-page.interface';

@Injectable({ providedIn: 'root' })
export class LayoutService {
  //#region config & private vars
  private _currentPageIniitialValue = {
    title: 'Подбор сервиса',
    subTitle: 'Подберите сервисы за несколько кликов',
  };
  //#endregion

  //#region public vars
  public isMenuShow$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public currentPageConfig$: BehaviorSubject<CurrentPageInterface> =
    new BehaviorSubject<CurrentPageInterface>(this._currentPageIniitialValue);
  //#endregion

  constructor() {}

  //#region public methods
  public setMenuShow(value: boolean) {
    this.isMenuShow$.next(value);
  }

  public setCurrentPageConfig(value: CurrentPageInterface) {
    this.currentPageConfig$.next(value);
  }
  //#endregion
}
