import {Routes} from '@angular/router';
import {MatchDetailsComponent} from './navigation/match-view/match-details/match-details.component';
import {MatchTopViewComponent} from './navigation/match-view/match-top-view/match-top-view.component';
import {PlayersViewComponent} from './navigation/players-view/player-overview/players-view.component';
import {StandingsComponent} from './navigation/standings-view/standings.component';
import {StatisticsViewComponent} from './navigation/statistics-view/statistics-view.component';
import {PlayerGraphComponent} from './navigation/players-view/player-graph/player-graph.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/matches', pathMatch: 'full'},
  {path: 'standings', component: StandingsComponent},
  {path: 'matches/:id', component: MatchDetailsComponent},
  {path: 'matches', component: MatchTopViewComponent},
  {path: 'players/:name', component: PlayerGraphComponent},
  {path: 'players', component: PlayersViewComponent},
  {path: 'statistics', component: StatisticsViewComponent},
];
