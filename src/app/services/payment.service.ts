import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { select, State, Store } from '@ngrx/store';
import { HttpResponse } from '@angular/common/http';
import { CreditCard } from '../models/credit-card.model';
import { load, payWithCard, payWithCardSuccess } from '../store/payment.actions';
import { CreditCardQuery } from '../store/payment.selectors';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  readonly data$: Observable<CreditCard>;

  constructor(private store: Store) {
    this.data$ = this.store.pipe(select(CreditCardQuery.getCreditCardState));
  }

  makePayment(paymentDetails): Observable<any> {
    const response = {
      status: 'success',
      message: 'Transaction successful!',
      data: paymentDetails,
    };
    return of(new HttpResponse({ status: 200, body: response }));
  }

  getCreditCardData() {
    this.store.dispatch(load());
  }

  initiatePayment(paymentData: CreditCard) {
    this.store.dispatch(payWithCard({paymentData}))
  }

  storeCard(creditCardData) {
    this.store.dispatch(payWithCardSuccess(creditCardData))
  }
}
