import { Injectable } from '@angular/core'
import ActionCable from 'actioncable'
import { environment } from '../environments/environment'
import { Observable } from 'rxjs/Observable'

import { Logger } from './logger.service'

@Injectable()
export class SocketService {
  private socket
  private chatChannel

  constructor(private logger: Logger) {
    this.socket = ActionCable.createConsumer(environment.SOCKET_ENDPOINT)
    this.chatChannel = this.socket.subscriptions.create('ChatChannel', {
      connected: () => {
        this.log('Connected to websocket')
      },
      speak: function (author, content) {
        this.perform('speak', {author, content})
      }
    })
  }
  
  listen(): Observable<any> {
    return new Observable(observer => {
      if (this.chatChannel) {
        this.chatChannel.received = (data) => {
          observer.next(data)
          this.log('Received data from websocket')
        }
      }
    })
  }

  speak(author: string, content: string) {
    if (this.chatChannel) {
      this.chatChannel.speak(author, content)
    }
  }

  private log(message: string) {
    this.logger.add('SocketService: ' + message)
  }

}
