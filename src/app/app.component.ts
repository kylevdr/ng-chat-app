import { Component } from '@angular/core'
import { Location } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ng-chat-app'

  constructor(
    private location: Location
  ) {}

  goBack() {
    this.location.back()
  }
}
