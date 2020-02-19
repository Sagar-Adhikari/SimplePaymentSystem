import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { CurrencyComponent } from './currency/currency.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {
    path: 'account', component: AccountComponent
  },
  {
    path: 'currency', component: CurrencyComponent
  },
  {
    path: 'payment', component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
