import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatMenuModule, MatListModule, MatTableModule, MatSortModule, MatPaginatorModule, MatSelectModule } from '@angular/material';


@NgModule({
  declarations: [LoginComponent],
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
     MatSelectModule
  ]
})
export class AdminModule { }
