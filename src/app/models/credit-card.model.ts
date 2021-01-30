export interface CreditCard {
  creditCardNumber: string;
  cardHolder: string;
  expirationDate: Date;
  securityCode?: string;
  amount: number;
}
