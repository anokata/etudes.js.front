import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "auth-form",
  templateUrl: "./auth-form.component.html",
  styleUrls: ["./auth-form.component.css"],
})
export class AuthFormComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      username: new FormControl("default", [Validators.required]),
      password: new FormControl("123", [Validators.required]),
    });
  }

  ngOnInit(): void {}

  login(): void {
    console.log(this.form.value);
  }
}
