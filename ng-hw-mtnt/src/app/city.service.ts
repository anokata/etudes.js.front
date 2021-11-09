import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { City } from "./city";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CityService {
  constructor(private httpClient: HttpClient) {}
  getData(): Observable<City> {
    return this.httpClient
      .get("assets/city.json")
      .pipe(map((data: any) => new City(data.cityName, data.population)));
  }
}
