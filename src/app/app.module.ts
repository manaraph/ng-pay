import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CreditCardPaymentStoreEffects } from './store/payment.effects';

import * as storeModuleConfiguration from './store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentService } from './services/payment.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreModule.forFeature(storeModuleConfiguration.fromCreditCardPaymentStoreSelectors.moduleFeatureKey, storeModuleConfiguration.moduleReducers),
    EffectsModule.forFeature([CreditCardPaymentStoreEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
    // StoreModule.forFeature(storeModuleConfiguration.fromCreditCardPaymentStoreSelectors.moduleFeatureKey, storeModuleConfiguration.moduleReducers),
  ],
  providers: [
    PaymentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
