import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainPageComponent} from './navigation/main-page/main-page.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatTableModule, MatTabsModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatchViewComponent} from './navigation/match-view/match-view.component';
import {PlayersViewComponent} from './navigation/players-view/players-view.component';
import {TeamsViewComponent} from './navigation/teams-view/teams-view.component';
import {StatisticsViewComponent} from './navigation/statistics-view/statistics-view.component';
import {MatchDetailsComponent} from './navigation/match-details/match-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {GoalTableComponent} from './navigation/goal-table/goal-table.component';
import {PenaltiesTableComponent} from './navigation/penalties-table/penalties-table.component';
import {DateNorwegianPipe} from './pipes/date-norwegian.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MatchViewComponent,
    PlayersViewComponent,
    TeamsViewComponent,
    StatisticsViewComponent,
    MatchDetailsComponent,
    GoalTableComponent,
    PenaltiesTableComponent,
    DateNorwegianPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    FlexLayoutModule,
    MatTableModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
