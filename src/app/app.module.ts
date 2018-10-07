import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from "./app.routing";
import 'rxjs/add/operator/map';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FeedComponent } from './feed/feed.component';
import { UserService } from "./user.service";
import { FeedService } from "./feed.service";
import { MessagesComponent } from './messages/messages.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendComponent } from './friend/friend.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FeedComponent,
    MessagesComponent,
    FriendsComponent,
    FriendComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(
      InMemoryDataService, {delay: 1000, rootPath: 'api/'}
      ),
    routing
  ],
  providers: [UserService, FeedService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
