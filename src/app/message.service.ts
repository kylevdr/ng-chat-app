import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/map'

import { Message } from './message';
import { Logger } from './logger.service';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

interface IMessagesResponse {
  messages: Message[]
}

interface IMessageResponse {
  message: Message
}

@Injectable()
export class MessageService {

  private messagesUrl = environment.API_ENDPOINT + '/messages'

  constructor(
    private logger: Logger,
    private http: HttpClient
  ) { }

  private log(message: string) {
    this.logger.add('MessageService: ' + message)
  }

  getMessages(): Observable<Message[]> {
    this.log('fetched messages')
    return this.http.get<IMessagesResponse>(this.messagesUrl)
      .map(response => response.messages)
  }

  getMessage(id: number): Observable<Message> {
    this.log(`fetched message with id: ${id}`)
    return this.http.get<IMessageResponse>(environment.API_ENDPOINT + '/messages/' + id)
      .map(response => response.message)
  }
}
