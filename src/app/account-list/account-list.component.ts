import { AccountService } from "./../services/account.service";
import { Component, OnInit } from "@angular/core";
import { GlobalService } from '../global.service';

@Component({
  selector: "app-account-list",
  templateUrl: "./account-list.component.html",
  styleUrls: ["./account-list.component.scss"]
})
export class AccountListComponent implements OnInit {
  dataSource: any = [];
  displayColumns = [
    'id',
    "accountDescription",
    "accountHolderName",
    "accountHolderPhoneNumber",
    "accountNumber",
    "action"
  ];
  constructor(private accountService: AccountService,
    private globalService:GlobalService
    ) {
    this.globalService.setLayout({ allowFooter: true, pageTitle: 'List Of Accounts' });


  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.accountService.getAllAccount().subscribe((x: any) => {
      console.log('get all accounts',x);
      this.dataSource = x;
    });
  }
}
