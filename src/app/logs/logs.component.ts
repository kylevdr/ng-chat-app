import { Component, OnInit } from '@angular/core';
import { Logger } from '../logger.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.sass']
})
export class LogsComponent implements OnInit {

  constructor(public logger: Logger) { }

  ngOnInit() {
  }

}
