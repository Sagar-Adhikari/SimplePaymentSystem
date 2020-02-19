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
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    CurrencyComponent,
    PaymentComponent
  ],
  imports: [
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
    MatListModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
