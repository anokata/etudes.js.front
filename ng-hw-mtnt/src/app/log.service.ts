import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LogService {
  constructor() {}

  write(logMessage: string) {
    console.log(logMessage);
  }
}
