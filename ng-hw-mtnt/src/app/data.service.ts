import { Injectable } from "@angular/core";
import { LogService } from "./log.service";
import { Observable, of } from "rxjs";

@Injectable()
export class DataService {
  private data: string[] = ["AB", "CD"];

  constructor(private logService: LogService) {}

  getData(): Observable<string[]> {
    this.logService.write("data.service: getData");
    // make rx observable
    const data = of(this.data);
    return data;
  }

  addData(name: string) {
    this.logService.write("data.service: add Data");
    this.data.push(name);
  }
}
