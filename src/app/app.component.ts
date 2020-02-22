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
    // const arr = [];
    // arr.push(this.registerService.getUser());
    // console.log("arrd", arr);
    // this.email = arr[0][0];
    // if(this.registerService.isLoggedIn()){
    //    this.email = arr[0][0];
    // };

    this.globalService.pageTitle$.subscribe((x: any) => {
      console.log("page title", x);
      this.pageTitle = x.pageTitle;
      this.allowFooter = x.allowFooter;
    });
  }

  login() {
    // this.router.navigate(["/admin/login"]);
    if (!this.registerService.isLoggedIn) {
      this.router.navigate(["/account-list"]);
      this.isLoggedIn = true;
    } else {
      this.router.navigate(["/admin/login"]);
    }
  }
  logout() {
    this.registerService.clearUser();
    this.router.navigate(["/admin/login"]);
  }

  isLoggedInUser() {
    const user = localStorage.getItem("ni-user");
    console.log("localstorage", user);
  }
}
