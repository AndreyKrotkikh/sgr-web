import { DropdownInterface } from './../../../types/data/dropdown-interface';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SGRDropdownComponent),
  multi: true,
};

@Component({
  selector: 'sgr-dropdown',
  styleUrls: ['./sgr-dropdown.component.scss'],
  templateUrl: './sgr-dropdown.component.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class SGRDropdownComponent implements OnInit, ControlValueAccessor {
  @Input() options: DropdownInterface[] = [];
  @Input() selected!: number;
  @Input() className!: string;
  @Input() placeholder!: string;
  @Input() isReadOnly = false;
  @Output() optSelect = new EventEmitter();
  isOpen = false;
  selectedOption!: any;

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  isSelectedValue!: boolean;
  key!: string;
  isFocused!: boolean;

  ngOnInit() {
    if (this.selected) {
      this.placeholder = '';
      this.isOpen = false;
    }
  }

  @HostListener('focus')
  focusHandler() {
    this.selected = 0;
    this.isFocused = true;
  }

  @HostListener('focusout')
  focusOutHandler() {
    this.isFocused = false;
  }

  @HostListener('document:keydown', ['$event'])
  keyPressHandle(event: KeyboardEvent) {
    if (this.isFocused) {
      this.key = event.code;
      switch (this.key) {
        case 'Space':
          this.isOpen = true;
          break;
        case 'ArrowDown':
          if (this.options.length - 1 > this.selected) {
            this.selected = this.selected + 1;
          }
          break;
        case 'ArrowUp':
          if (this.selected > 0) {
            this.selected = this.selected - 1;
          }
          break;
        case 'Enter':
          if (this.selected > 0) {
            this.isSelectedValue = true;
            this.isOpen = false;
            this.onChangeCallback(this.selected);
            this.optSelect.emit(this.options[this.selected]);
          }
          break;
      }
    }
  }

  /**
   * option selection
   * @param {string} selectedOption - text
   * @param {number} idx - current index of item
   * @param {any} event - object
   */
  optionSelect(selectedOption: string, idx: any, e: any) {
    e.stopPropagation();
    this.selected = idx;
    this.isSelectedValue = true;
    // this.placeholder = '';
    this.isOpen = false;
    this.onChangeCallback(this.selected);
    this.optSelect.emit(selectedOption);
  }

  toggle(e: any) {
    e.stopPropagation();
    // close all previously opened dropdowns, before open
    const allElems = document.querySelectorAll('.dropdown-wrapper');
    for (let i = 0; i < allElems.length; i++) {
      allElems[i].classList.remove('is-open');
    }
    this.isOpen = !this.isOpen;
    if (this.selected >= 0) {
      document.querySelector('#li' + this.selected)!.scrollIntoView(true);
    }
  }

  @HostListener('document: click', ['$event'])
  onClick() {
    this.isOpen = false;
  }

  /**
   * Method implemented from ControlValueAccessor and set default selected value
   * @param {*} obj
   * @memberof DropdownComponent
   */
  writeValue(obj: any): void {
    if (obj && obj !== '') {
      this.isSelectedValue = true;
      this.selected = obj;
    } else {
      this.isSelectedValue = false;
    }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
