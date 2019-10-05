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
      this.orders = data['orders'];
    });
  }

  add() {
    this.router.navigate(['/order-add']);
  }

  cancelOrder(id){
    this.rest.cancelOrder(id).subscribe(res=>{
      this.getOrders();
    }, (err)=>{
      console.log(err);
    })
  }

  getOrderDetail(order){
    this.router.navigate(['/order-detail/'+order._id]);
  }
}
