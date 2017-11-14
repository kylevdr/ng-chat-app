import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  logs: string[] = []

  add(log: string) {
    this.logs.push(log)
  }

  clear() {
    this.logs.length = 0
  }

}
