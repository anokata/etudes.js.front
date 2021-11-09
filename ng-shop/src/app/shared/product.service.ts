import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FbResponse, Product } from './interfaces';
import { map } from 'rxjs/operators';

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
}
