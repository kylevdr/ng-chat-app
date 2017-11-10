import { Component, OnInit } from '@angular/core'

import { Message } from '../message'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.styl']
})
export class MessagesComponent implements OnInit {
  messages: Message[]

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getMessages()
  }

  getMessages(): void {
    this.messages = this.messageService.getMessages()
  }

}
