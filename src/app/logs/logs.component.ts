import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.sass']
})
export class LogsComponent implements OnInit {

  constructor(public loggerService: LoggerService) { }

  ngOnInit() {
  }

}
