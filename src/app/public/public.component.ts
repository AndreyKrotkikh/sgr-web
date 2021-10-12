import { Component, OnInit } from '@angular/core';
import { LayoutService } from './shared/services/layout.service';

@Component({
  selector: 'app-public',
  styleUrls: ['./public.component.scss'],
  templateUrl: 'public.component.html'
})

export class PublicComponent implements OnInit {
  public isShow: boolean = false;

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.layoutService.isMenuShow$.subscribe(newState => {
      this.isShow = newState;
    })
  }
}
