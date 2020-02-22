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
    debugger;
    const user: any = [];
    user.push(this.registerService.getUser());
    this.userDetail.push(user[0]);
    if (valid) {
      if ( value.email === this.userDetail[0][0] && value.password === this.userDetail[0][1] ) {
        this.snackBar.open("User logged in sucessfully", null, {
          duration: 2000
        });
        this.router.navigate(["/account-list"]);
      }
    }
    else {
      this.snackBar.open("Check your Email and Password or register for new User");
      this.router.navigate(["/admin/login"]);
      setTimeout(() => {
        this.snackBar.dismiss();
      }, 1000);
      this.email.nativeElement.focus();
    }
  }
}
