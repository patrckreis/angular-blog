import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { TittleMenuComponent } from './components/tittle-menu/tittle-menu.component';
import { LeftCardComponent } from './components/left-card/left-card.component';
import { RightCardsComponent } from './components/right-cards/right-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    TittleMenuComponent,
    LeftCardComponent,
    RightCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
