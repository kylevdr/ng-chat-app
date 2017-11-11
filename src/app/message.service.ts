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
    this.loggerService.add('MessageService: fetched message')
    return of(MESSAGES)
  }
}
