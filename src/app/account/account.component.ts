import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  accountForm: FormGroup;
  accountId = undefined;

  constructor(
    private accountService: AccountService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {

    this.accountForm = new FormBuilder().group({
      accountDescription: [''],
      accountHolderName: [, Validators.compose([Validators.required])],
      accountHolderPhoneNumber: ['', Validators.required],
      accountNumber: [0, Validators.required]
    });
  }

  onSubmit({ value, valid }: { value: any, valid: boolean }) {
    console.log(value);
    if (valid) {
      if (!this.accountId) {
        this.accountService.addAccountDetails(value.accountDescription, value.accountHolderName, value.accountHolderPhoneNumber, value.accountNumber).subscribe((x) => {
          console.log(x);
          if (x.success) {
            this.snackBar.open('User created successfully!', null, { duration: 2000 });
          } else {
            this.snackBar.open('Error! Something bad happen.', null, { duration: 2000 });
          }
          this.router.navigate(['/accountList']);

        });

      }
    }
  }

}
