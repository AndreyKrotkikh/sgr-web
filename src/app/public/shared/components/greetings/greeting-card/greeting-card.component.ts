import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-greeting-card',
  styleUrls: ['./greeting-card.component.scss'],
  template: `
    <div class="greetings__card">
      <div class="greetings__card-img">
        <img [src]=img />
      </div>
      <div class="greetings__card-information">
        <h2 class="greetings__card-title">{{ title }}</h2>
        <p class="greetings__card-subtitle">{{ subTitle }}</p>

        <p class="greetings__card-description">
          {{ description }}
        </p>
      </div>
    </div>
  `,
})
export class GreetingCardComponent implements OnInit {
  @Input()
  greetingType: string = '';

  @Input()
  title: string = '';

  @Input()
  subTitle: string = '';

  @Input()
  description: string = '';

  @Input()
  img: string = '';


  constructor(private _router: Router) {}

  ngOnInit() {}

  public navigateToPage() {
    this._router.navigate([`${this.greetingType}`]);
  }
}
