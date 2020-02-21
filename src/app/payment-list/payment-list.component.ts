import { PaymentService } from "./../services/payment.service";
import { Component, OnInit } from "@angular/core";
import { GlobalService } from "../global.service";

@Component({
  selector: "app-payment-list",
  templateUrl: "./payment-list.component.html",
  styleUrls: ["./payment-list.component.scss"]
})
export class PaymentListComponent implements OnInit {
  isDetail = false;
  dataSource: any = [];
  displayColumns = [
    "id",
    "sourceAccountNumber",
    "destinationAccountNumber",
    "amount",
    "currencyCode",
    "paymentDescription",
    "action"
  ];
  constructor(
    private paymentService: PaymentService,
    private globalService: GlobalService
  ) {
    this.globalService.setLayout({
      allowFooter: true,
      pageTitle: "List Of Payments"
    });
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.paymentService.getAllPayments().subscribe((x: any) => {
      console.log("details", x);
      this.dataSource = x;
    });
  }
  onDetailClicked() {
    this.globalService.setLayout({
      allowFooter: true,
      pageTitle: "Detail Of  Payment By Id"
    });
  }
}
