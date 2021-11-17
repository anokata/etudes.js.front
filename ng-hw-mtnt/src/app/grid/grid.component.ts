import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "src/app/models/user";

@Component({
  selector: "grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.css"],
})
export class GridComponent implements OnInit {
  @Input() user: User | null = null;
  @Output() changeUser = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {}
}
