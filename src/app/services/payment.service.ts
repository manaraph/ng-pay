import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor() {}

  makePayment(paymentDetails): Observable<any> {
    const response = {
      status: 'success',
      message: 'Transaction successful!',
      data: paymentDetails,
    };
    return of(new HttpResponse({ status: 200, body: response }));
  }
}
