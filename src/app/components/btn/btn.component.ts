import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {

  @Input() btnType: 'button' | 'submit' | 'reset' = 'button'
  @Input() btnColor: 'success' | 'primary' | 'red' = 'primary'

  ngOnInit(): void {

  }

  get colors() {
    return {
      'bg-success-600': this.btnColor === 'success',
      'hover:bg-success-800': this.btnColor === 'success',
      'focus:ring-success-300': this.btnColor === 'success',
      'bg-primary-700': this.btnColor === 'primary',
      'hover:bg-primary-800': this.btnColor === 'primary',
      'focus:ring-primary-300': this.btnColor === 'primary',
      'bg-red-700': this.btnColor === 'red',
      'hover:bg-red-800': this.btnColor === 'red',
      'focus:ring-red-300': this.btnColor === 'red',
    }
  }
}
