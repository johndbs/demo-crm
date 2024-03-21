import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrl: './page-edit-order.component.scss'
})
export class PageEditOrderComponent implements OnInit {


  public item$!: Observable<Order>;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {

    const itemId: number = this.route.snapshot.params['id'];

    this.item$ = this.ordersService.getItemById(itemId);
  }


  public action(item: Order): void { 
    this.ordersService.update(item).subscribe((data) => {
      this.router.navigate(['orders']);
    });
  }

}
