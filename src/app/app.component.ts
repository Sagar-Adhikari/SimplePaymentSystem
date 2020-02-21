import { Router } from "@angular/router";
import { Component, ɵCodegenComponentFactoryResolver } from "@angular/core";
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
    this.globalService.pageTitle$.subscribe((x: any) => {
      console.log("page title", x);
      this.pageTitle = x.pageTitle;
      this.allowFooter = x.allowFooter;
    });

    this.registerService.currentUser$.subscribe((x: any) => {
      console.log("subscribed", x);
      if(x){
      this.isLoggedIn=true;
      }else{
        this.isLoggedIn=false
      }
    });

    this.registerService.loggedIn$.subscribe((x: any) => {
      console.log("loggedin", x);
      this.isLoggedIn=true;
    });
  }

  login() {
    this.router.navigate(["/admin/login"]);
  }
}
