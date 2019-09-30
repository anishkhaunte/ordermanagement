import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orders = [];
    this.rest.getOrders().subscribe((data: {}) => {
      console.log(data);
      this.orders = data.data;
    });
  }

  onSelect(order: Order): void {
    this.selectedOrder = order;
  }
}