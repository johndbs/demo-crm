import { Component } from '@angular/core';
import { Order } from '../../../core/models/order';
import { StateOrder } from '../../../core/enums/state-order';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss'
})
export class PageListOrdersComponent {

  public collection: Order[] = [
    {id: 1, dailyRateExVAT: 1200, numberOfDays: 20, vat: 20, state: StateOrder.PAID, serviceType: 'Dev Angular', client: 'WorldCompany', comment: 'Top comment'},
    {id: 2, dailyRateExVAT: 1000, numberOfDays: 10, vat: 20, state: StateOrder.CANCELED, serviceType: 'Dev React', client: 'WorldCompany', comment: 'Project cancelled'}, 
    {id: 3, dailyRateExVAT: 1000, numberOfDays: 5, vat: 20, state: StateOrder.OPTION, serviceType: 'Dev Vue', client: 'Mega Corp', comment: 'New prospect'},
    {id: 4, dailyRateExVAT: 1000, numberOfDays: 60, vat: 20, state: StateOrder.CONFIRMED, serviceType: 'Dev Angular', client: 'Mega Corp', comment: 'New prospect, second project'},
    {id: 5, dailyRateExVAT: 1000, numberOfDays: 200, vat: 20, state: StateOrder.OPTION, serviceType: 'Dev Angular', client: 'Tiny corp', comment: 'New prospect'}
  ];


  public headers: string[] = [
    "ID",
    "Client",
    "Nb days",
    "Daily rate",
    "Total Ex VAT",
    "Total Inc VAT",
    "State"
  ];

  public total(val: number, coef: number, vat?: number) : number {
    if(vat){
      return val * coef * (1 + vat/100);
    }
    return val * coef;
  }



}
