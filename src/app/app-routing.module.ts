import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { MessagesComponent } from './messages/messages.component'
import { HomeComponent } from './home/home.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/messages', pathMatch: 'full' },
  { path: 'messages', component: MessagesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'message/:id', component: MessageDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
