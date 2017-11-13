import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MessagesComponent } from './messages/messages.component'
import { MessageService } from './message.service'
import { LogsComponent } from './logs/logs.component'
import { LoggerService } from './logger.service'
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
    FormsModule
  ],
  providers: [MessageService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
