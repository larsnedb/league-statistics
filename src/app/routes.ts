import {Routes} from '@angular/router';
import {MatchDetailsComponent} from './navigation/match-view/match-details/match-details.component';
import {MatchTopViewComponent} from './navigation/match-view/match-top-view/match-top-view.component';
import {PlayersViewComponent} from './navigation/players-view/players-view.component';
import {TeamsViewComponent} from './navigation/teams-view/teams-view.component';
import {StatisticsViewComponent} from './navigation/statistics-view/statistics-view.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/matches', pathMatch: 'full'},
  {path: 'matches/:id', component: MatchDetailsComponent},
  {path: 'matches', component: MatchTopViewComponent},
  {path: 'players', component: PlayersViewComponent},
  {path: 'teams', component: TeamsViewComponent},
  {path: 'statistics', component: StatisticsViewComponent},
];
