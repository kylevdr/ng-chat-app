import { Component, OnInit } from '@angular/core'

import { Logger } from '../logger.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    private logger: Logger,
  ) { }

  ngOnInit() {
    this.logger.add('HomeComponent: visited home page')
  }

}
