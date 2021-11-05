import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation-card',
  styleUrls: ['./recommendation-card.component.scss'],
  templateUrl: './recommendation-card.component.html'
})

export class RecommendationCardComponent implements OnInit {
  @Input()
  name: string = '';

  @Input()
  type: string = '';

  @Input()
  rate: string = '';

  @Input()
  score: number = 0;

  @Input()
  url: string = '';

  constructor() { }

  ngOnInit() { }

  public goToService() {
    if (!this.url) {
      return;
    }
    window.open(this.url, '_blank');
  }

  public getScore(score: number): string {
    const percent = score * 100;
    let result: string = '';

    if (percent > 90) {
      return 'Лучший результат'
    }
    if (percent > 80 && percent < 90) {
      return 'Высокий'
    }
    if (percent > 50 && percent < 80) {
      return 'Средний'
    }
    if (percent < 50) {
      return 'Низкий'
    }

    return result;
  }
}
