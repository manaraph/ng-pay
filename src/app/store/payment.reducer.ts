import { Action, createReducer, on } from '@ngrx/store';
import { CreditCard } from '../models/credit-card.model';
import * as creditCardPaymentActions from './payment.actions';

export const featureKey = 'creditCard';
export const currentDate = new Date();

export const initialCreditCardState: CreditCard = {
  creditCardNumber: '',
  cardHolder: '',
  expirationDate: currentDate,
  securityCode: '',
  amount: 0,
}

export interface PaymentState {
  isLoading?: boolean;
  error?: any;
  creditCardData?: CreditCard;
}

export const initialState: PaymentState = {
  isLoading: false,
  error: null,
  creditCardData: initialCreditCardState
};


const featureReducer = createReducer(
  initialState,
  on(creditCardPaymentActions.load, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(creditCardPaymentActions.loadSuccess, (state, { creditCardData }) => {
    return  {
      ...state,
      creditCardData,
      isLoading: false,
      error: null
    };
  }),
  on(creditCardPaymentActions.payWithCardSuccess, (state, { creditCardData }) => ({
    ...state,
    creditCardData,
    isLoading: false,
    error: null
  }))
);

export function reducer(state: PaymentState, action: Action) {
  return featureReducer(state, action);
}
