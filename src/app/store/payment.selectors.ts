import { createSelector } from '@ngrx/store';
import { featureKey, PaymentState } from "./payment.reducer";

export const moduleFeatureKey = 'payment';

export const selectCreditCardState = (state): PaymentState => state[moduleFeatureKey][featureKey];
const getPaymentState = createSelector(selectCreditCardState, state => state);
const getCreditCardState = createSelector(selectCreditCardState, state => state.creditCardData);

export const CreditCardQuery = {
  selectCreditCardState,
  getCreditCardState,
  getPaymentState
};
