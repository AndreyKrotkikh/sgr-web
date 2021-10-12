import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class LayoutService {

  public isMenuShow$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public setMenuShow(value: boolean) {
    this.isMenuShow$.next(value);
  }
}
