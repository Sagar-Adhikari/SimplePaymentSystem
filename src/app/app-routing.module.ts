import { LoginComponent } from './admin/components/login/login.component';
import { PaymentListComponent } from "./payment-list/payment-list.component";
import { AccountListComponent } from "./account-list/account-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { CurrencyComponent } from "./currency/currency.component";
import { PaymentComponent } from "./payment/payment.component";

const routes: Routes = [
  { path: "admin", loadChildren: "./admin/admin.module#AdminModule" },
  {path:"",component:LoginComponent},

  {
    path: "account",
    component: AccountComponent
  },
  {
    path: "currency",
    component: CurrencyComponent
  },
  {
    path: "payment",
    component: PaymentComponent
  },
  {
    path: "account-list",
    component: AccountListComponent
  },
  {
    path: "account/:id",
    component: AccountComponent
  },
  {
    path: "payment-list",
    component: PaymentListComponent
  },
  {
    path: "payment/:id",
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
