import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { ChatClientComponent } from './chat-client/chat-client.component';
import { FormsModule } from "@angular/forms";
import {ColorPipe} from "./pipe/ColorPipe";

@NgModule({
  declarations: [
    AppComponent,
    ChatScreenComponent,
    ChatClientComponent,
    ColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
