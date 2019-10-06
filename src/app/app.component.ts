import { Component } from '@angular/core';
import { WebsocketService } from "./websocket.service";
import { OrderService } from "./order.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebsocketService, OrderService]
})
export class AppComponent {
  title = 'ordermanagement';
  
  constructor(private orderService: OrderService) {
    orderService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
    });
  }
}
