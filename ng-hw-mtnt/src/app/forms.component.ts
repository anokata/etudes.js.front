import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DataService } from "./data.service";
import { LogService } from "./log.service";

@Component({
  selector: "forms",
  templateUrl: "forms.component.html",
  styleUrls: ["./forms.component.css"],
  providers: [DataService, LogService],
})
export class FormsComponent implements OnInit {
  name: string = "def name";
  email: string;
  phone: string;
  list: string[] = [];
  item: string;
  selectedItem: string;

  submit(form: NgForm) {
    console.log(form);
    console.log(this.name, this.email, this.phone);
  }

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => (this.list = data));
  }

  addItem() {
    this.dataService.addData(this.item);
  }
}
