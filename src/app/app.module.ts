import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainPageComponent} from './navigation/main-page/main-page.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatchTopViewComponent} from './navigation/match-view/match-top-view/match-top-view.component';
import {PlayersViewComponent} from './navigation/players-view/players-view.component';
import {StandingsComponent} from './navigation/teams-view/standings.component';
import {StatisticsViewComponent} from './navigation/statistics-view/statistics-view.component';
import {MatchDetailsComponent} from './navigation/match-view/match-details/match-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {GoalTableComponent} from './navigation/match-view/goal-table/goal-table.component';
import {PenaltiesTableComponent} from './navigation/match-view/penalties-table/penalties-table.component';
import {DateNorwegianPipe} from './pipes/date-norwegian.pipe';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MatchTopViewComponent,
    PlayersViewComponent,
    StandingsComponent,
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
    RouterModule.forRoot(appRoutes),
    MatSortModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
