import { DropdownInterfaceMilti } from '../../../../shared/types/data/dropdown-interface';
import { Component, OnInit } from '@angular/core';
import { SGRDataService } from 'src/app/public/shared/services/data.service';
import { DropdownInterface } from 'src/app/public/shared/types/data/dropdown-interface';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DetailedFormInterface } from 'src/app/public/shared/types/common/detailed-form.interface';
import { FormService } from 'src/app/public/shared/services/form.service';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
})
export class StepFourComponent implements OnInit {
  // Form
  public stepFourForm!: FormGroup;
  public patentList!: FormArray;
  public productList!: FormArray;

  private _stepperForm!: DetailedFormInterface;

  constructor(
    private _formService: FormService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.initValue();
    this.formUpdate();
  }

  public getProducts() {
    return (this.stepFourForm.get('productList') as FormArray).controls;
  }

  public getPatents() {
    return (this.stepFourForm.get('patentList') as FormArray).controls;
  }

  public removePatent(index: number) {
    this.patentList.removeAt(index);
  }

  public removeProduct(index: number) {
    this.productList.removeAt(index);
  }

  public addPatent(): void {
    this.patentList = this.stepFourForm.get('patentList') as FormArray;
    this.patentList.push(this.createPatentItem());
  }

  public addProduct(): void {
    this.productList = this.stepFourForm.get('productList') as FormArray;
    this.productList.push(this.createProductItem());
  }

  private formUpdate() {
    this.stepFourForm.valueChanges.subscribe((changedForm) => {
      const updatedForm: DetailedFormInterface = {
        ...this._stepperForm,
        isNew: false,
        form: {
          ...this._stepperForm.form,
          patentList: changedForm.patentList,
          productList: changedForm.productList
        },
      };

      this._formService.setDetailedForm(updatedForm);
    });
  }

  private createPatentItem(): FormGroup {
    return this._formBuilder.group({
      name: '',
    });
  }

  private createProductItem(): FormGroup {
    return this._formBuilder.group({
      name: '',
    });
  }

  private initValue(): void {
    // ============== GET CURRENT FORM ============================= //
    this._formService.getForm().subscribe((form) => {
      this._stepperForm = form;
    });

    // ============== SET CURRENT FORM ============================= //
    this.stepFourForm = this._formBuilder.group({
      patentList: this._stepperForm.isNew
        ? this._formBuilder.array([])
        : this._formBuilder.array(this._stepperForm.form.patentList),
      productList: this._stepperForm.isNew
        ? this._formBuilder.array([])
        : this._formBuilder.array(this._stepperForm.form.productList),
    });
  }
}
