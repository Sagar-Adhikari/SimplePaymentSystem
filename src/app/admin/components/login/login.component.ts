import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { GlobalService } from "src/app/global.service";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  @ViewChild("email", { static: true }) email: ElementRef;
  hidePassword = true;
  loginForm: FormGroup;
  currentURL: any = 'assets/login.png';
  constructor(private globalService: GlobalService) {}

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
    console.log("loginDetails", value);
  }
}
