import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs/Rx";
import { WebsocketService } from "./websocket.service";

export interface Message {
  status: string;
}

const WS_URL = "ws://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public messages: Subject<Message>;

  constructor(wsService: WebsocketService) {
    this.messages = <Subject<Message>>wsService.connect(WS_URL).map(
      (response: MessageEvent): Message => {
        console.log("Insie the order service")
        //let data = JSON.parse(response.data);
        return response.data;
        /*return {
          status: data.status
        };*/
      }
    );
  }
}
