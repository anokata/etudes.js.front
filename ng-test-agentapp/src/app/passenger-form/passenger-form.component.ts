import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss'],
})
export class PassengerFormComponent implements OnInit {
  form: FormGroup;
  numberRegEx = /\-?\d*\.?\d{1,2}/;

  constructor() {
    this.form = new FormGroup({
      distance: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.numberRegEx),
      ]),
      age: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.numberRegEx),
      ]),
      luggageWeight: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.numberRegEx),
      ]),
    });
  }

  ngOnInit(): void {}
}
