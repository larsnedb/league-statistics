import {Routes} from '@angular/router';
import {MatchDetailsComponent} from './navigation/match-details/match-details.component';
import {MatchViewComponent} from './navigation/match-view/match-view.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: '/match', pathMatch: 'full'},
  {path: 'match/:id', component: MatchDetailsComponent},
  {path: 'match', component: MatchViewComponent},
];
