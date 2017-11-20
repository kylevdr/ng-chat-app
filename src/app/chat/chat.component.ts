import { Component, OnInit } from '@angular/core'

import { SocketService } from '../socket.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.sass']
})
export class ChatComponent implements OnInit {
  messages = []
  author: string
  content: string
  newMessage = {
    author: '',
    content: ''
  }

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.listen()
      .subscribe(event => {
        this.messages.unshift(event)
      })
  }

  speak(): void {
    this.socketService.speak(this.newMessage)
    this.newMessage.content = ''
  }

}
