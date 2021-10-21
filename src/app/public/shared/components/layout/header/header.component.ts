import { Router } from '@angular/router';
import { LayoutService } from '../../../services/layout.service';
import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: 'header.component.html',
})
export class HeaderComponent implements OnInit {
  public isShow: boolean = false;

  constructor(private layoutService: LayoutService, private _router: Router) {}

  ngOnInit() {}

  public toggleNavbar(event: any): void {
    event.preventDefault();
    this.isShow = !this.isShow;
    this.layoutService.setMenuShow(this.isShow);
  }

  public onRegister() {
    window.open('https://startupguide.innoagency.ru/', '_blank');
  }
}
