import {Routes} from '@angular/router';
import {MatchDetailsComponent} from './navigation/match-view/match-details/match-details.component';
import {MatchTopViewComponent} from './navigation/match-view/match-top-view/match-top-view.component';
import {PlayersViewComponent} from './navigation/players-view/players-view.component';
import {StandingsComponent} from './navigation/teams-view/standings.component';
import {StatisticsViewComponent} from './navigation/statistics-view/statistics-view.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/matches', pathMatch: 'full'},
  {path: 'matches/:id', component: MatchDetailsComponent},
  {path: 'standings', component: StandingsComponent},
  {path: 'matches', component: MatchTopViewComponent},
  {path: 'players', component: PlayersViewComponent},
  {path: 'statistics', component: StatisticsViewComponent},
];
