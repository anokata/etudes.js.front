import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"],
})
export class ReactiveFormComponent implements OnInit {
  cityForm: FormGroup;

  constructor() {
    this.cityForm = new FormGroup({
      cityName: new FormControl("DefaultCity", [
        Validators.required,
        this.cityNameValidator,
      ]),
    });
  }

  cityNameValidator(control: FormControl): { [s: string]: boolean } {
    if ((control.value as string).indexOf("fault") > 0) {
      return { cityName: true };
    }
    return null;
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.cityForm.value.cityName);
  }
}
