import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatMenuModule, MatListModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSelectModule } from '@angular/material';
import { RegisterComponent } from './components/register/register.component';
// import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
// import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
     MatSelectModule,
     RecaptchaModule.forRoot(),
     RecaptchaModule.forRoot(),
     RecaptchaFormsModule,
  ],
  exports:[LoginComponent]
})
export class AdminModule { }
