import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "forms",
  templateUrl: "forms.component.html",
  styleUrls: ["./forms.component.css"],
})
export class FormsComponent implements OnInit {
  name: string = "def name";
  email: string;
  phone: string;

  submit(form: NgForm) {
    console.log(form);
  }

  constructor() {}

  ngOnInit() {}
}
