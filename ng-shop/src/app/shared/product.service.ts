import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FbResponse, Product } from './interfaces';
import { map } from 'rxjs/operators';
import { keyframes } from '@angular/animations';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  create(product: any) {
    return this.http.post(`${environment.fbdbUrl}/products.json`, product).pipe(
      map((res: any) => ({
        ...product,
        id: res.name,
        date: new Date(product.date),
      }))
    );
  }

  getAll(): Observable<any[]> {
    return this.http.get(`${environment.fbdbUrl}/products.json`).pipe(
      map((res: any) => {
        return Object.keys(res).map((key) => ({
          ...res[key],
          id: key,
          date: new Date(res[key].date),
        }));
      })
    );
  }
}
