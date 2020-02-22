import { Router } from "@angular/router";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GlobalService } from "src/app/global.service";
import { MatSnackBarModule, MatSnackBar } from "@angular/material";
import { RegisterService } from "../../services/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  @ViewChild("firstName", { static: true }) firstName: ElementRef;
  hidePassword = true;
  registerForm: FormGroup;
  constructor(
    private globalService: GlobalService,
    private snackBar: MatSnackBar,
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerForm = new FormBuilder().group({
      firstName: [
        "",
        Validators.compose([Validators.required, Validators.maxLength(100)])
      ],
      lastName: [
        "",
        Validators.compose([Validators.required, Validators.maxLength(100)])
      ],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      mobileNo: [
        "",
        Validators.compose([Validators.required, Validators.maxLength(20)])
      ],
      password: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15)
        ])
      ]
    });
    this.globalService.setLayout({
      allowFooter: true,
      pageTitle: "Register Page"
    });
    this.firstName.nativeElement.focus();
  }
  onSubmit({ value, valid }: { value: any; valid: boolean }) {
    console.log(value);
    if (valid) {
      const arr = [];
      arr.push(value.email, value.password);
      this.registerService.registerUser(arr);
      this.snackBar.open("User Added Successfully", null, { duration: 2000 });
      this.router.navigate(["/admin/login"]);
    } else {
      this.snackBar.open("Please verify your register details.", undefined, {
        duration: 2000
      });
    }
  }
}
