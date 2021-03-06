import { AccountService } from "./../services/account.service";
import { CurrencyService } from "./../services/currency.service";
import { MatSnackBar } from "@angular/material";
import { PaymentService } from "./../services/payment.service";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Component, OnInit, ComponentFactoryResolver } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { GlobalService } from "../global.service";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"]
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  private paymentId = undefined;
  private currencyList = [];
  private accountList = [];
  private sourceAccountList = [];
  private destinationAccountList = [];
  arr = [];

  constructor(
    private paymentService: PaymentService,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private globalService: GlobalService,
    private currencyService: CurrencyService,
    private accountService: AccountService
  ) {
    this.globalService.setLayout({
      allowFooter: true,
      pageTitle: " Payments Register"
    });
  }

  ngOnInit() {
    this.getCurrency();
    this.getAccount();
    this.activatedRoute.params.subscribe(params => {
      this.paymentId = params["id"] ? params["id"] : undefined;
      if (this.paymentId) {
        this.paymentForm = new FormBuilder().group({
          amount: ["", Validators.required],
          currencyCode: [
            ,
            Validators.compose([Validators.required, Validators.email])
          ],
          destinationAccountNumber: [0, Validators.required],
          paymentDescription: ["", Validators.required],
          sourceAccountNumber: [0, Validators.required]
        });
        this.paymentService
          .getPaymentById(this.paymentId)
          .subscribe((x: any): any => {
            this.paymentForm.controls["amount"].setValue(x.amount);
            this.paymentForm.controls["currencyCode"].setValue(x.currencyCode);
            this.paymentForm.controls["destinationAccountNumber"].setValue(
              x.destinationAccountNumber
            );
            this.paymentForm.controls["paymentDescription"].setValue(
              x.paymentDescription
            );
            this.paymentForm.controls["sourceAccountNumber"].setValue(
              x.sourceAccountNumber
            );
          });
      } else {
        this.paymentForm = new FormBuilder().group({
          amount: [0, Validators.compose([Validators.required])],
          currencyCode: ["", Validators.compose([Validators.required])],
          destinationAccountNumber: [
            0,
            Validators.compose([
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(6)
            ])
          ],
          paymentDescription: ["", Validators.compose([Validators.required])],
          sourceAccountNumber: [
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
      if (!this.paymentId) {
        this.paymentService
          .addPaymentDetails(
            value.amount,
            value.currencyCode,
            value.destinationAccountNumber,
            value.paymentDescription,
            value.sourceAccountNumber
          )
          .subscribe(x => {
            this.snackBar.open("Payment Created Sucessfully", undefined, {
              duration: 2000
            });
            this.router.navigate(["/payment-list"]);
          });
      }
    }
    setTimeout(() => {
      window.location.reload();
    }, 1);
    this.router.navigate(["/payment-list"]);
  }

  getCurrency() {
    this.currencyService.getCurrency().subscribe((x: any) => {
      this.currencyList = x;
    });
  }

  getAccount() {
    this.accountService.getAllAccount().subscribe((x: any) => {
      x.forEach(element => {
        this.accountList.push(element.accountNumber);
      });
      this.sourceAccountList = [...this.accountList];
      this.destinationAccountList = [...this.accountList];
    });
  }

  onDestinationAccountNumberChanged($event) {
    this.sourceAccountList = [...this.accountList];
    const index = this.sourceAccountList.indexOf($event.value, 0);
    if (index == -1) return;

    this.sourceAccountList.splice(index, 1);
  }

  onSourceAccountNumberChanged($event) {
    this.destinationAccountList = [...this.accountList];
    const index = this.destinationAccountList.indexOf($event.value, 0);
    if (index == -1) return;

    this.destinationAccountList.splice(index, 1);
  }
}
