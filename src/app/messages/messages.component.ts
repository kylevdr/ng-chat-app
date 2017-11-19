import { Component, OnInit } from '@angular/core'

import { Message } from '../message'
import { MessageService } from '../message.service'
import { SocketService } from '../socket.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit {
  messages: Message[]

  constructor(
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.getMessages()
  }

  getMessages(): void {
    this.messageService.getMessages().subscribe(messages => {
      this.messages = messages
    })
  }

}
