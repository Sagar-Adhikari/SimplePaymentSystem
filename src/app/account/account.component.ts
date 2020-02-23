import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { AccountService } from "../services/account.service";
import { MatSnackBar } from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { GlobalService } from "../global.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.scss"]
})
export class AccountComponent implements OnInit {
  accountForm: FormGroup;
  private accountId = undefined;

  constructor(
    private accountService: AccountService,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private globalService: GlobalService
  ) {
    this.globalService.setLayout({
      allowFooter: true,
      pageTitle: "Create Account/Details"
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.accountId = params["id"] ? params["id"] : undefined;
      if (this.accountId) {
        this.accountForm = new FormBuilder().group({
          accountDescription: ["", Validators.required],
          accountHolderName: [
            ,
            Validators.compose([Validators.required, Validators.email])
          ],
          accountHolderPhoneNumber: ["", Validators.required],
          accountNumber: ["", Validators.required]
        });
        this.accountService
          .getAccountDetailsById(this.accountId)
          .subscribe((x: any): any => {
            this.accountForm.controls["accountDescription"].setValue(
              x.accountDescription
            );
            this.accountForm.controls["accountHolderName"].setValue(
              x.accountHolderName
            );
            this.accountForm.controls["accountHolderPhoneNumber"].setValue(
              x.accountHolderPhoneNumber
            );
            this.accountForm.controls["accountNumber"].setValue(
              x.accountNumber
            );
          });
      } else {
        this.accountForm = new FormBuilder().group({
          accountDescription: [""],
          accountHolderName: [, Validators.compose([Validators.required])],
          accountHolderPhoneNumber: ["", Validators.required],
          accountNumber: [
            0,
            Validators.compose([
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(6)
            ])
          ]
        });
      }
    });
  }

  onSubmit({ value, valid }: { value: any; valid: boolean }) {
    if (valid) {
      if (!this.accountId) {
        this.accountService
          .addAccountDetails(
            value.accountDescription,
            value.accountHolderName,
            value.accountHolderPhoneNumber,
            value.accountNumber
          )
          .subscribe(x => {
            this.snackBar.open("Account Created Successfully!", undefined, {
              duration: 2000
            });
            this.router.navigate(["/account-list"]);
          });
      }
    } else {
      setTimeout(() => {
        window.location.reload();
      }, 1);
      this.router.navigate(["/account-list"]);
    }
  }
}
