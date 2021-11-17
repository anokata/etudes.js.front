import { CdkDragDrop, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";

@Component({
  selector: "grid-container",
  templateUrl: "./grid-container.component.html",
  styleUrls: ["./grid-container.component.css"],
})
export class GridContainerComponent implements OnInit {
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
  inProgress: User[] = [];
  done: User[] = [];

  constructor() {}

  ngOnInit(): void {}

  editUser(list: string, user: any): void {}

  drop(event: CdkDragDrop<User[] | null>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
