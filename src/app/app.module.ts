import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './navigation/main-page/main-page.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatTabsModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatchViewComponent } from './navigation/match-view/match-view.component';
import { PlayersViewComponent } from './navigation/players-view/players-view.component';
import { TeamsViewComponent } from './navigation/teams-view/teams-view.component';
import { StatisticsViewComponent } from './navigation/statistics-view/statistics-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MatchViewComponent,
    PlayersViewComponent,
    TeamsViewComponent,
    StatisticsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
