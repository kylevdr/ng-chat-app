import { Component, OnInit } from '@angular/core'

import { LoggerService } from '../logger.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    private loggerService: LoggerService,
  ) { }

  ngOnInit() {
    this.loggerService.add('HomeComponent: visited home page')
  }

}
