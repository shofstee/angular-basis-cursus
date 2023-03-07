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

  @Output() lastMessageEmitter = new EventEmitter<ChatMessage>()

  @Output() removeClientEmitter = new EventEmitter<string>()

  send() {
    const message: ChatMessage = { name: this.name, message: this.lastMessage, date: new Date() };
    this.lastMessageEmitter.emit(message);
    this.lastMessage = ''
  }

  removeClient() {
    this.removeClientEmitter.emit(this.name);
  }
}
