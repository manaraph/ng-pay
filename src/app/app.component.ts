import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from './models/credit-card.model';
import { PaymentService } from './services/payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-pay';
  // toasterConfig: ToasterConfig;
  creditCard$: Observable<CreditCard>;

  constructor(private paymentService: PaymentService) {
    // this.toasterConfig = new ToasterConfig({
    //   showCloseButton: true,
    //   tapToDismiss: true,
    //   positionClass: 'toast-top-full-width',
    //   timeout: 3000
    // });
    this.creditCard$ = this.paymentService.data$;
  }

  ngOnInit() {
    this.creditCard$.subscribe((data) => {});
  }
}
