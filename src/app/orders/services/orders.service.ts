import { Injectable } from '@angular/core';
import { Order } from '../../core/models/order';
import { Observable, of } from 'rxjs';
import { StateOrder } from '../../core/enums/state-order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  public collection: Order[] = [
    {id: 1, dailyRateExVAT: 1200, numberOfDays: 20, vat: 20, state: StateOrder.PAID, serviceType: 'Dev Angular', client: 'WorldCompany', comment: 'Top comment'},
    {id: 2, dailyRateExVAT: 1000, numberOfDays: 10, vat: 20, state: StateOrder.CANCELED, serviceType: 'Dev React', client: 'WorldCompany', comment: 'Project cancelled'}, 
    {id: 3, dailyRateExVAT: 1000, numberOfDays: 5, vat: 20, state: StateOrder.OPTION, serviceType: 'Dev Vue', client: 'Mega Corp', comment: 'New prospect'},
    {id: 4, dailyRateExVAT: 1000, numberOfDays: 60, vat: 20, state: StateOrder.CONFIRMED, serviceType: 'Dev Angular', client: 'Mega Corp', comment: 'New prospect, second project'},
    {id: 5, dailyRateExVAT: 1000, numberOfDays: 200, vat: 20, state: StateOrder.OPTION, serviceType: 'Dev Angular', client: 'Tiny corp', comment: 'New prospect'},
    {id: 6, dailyRateExVAT: 1500, numberOfDays: 20, vat: 20, state: StateOrder.OPTION, serviceType: 'Dev spring REST app', client: 'Tiny corp', comment: 'New prospect'}
  ];

  constructor() { }


  public getCollection(): Observable<Order[]> {
    return of(this.collection);
  }


}
