import { Injectable } from '@angular/core';
import { Order } from '../../core/models/order';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environnement } from '../../../environnements/environnement';
import { StateOrder } from '../../core/enums/state-order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private apiUrl = environnement.apiUrl;

  constructor(private http: HttpClient) {}

  public getCollection(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/orders`)
    .pipe(
      map((orders) => {
        return orders.map((order) => {
          return new Order(order);
        });
      })
    );
  }

  public changeState(order: Order, state: StateOrder): Observable<Order> {
    const obj= {...order};
    obj.state = state;
    return this.update(new Order(obj));
  }
  
  public update(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/orders/${order.id}`, order);
  }

}
