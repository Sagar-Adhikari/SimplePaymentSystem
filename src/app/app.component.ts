import { Router } from "@angular/router";
import { Component, ɵCodegenComponentFactoryResolver } from "@angular/core";
import { GlobalService } from "./global.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "simplePaymentSystem";
  isClickedMenu: boolean = true;
  smallScreen: boolean = false;
  pageTitle = "Initial Title";

  allowFooter: true;

  constructor(private globalService: GlobalService, private router: Router) {
    this.globalService.pageTitle$.subscribe((x: any) => {
      console.log("page title", x);
      this.pageTitle = x.pageTitle;
      this.allowFooter = x.allowFooter;
    });
  }

  login() {
    this.router.navigate(["/admin/login"]);
  }
}
