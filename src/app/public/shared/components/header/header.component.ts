import { LayoutService } from './../../services/layout.service';
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

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {}

  public toggleNavbar(): void {
    this.isShow = !this.isShow;
    this.layoutService.setMenuShow(this.isShow);
  }
}
