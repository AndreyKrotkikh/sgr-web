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

  constructor() { }

  ngOnInit() { }
}
