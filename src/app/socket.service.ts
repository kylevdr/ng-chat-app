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
      speak: function (message) {
        this.perform('speak', { message })
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

  speak(message) {
    if (this.chatChannel) {
      this.chatChannel.speak(message)
    }
  }

  private log(message: string) {
    this.logger.add('SocketService: ' + message)
  }

}
