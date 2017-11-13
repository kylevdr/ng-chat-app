import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { of } from 'rxjs/observable/of'

import { Message } from './message';
import { MESSAGES } from './mock-messages';
import { LoggerService } from './logger.service';

@Injectable()
export class MessageService {

  constructor(private loggerService: LoggerService) { }

  getMessages(): Observable<Message[]> {
    this.loggerService.add('MessageService: fetched messages')
    return of(MESSAGES)
  }

  getMessage(id: number): Observable<Message> {
    this.loggerService.add(`MessageService: fetched message with id: ${id}`)
    return of(MESSAGES.find(message => message.id === id))
  }
}
