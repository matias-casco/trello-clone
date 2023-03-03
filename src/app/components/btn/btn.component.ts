import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {

  @Input() btnType: 'button' | 'submit' | 'reset' = 'button'
  @Input() btnColor: 'success' | 'primary' | 'red' | 'gray-light'= 'primary'

  ngOnInit(): void {

  }

  get colors() {
    return {
      'text-white': this.btnColor === 'success' || this.btnColor === 'primary' || this.btnColor === 'red',
      'text-gray-700': this.btnColor === 'gray-light',
      'bg-success-600': this.btnColor === 'success',
      'hover:bg-success-800': this.btnColor === 'success',
      'focus:ring-success-300': this.btnColor === 'success',
      'bg-primary-700': this.btnColor === 'primary',
      'hover:bg-primary-800': this.btnColor === 'primary',
      'focus:ring-primary-300': this.btnColor === 'primary',
      'bg-red-700': this.btnColor === 'red',
      'hover:bg-red-800': this.btnColor === 'red',
      'focus:ring-red-300': this.btnColor === 'red',
      'bg-gray-200': this.btnColor === 'gray-light',
      'hover:bg-gray-500': this.btnColor === 'gray-light',
      'focus:ring-gray-50': this.btnColor === 'gray-light',
    }
  }
}
