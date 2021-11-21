import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

@Component({
  selector: "auth-form",
  templateUrl: "./auth-form.component.html",
  styleUrls: ["./auth-form.component.css"],
})
export class AuthFormComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      username: new FormControl("user@mail.com", [Validators.required]),
      password: new FormControl("123456", [Validators.required]),
    });
  }

  ngOnInit(): void {}

  login(): void {
    console.log(this.form.value);
    const auth = getAuth();
    signInWithEmailAndPassword(
      auth,
      this.form.value.username,
      this.form.value.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error: (${errorCode}) ${errorMessage}`);
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log(` Sign-out successful.`);
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
