import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameCardComponent } from './practice/name-card/name-card.component';
import { ProgressBarComponent } from './practice/progress-bar/progress-bar.component';
import { RatingBarComponent } from './excercise/rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './excercise/countdown-timer/countdown-timer.component';


@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
