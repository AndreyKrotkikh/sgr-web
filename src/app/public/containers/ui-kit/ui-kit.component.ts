import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../shared/services/layout.service';

@Component({
  selector: 'ui-kit',
  styleUrls: ['./ui-kit.component.scss'],
  templateUrl: './ui-kit.component.html',
})
export class UIKitComponent implements OnInit {
  public dropdownList = [
    { id: 1, itemName: 'India' },
    { id: 2, itemName: 'Singapore' },
    { id: 3, itemName: 'Australia' },
    { id: 4, itemName: 'Canada' },
    { id: 5, itemName: 'South Korea' },
    { id: 6, itemName: 'Germany' },
    { id: 7, itemName: 'France' },
    { id: 8, itemName: 'Russia' },
    { id: 9, itemName: 'Italy' },
    { id: 10, itemName: 'Sweden' },
  ];
  public selectedItems =[
    { id: 2, itemName: 'Singapore' },
    { id: 3, itemName: 'Australia' },
    { id: 4, itemName: 'Canada' },
    { id: 5, itemName: 'South Korea' },
  ];
  public dropdownSettings = {};

  onItemSelect(item: any) {
  }
  OnItemDeSelect(item: any) {
  }
  onSelectAll(items: any) {
  }
  onDeSelectAll(items: any) {
  }

  constructor(private _layoutService: LayoutService) {}

  ngOnInit() {
    this._layoutService.setCurrentPageConfig({
      title: 'UI KIT',
      subTitle: 'На этой странице представлен UI KIT',
    });


    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Countries',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class',
    };
  }
}
