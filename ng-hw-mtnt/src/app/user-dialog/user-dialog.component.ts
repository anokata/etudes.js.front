import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { User } from "../models/user";

export interface UserDialogData {
  user: Partial<User>;
  enableDelete: boolean;
}

export interface UserDialogResult {
  user: User;
  delete?: boolean;
}

@Component({
  selector: "user-dialog",
  templateUrl: "./user-dialog.component.html",
  styleUrls: ["./user-dialog.component.css"],
})
export class UserDialogComponent implements OnInit {
  private backupUser: Partial<User> = { ...this.data.user };

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserDialogData
  ) {}

  cancel(): void {
    this.data.user.name = this.backupUser.name;
    this.data.user.occupation = this.backupUser.occupation;
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {}
}
