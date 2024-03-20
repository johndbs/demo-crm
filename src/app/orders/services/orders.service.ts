import { Injectable, OnInit } from '@angular/core';
import { Order } from '../../core/models/order';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environnement } from '../../../environnements/environnement';
import { StateOrder } from '../../core/enums/state-order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private apiUrl = environnement.apiUrl;

  private collection$: BehaviorSubject<Order[]> = new BehaviorSubject<Order[]>([]);

  constructor(private http: HttpClient) {
    this.refreshCollection();
  }

  private refreshCollection(): void {
    this.http.get<Order[]>(`${this.apiUrl}/orders`).pipe(
      map((orders) => {
        return orders.map((data) => {
          return new Order(data);
        });
      })
    ).subscribe((orders) => {
      console.log("refresh collection orders");
      this.collection$.next(orders);
    });
  }

  public getCollection(): Observable<Order[]> {
    return this.collection$;
  }

  public changeState(order: Order, state: StateOrder): Observable<Order> {
    const obj= {...order};
    obj.state = state;
    return this.update(new Order(obj));
  }
  
  public update(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/orders/${order.id}`, order).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public getItemById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/orders/${id}`);
  }

  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/orders`, {...item, id: undefined}).pipe(
      tap(() => {
        this.refreshCollection();
      })
    );
  }

  public delete(id: Number): Observable<Order> {
    console.log(`delete order id=${id}`);
    return this.http.delete<Order>(`${this.apiUrl}/orders/${id}`).pipe(
      tap(() => {
        this.refreshCollection();
      }
    ));
  }

}
