import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  concatMap,
  map,
  mergeMap,
  withLatestFrom,
} from 'rxjs/operators';
import { PaymentService } from '../services/payment.service';
import {
  payWithCard,
  payWithCardError,
  payWithCardSuccess,
} from './payment.actions';
import { SwalMixinService } from 'src/app/Services/swal-mixin.service';
import { Router } from '@angular/router';

@Injectable()
export class CreditCardPaymentStoreEffects {
  constructor(
    private dataService: PaymentService,
    private swalService: SwalMixinService,
    private router: Router,
    private actions$: Actions
  ) {}

  proceedPayment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(payWithCard),
      concatMap((action) => {
        return of(action).pipe(withLatestFrom());
      }),
      mergeMap(([action]) => {
        const { paymentData } = action;
        let returnedAction;
        return this.dataService.makePayment(paymentData).pipe(
          map((response) => {
            if (response.body.status === 'success') {
              this.swalService.success('Transaction successful');
              this.router.navigate(['']);
              returnedAction = payWithCardSuccess({
                creditCardData: paymentData,
              });
            } else {
              this.swalService.error(
                'Transaction Failed please try again later'
              );

              returnedAction = payWithCardError({
                error: 'Something went wrong please try again',
              });
            }
            return returnedAction;
          }),
          catchError((error) => of(payWithCardError({ error })))
        );
      })
    )
  );
}
