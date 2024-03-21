import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-order-comment',
  templateUrl: './order-comment.component.html',
  styleUrl: './order-comment.component.scss'
})
export class OrderCommentComponent {

  public item$= this.ordersService.getSelectedItem();

  constructor(private ordersService: OrdersService, private location: Location) { }

  goBack(): void {
    this.location.back();
  }

}
