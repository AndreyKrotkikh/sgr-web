import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'plan-step',
  styleUrls: ['./plan-step.component.scss'],
  templateUrl: './plan-step.component.html'
})

export class PlanStepComponent implements OnInit {
  @Input()
  stepName!: string;

  @Input()
  serviceName!: string;

  @Input()
  comment!: string;

  @Input()
  date!: string;

  @Input()
  actionURL!: string;

  constructor() { }

  ngOnInit() { }

  public openService() {
    window.open(this.actionURL, '_blank');
  }
}
