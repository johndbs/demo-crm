import { Component, OnInit } from '@angular/core';
import { Order } from '../../../core/models/order';
import { StateOrder } from '../../../core/enums/state-order';
import { OrdersService } from '../../services/orders.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss'
})
export class PageListOrdersComponent implements OnInit{


  public collection$!: Observable<Order[]>;

  public headers: string[] = [
    "Actions",
    "ID",
    "Client",
    "Nb days",
    "Daily rate",
    "Total Ex VAT",
    "Total Inc VAT",
    "State"
  ];

  public states = Object.values(StateOrder);

  constructor(private ordersService: OrdersService, private router: Router) {}

  ngOnInit(): void {
    this.collection$ = this.ordersService.getCollection();
  }

  public changeState(order: Order, event: any): void {
    const state = event.target.value;
    this.ordersService.changeState(order, state).subscribe((data) => order.state = data.state);
  }

  public goToEdit(order: Order): void {
    this.router.navigate(['orders', 'edit', order.id]);
  }

  public delete(order: Order): void {
    this.ordersService.delete(order.id).subscribe(() => {});
  }

  public selectItem(item: Order): void {
    this.ordersService.updateSelectedItem(item);
  }

}
