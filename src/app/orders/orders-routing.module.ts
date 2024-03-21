import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrderCommentComponent } from './components/order-comment/order-comment.component';

const routes: Routes = [
  {path: '', children: [
    {path: '', component: PageListOrdersComponent},
    {path: 'detail', component: OrderDetailComponent},
    {path: 'comment', component: OrderCommentComponent}
  ]},
  {path: 'add', component: PageAddOrderComponent},
  {path: 'edit/:id', component: PageEditOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
