import { createAction, props } from '@ngrx/store';
import { CreditCard } from '../models/credit-card.model';

export enum CreditCardPaymentActionType {
  LOAD_CREDIT_CARD = '[Payment] Load',
  LOAD_CREDIT_CARD_SUCCESS = '[Payment] Load Success',
  REFRESH = '[Payment] Refresh',
  PAY_WITH_CARD = '[Payment] Pay',
  PAY_WITH_CARD_SUCCESS = '[Payment] Payment Success',
  PAY_WITH_CARD_ERROR = '[Payment] Submit Success'
}

export const load = createAction(CreditCardPaymentActionType.LOAD_CREDIT_CARD);

export const loadSuccess = createAction(
  CreditCardPaymentActionType.LOAD_CREDIT_CARD_SUCCESS,
  props<{ creditCardData: CreditCard }>()
);

export const payWithCard = createAction(
  CreditCardPaymentActionType.PAY_WITH_CARD,
  props<{ paymentData: CreditCard }>()
);

export const payWithCardSuccess = createAction(
  CreditCardPaymentActionType.PAY_WITH_CARD_SUCCESS,
  props<{ creditCardData: CreditCard }>()
);

export const payWithCardError = createAction(
  CreditCardPaymentActionType.PAY_WITH_CARD_SUCCESS,
  props<{ error: string }>()
);


export const refresh = createAction(CreditCardPaymentActionType.REFRESH);

