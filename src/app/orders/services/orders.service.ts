import { Injectable } from '@angular/core';
import { Order } from '../../core/models/order';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environnement } from '../../../environnements/environnement';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private apiUrl = environnement.apiUrl;


  constructor(private http: HttpClient) {}


  public getCollection(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/orders`);
  }


}
