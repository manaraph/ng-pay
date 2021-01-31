import * as fromCreditCardPaymentStoreActions from './payment.actions';
import * as fromCreditCardPaymentStoreEffects from './payment.effects';
import * as fromCreditCardPaymentStoreSelectors from './payment.selectors';
import * as fromCreditCardPaymentStoreReducer from './payment.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { PaymentState } from './payment.reducer';

export {
    fromCreditCardPaymentStoreActions,
    fromCreditCardPaymentStoreEffects,
    fromCreditCardPaymentStoreSelectors,
    fromCreditCardPaymentStoreReducer
};

export interface paymentModuleState {
  [fromCreditCardPaymentStoreReducer.featureKey]: PaymentState;
}

export const initialModuleState: paymentModuleState = {
  [fromCreditCardPaymentStoreReducer.featureKey]: fromCreditCardPaymentStoreReducer.initialState,
};

export interface State {
  [fromCreditCardPaymentStoreSelectors.moduleFeatureKey]: paymentModuleState;
}

export const selectFeature = createFeatureSelector<State, paymentModuleState>(fromCreditCardPaymentStoreSelectors.moduleFeatureKey);

export const moduleReducers = new InjectionToken<ActionReducerMap<paymentModuleState>>(fromCreditCardPaymentStoreSelectors.moduleFeatureKey, {
  factory: () => ({
    [fromCreditCardPaymentStoreReducer.featureKey]: fromCreditCardPaymentStoreReducer.reducer,
  })
});

