import { Injectable } from '@angular/core'

import { Message } from './message';
import { MESSAGES } from './mock-messages';

@Injectable()
export class MessageService {

  constructor() { }

  getMessages(): Message[] {
    return MESSAGES
  }
}
