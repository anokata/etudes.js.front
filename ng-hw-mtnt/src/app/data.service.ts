import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable()
export class DataService {
  private data: string[] = ["AB", "CD"];

  constructor(private logService: LogService) {}

  getData(): string[] {
    this.logService.write("data.service: getData");
    return this.data;
  }

  addData(name: string) {
    this.logService.write("data.service: add Data");
    this.data.push(name);
  }
}
