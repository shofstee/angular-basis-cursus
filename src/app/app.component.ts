import { Component } from '@angular/core';
import {ChatMessage} from "./ChatMessage";;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title = 'cursus chatter';

  public messages: ChatMessage[] = [];

  public clients: string[] = []

  toScreen($event: ChatMessage) {
    console.log($event.name + ": " + $event.message);
    this.messages.push($event);
  }

  addClient() {
    this.clients.push('client_' + Math.random());
  }

  removeClient($event: string) {
    const index = this.clients.indexOf($event);
    if (index > -1) { // only splice array when item is found
      this.clients.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
}
