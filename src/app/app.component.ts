import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { GlobalService } from "./global.service";
import { RegisterService } from "./admin/services/register.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  private _roleId: number = 0;
  isLoggedIn = false;
  email: string;

  title = "simplePaymentSystem";
  isClickedMenu: boolean = true;
  smallScreen: boolean = false;
  pageTitle = "Initial Title";

  allowFooter: true;

  get roleId(): number {
    return this._roleId;
  }
  constructor(
    private globalService: GlobalService,
    private router: Router,
    private registerService: RegisterService
  ) {
    this.isLoggedInUser();
    this.globalService.pageTitle$.subscribe((x: any) => {
      this.pageTitle = x.pageTitle;
      this.allowFooter = x.allowFooter;
    });
  }

  login() {
    window.location.reload();
    if (!this.registerService.isLoggedIn) {
      this.router.navigate(["/account-list"]);
    } else {
      this.router.navigate(["/admin/login"]);
    }
  }
  logout() {
    window.location.reload();
    this.registerService.clearUser();
    this.router.navigate(["/admin/login"]);
  }

  isLoggedInUser() {
    const user = localStorage.getItem("ni-user");
    const users = JSON.parse(user);
    if (users) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
      this.router.navigate(["/admin/login"]);
    }
  }
}
