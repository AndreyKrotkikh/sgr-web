import { Component, OnInit } from '@angular/core';
import { LayoutService } from './shared/services/layout.service';

@Component({
  selector: 'app-public',
  styleUrls: ['./public.component.scss'],
  templateUrl: 'public.component.html'
})

export class PublicComponent implements OnInit {
  public isShow: boolean = false;

  constructor(private _layoutService: LayoutService) { }

  ngOnInit() {
    this._layoutService.isMenuShow$.subscribe(newState => {
      this.isShow = newState;
    })
  }
}
