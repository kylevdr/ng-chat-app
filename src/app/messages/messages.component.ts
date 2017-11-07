import { Component, OnInit } from '@angular/core'

import { Message } from '../message'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.styl']
})
export class MessagesComponent implements OnInit {
  message: Message = {
    author: 'Kyle',
    content: 'Hello world!'
  }

  constructor() { }

  ngOnInit() {
  }

}
