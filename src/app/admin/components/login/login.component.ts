import { Router } from "@angular/router";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { GlobalService } from "src/app/global.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { RegisterService } from "../../services/register.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  @ViewChild("email", { static: true }) email: ElementRef;
  hidePassword = true;
  loginForm: FormGroup;
  currentURL: any = "assets/login.png";
  private userDetail = [];

  constructor(
    private globalService: GlobalService,
    private registerService: RegisterService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loginForm = new FormBuilder().group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15)
        ])
      ]
    });
    this.globalService.setLayout({ allowFooter: true, pageTitle: "Login" });
    this.email.nativeElement.focus();
  }

  onSubmit({ value, valid }: { value: any; valid: boolean }) {
    console.log("loginDetails", value.email, value.password);

    const user: any = [];
    user.push(this.registerService.getUser());
    console.log("user from localstrorage", user[0].users[0], user[0].users[1]);
    this.userDetail.push(user[0].users[0], user[0].users[1]);
    console.log("userDetails", this.userDetail);
    if (
      value.email === this.userDetail[0] &&
      value.password === this.userDetail[1]
    ) {
      this.snackBar.open("User logged in sucessfully", undefined, { duration: 2000 });
      this.router.navigate(["/account-list"]);
    } else {
      this.snackBar.open("Check your Email and Password");
      this.router.navigate(["/admin/login"]);
    }
  }
}
