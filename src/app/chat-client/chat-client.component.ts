import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChatMessage} from "../ChatMessage";

@Component({
  selector: 'app-chat-client',
  templateUrl: './chat-client.component.html',
  styleUrls: ['./chat-client.component.scss']
})
export class ChatClientComponent {

  @Input()
  public name: string = '';

  public lastMessage: string = '';

  @Output() lastMessageEmitter = new EventEmitter<ChatMessage>();

  @Output() removeClientEmitter = new EventEmitter<string>();

  public color: number;

  public saturation: number;

  constructor() {
    //this.color = '#' + (0x1000000 + Math.floor(Math.random() * 0x1000000)).toString(16).substr(1);
    this.color = this.getRandomInt(360);
    this.saturation = this.getRandomInt(100);
  }
  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  send() {
    const message: ChatMessage = { name: this.name, message: this.lastMessage, date: new Date(), color: this.color, saturation: this.saturation };
    this.lastMessageEmitter.emit(message);
    this.lastMessage = ''
  }

  removeClient() {
    this.removeClientEmitter.emit(this.name);
  }
}
