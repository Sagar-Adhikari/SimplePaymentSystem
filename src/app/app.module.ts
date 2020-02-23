import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { FormsModule }   from '@angular/forms';
// import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule, MatInputModule, MatToolbarModule, MatSidenavModule, MatNativeDateModule,
  MatDatepickerModule, MatSelectModule, MatButtonModule, MatProgressBarModule,
  MatSliderModule, MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule,
  MatIconModule, MatListModule, MatMenuModule
} from '@angular/material';
import { CurrencyComponent } from './currency/currency.component';
import { PaymentComponent } from './payment/payment.component';
import { AccountListComponent } from './account-list/account-list.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { LoginComponent } from './admin/components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    CurrencyComponent,
    PaymentComponent,
    AccountListComponent,
    PaymentListComponent,

  ],
  imports: [AdminModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
     MatPaginatorModule,
     MatSelectModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
