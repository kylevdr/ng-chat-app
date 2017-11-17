import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { catchError, map, tap } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'

import { Message } from './message'
import { Logger } from './logger.service'
import { environment } from '../environments/environment'
import { HttpClient } from '@angular/common/http'

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
    return this.http.get<IMessagesResponse>(this.messagesUrl)
      .pipe(
        tap(messages => this.log('fetched messages')),
        map(response => response.messages),
        catchError(this.handleError('getMessages', []))
      )
  }

  getMessage(id: number): Observable<Message> {
    return this.http.get<IMessageResponse>(environment.API_ENDPOINT + '/messages/' + id)
      .pipe(
        tap(_ => this.log(`fetched message with id: ${id}`)),
        map(response => response.message),
        catchError(this.handleError<Message>(`getMessage id=${id}`))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (err: any): Observable<T> => {
      console.error(err)
      this.log(`${operation} failed: ${err.message}`)
      return of(result as T)
    }
  }
}
