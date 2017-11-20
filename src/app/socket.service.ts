import { Injectable } from '@angular/core'
import ActionCable from 'actioncable'
import { environment } from '../environments/environment'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { Logger } from './logger.service'

@Injectable()
export class SocketService {
  private cable
  private chatChannel
  private subject

  constructor(private logger: Logger) {
    this.subject = new Subject()
  }
  
  initCable() {
    this.cable = ActionCable.createConsumer(environment.SOCKET_ENDPOINT)
  }
  
  initChatChannel() {
    if (!this.cable) {
      this.initCable()
    }
    this.chatChannel = this.cable.subscriptions.create('ChatChannel', {
      connected: () => {
        this.log('Connected to websocket')
      },
      received: (data) => {
        this.log('Received data from socket')
        this.subject.next(data)
      },
      speak: function (message) {
        this.perform('speak', { message })
      }
    })
  }
  
  listen(): Observable<any> {
    if (!this.chatChannel) {
      this.initChatChannel()
    }
    return this.subject.asObservable()
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
