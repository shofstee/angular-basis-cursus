import { Component } from '@angular/core';
import {ChatMessage} from "./ChatMessage";;
import { uniqueNamesGenerator, Config, adjectives, colors } from 'unique-names-generator';

const customConfig: Config = {
  dictionaries: [adjectives, colors],
  separator: '-',
  length: 2,
};

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
    this.messages.push($event);
  }

  addClient() {
    this.clients.push(uniqueNamesGenerator(customConfig));
  }

  removeClient($event: string) {
    const index = this.clients.indexOf($event);
    if (index > -1) { // only splice array when item is found
      this.clients.splice(index, 1); // 2nd parameter means remove one item only
    }
  }
}
