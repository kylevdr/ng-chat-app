import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MessagesComponent } from './messages/messages.component'
import { MessageService } from './message.service'
import { LogsComponent } from './logs/logs.component'
import { Logger } from './logger.service'
import { HomeComponent } from './home/home.component'
import { MessageDetailComponent } from './message-detail/message-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    LogsComponent,
    HomeComponent,
    MessageDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessageService, Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
