import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss'
})
export class OrderDetailComponent {

  public item$= this.ordersService.getSelectedItem();

  constructor(private ordersService: OrdersService, private location: Location) { }

  goBack(): void {
    this.location.back();
  }

}
