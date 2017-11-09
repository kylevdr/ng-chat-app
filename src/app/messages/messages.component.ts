import { Component, OnInit } from '@angular/core'

import { Message } from '../message'
import { MESSAGES } from './mock-messages'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.styl']
})
export class MessagesComponent implements OnInit {
  messages = MESSAGES

  constructor() { }

  ngOnInit() {
  }

}
