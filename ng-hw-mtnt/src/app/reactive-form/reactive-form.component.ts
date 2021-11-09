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
      cityName: new FormControl("DefaulCity", [Validators.required]),
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.cityForm.value.cityName);
  }
}
