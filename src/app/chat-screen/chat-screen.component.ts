import {Component, Input} from '@angular/core';
import {ChatMessage} from "../ChatMessage";

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss']
})
export class ChatScreenComponent {
  @Input()
  public messages: ChatMessage[] = [];
}
