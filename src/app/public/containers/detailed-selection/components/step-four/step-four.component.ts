import { DropdownInterfaceMilti } from '../../../../shared/types/data/dropdown-interface';
import { Component, OnInit } from '@angular/core';
import { SGRDataService } from 'src/app/public/shared/services/data.service';
import { DropdownInterface } from 'src/app/public/shared/types/data/dropdown-interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
})
export class StepFourComponent implements OnInit {
  // Form
  public stepOneForm!: FormGroup;

  public ocvdList: DropdownInterfaceMilti[] = [];
  public dropdownSettings: any = [];

  constructor(
    private _dataService: SGRDataService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.dropdownSettings = {
      text: 'Выберите',
      singleSelection: true,
      enableSearchFilter: true,
    };

    this._dataService.getOCVDList().subscribe((resp) => {
      this.ocvdList = resp.data.map((x: { group: string; name: string }) => {
        return {
          id: x.group,
          itemName: `${x.group} ${x.name}`,
        };
      });
    });
  }


}
