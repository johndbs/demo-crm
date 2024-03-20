import { Component } from '@angular/core';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrl: './page-add-order.component.scss'
})
export class PageAddOrderComponent {

  public item: Order = new Order();

  constructor(private ordersService: OrdersService, private router: Router) {}

  public action(item: Order): void {
    this.ordersService.add(item).subscribe((res) => {
      this.router.navigate(['orders']);
    }); 
  }

}
