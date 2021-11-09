import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { City } from "../city";
import { CityService } from "../city.service";

@Component({
  selector: "reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"],
  providers: [CityService],
})
export class ReactiveFormComponent implements OnInit {
  cityForm: FormGroup;
  city: City | undefined;

  constructor(private cityService: CityService) {
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

  buttonGet() {
    this.cityService.getData().subscribe((city) => (this.city = city));
  }
}
