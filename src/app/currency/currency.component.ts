import { CurrencyService } from "./../services/currency.service";
import { Component, OnInit } from "@angular/core";
import { GlobalService } from "../global.service";

@Component({
  selector: "app-currency",
  templateUrl: "./currency.component.html",
  styleUrls: ["./currency.component.scss"]
})
export class CurrencyComponent implements OnInit {
  constructor(
    private currencyService: CurrencyService,
    private globalService: GlobalService
  ) {
    this.globalService.setLayout({
      allowFooter: true,
      pageTitle: "Currency Lists"
    });
  }

  lists: any = [];

  ngOnInit() {
    this.currencyService.getCurrency().subscribe((x: any) => {
      this.lists = x;
    });
  }
}
