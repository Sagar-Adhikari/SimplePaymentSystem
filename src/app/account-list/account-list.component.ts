import { AccountService } from "./../services/account.service";
import { Component, OnInit } from "@angular/core";
import { GlobalService } from "../global.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.scss"]
})
export class AccountListComponent implements OnInit {
  dataSource: any = [];
  displayColumns = [
    "id",
    "accountDescription",
    "accountHolderName",
    "accountHolderPhoneNumber",
    "accountNumber",
    "action"
  ];
  constructor(
    private accountService: AccountService,
    private globalService: GlobalService,
    private snackBar: MatSnackBar
  ) {
    this.globalService.setLayout({
      allowFooter: true,
      pageTitle: "List Of Accounts"
    });
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.accountService.getAllAccount().subscribe((x: any) => {
      this.dataSource = x;
    });
  }

  onDetailClicked() {
    this.snackBar.open("details of each list by Id", null, { duration: 2000 });
  }
}
