import { DropdownInterfaceMilti } from '../../../../shared/types/data/dropdown-interface';
import { Component, OnInit } from '@angular/core';
import { SGRDataService } from 'src/app/public/shared/services/data.service';
import { DropdownInterface } from 'src/app/public/shared/types/data/dropdown-interface';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DetailedFormInterface } from 'src/app/public/shared/types/common/detailed-form.interface';
import { FormService } from 'src/app/public/shared/services/form.service';
import { LocalStorageService } from 'src/app/public/shared/services/localstorage.service';

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
    private _formBuilder: FormBuilder,
    private _localstorageService: LocalStorageService
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

  public addPatent(init = ''): void {
    this.patentList = this.stepFourForm.get('patentList') as FormArray;
    this.patentList.push(this.createPatentItem(init));
  }

  public addProduct(init = ''): void {
    this.productList = this.stepFourForm.get('productList') as FormArray;
    this.productList.push(this.createProductItem(init));
  }

  private formUpdate() {
    this.stepFourForm.valueChanges.subscribe((changedForm) => {
      const updatedForm: DetailedFormInterface = {
        ...this._stepperForm,
        isNew: false,
        form: {
          ...this._stepperForm.form,
          patentList: changedForm.patentList,
          productList: changedForm.productList,
        },
      };

      this._localstorageService.setDetailedDraft(updatedForm);
      this._formService.setDetailedForm(updatedForm);
    });
  }

  private createPatentItem(init = ''): FormGroup {
    return this._formBuilder.group({
      name: init,
    });
  }

  private createProductItem(init = ''): FormGroup {
    return this._formBuilder.group({
      name: init,
    });
  }

  private initValue(): void {
    // ============== GET CURRENT FORM ============================= //
    this._formService.getForm().subscribe((form) => {
      this._stepperForm = form;
    });

    // ============== SET CURRENT FORM ============================= //
    this.stepFourForm = this._formBuilder.group({
      patentList: this._formBuilder.array([]),
      productList: this._formBuilder.array([]),
    });

    if (!this._stepperForm?.isNew) {
      this._stepperForm?.form?.patentList.forEach(patent => {
          this.addPatent(patent.name)
      });
      this._stepperForm?.form?.productList.forEach(product => {
        this.addProduct(product.name)
    });
    }
  }
}
