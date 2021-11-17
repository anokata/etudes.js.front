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
  users: User[] = [
    {
      id: 1,
      name: "Jane",
      age: 18,
      occupation: "homefull",
    },
    {
      id: 2,
      name: "Bruce",
      age: 22,
      occupation: "Manager",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
