import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  paymentForm: FormGroup;
  message = '';
  successful = false;
  loading = false;
  today = new Date();
  currentMonth = this.today.getMonth() + 1;
  currentYear = this.today.getFullYear();

  constructor(
    private form: FormBuilder,
  ) {
    this.paymentForm = this.form.group({
      amount: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      cardHolder: ['', [Validators.required,Validators.minLength(1),Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
      creditCardNumber: ['', [Validators.required,Validators.minLength(16),Validators.min(1000000000000000),Validators.max(9999999999999999)]],
      expirationMonth: ['', [Validators.required,Validators.minLength(1),Validators.maxLength(2),Validators.min(this.currentMonth),Validators.max(12)]],
      expirationYear: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.min(this.currentYear),Validators.max(9999)]],
      securityCode: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(3),Validators.max(999)]]
    });
   }

  getYear(yearsAhead: number): number[] {
    return [...Array(yearsAhead).keys()].map(i => this.currentYear + i);
  }

  getMonths() {
    return [
      { name: 'Jan', value: '01' },
      { name: 'Feb', value: '02' },
      { name: 'Mar', value: '03' },
      { name: 'Apr', value: '04' },
      { name: 'May', value: '05' },
      { name: 'Jun', value: '06' },
      { name: 'Jul', value: '07' },
      { name: 'Aug', value: '08' },
      { name: 'Sep', value: '09' },
      { name: 'Oct', value: '10' },
      { name: 'Nov', value: '11' },
      { name: 'Dec', value: '12' },
    ];
  }

  makePayment() {
  }
}
