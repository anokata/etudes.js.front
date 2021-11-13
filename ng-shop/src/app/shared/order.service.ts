import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  create(order: any) {
    return this.http.post(`${environment.fbdbUrl}/orders.json`, order).pipe(
      map((res: any) => ({
        ...order,
        id: res.name,
        date: new Date(order.date),
      }))
    );
  }

  getAll(): Observable<any[]> {
    return this.http.get(`${environment.fbdbUrl}/orders.json`).pipe(
      map((res: any) => {
        return Object.keys(res).map((key) => ({
          ...res[key],
          id: key,
          date: new Date(res[key].date),
        }));
      })
    );
  }

  remove(id: string): Observable<Object> {
    return this.http.delete(`${environment.fbdbUrl}/orders/${id}.json`);
  }
}
