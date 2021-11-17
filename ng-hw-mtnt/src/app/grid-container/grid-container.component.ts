import { CdkDragDrop, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { MatDialog } from "@angular/material/dialog";
import {
  UserDialogComponent,
  UserDialogResult,
} from "../user-dialog/user-dialog.component";
import { Firestore, collectionData, collection } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "grid-container",
  templateUrl: "./grid-container.component.html",
  styleUrls: ["./grid-container.component.css"],
})
export class GridContainerComponent implements OnInit {
  user$: Observable<User[]>;
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

  constructor(private dialog: MatDialog, firestore: Firestore) {
    const usersdata = collection(firestore, "users");
    // this.user$ = collectionData(usersdata);
    // https://developers.google.com/codelabs/building-a-web-app-with-angular-and-firebase#10
  }

  ngOnInit(): void {}

  editUser(list: string, user: any): void {}

  newUser(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: "270px",
      data: {
        user: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: UserDialogResult | undefined) => {
        if (!result) {
          return;
        }
        this.users.push(result.user);
      });
  }

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
