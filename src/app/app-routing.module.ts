import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderAddComponent } from './order-add/order-add.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrdersComponent } from './orders/orders.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'order-detail/:id', component: OrderDetailComponent },
  { path: 'order-add', component: OrderAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
