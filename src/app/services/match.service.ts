import {Injectable} from '@angular/core';
import {Match} from '../models/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor() {
  }

  matches: Match[] = [
    {id: 1, date: new Date(2019, 9, 21), homeTeam: 'BMIL', awayTeam: 'Grei', location: 'Skøyenhallen'},
    {id: 2, date: new Date(2019, 9, 26), homeTeam: 'Øreåsen', awayTeam: 'BMIL', location: 'Øreåsenhallen'},
    {id: 3, date: new Date(2019, 10, 12), homeTeam: 'BMIL', awayTeam: 'Ajer', location: 'Skøyenhallen'},
    {id: 4, date: new Date(2019, 10, 27), homeTeam: 'Ull/Kisa', awayTeam: 'BMIL', location: 'Jessheim is og flerbrukshall'}];

  getAllMatches(): Match[] {
    return this.matches;
  }

  getMatch(id: number): Match {
    return this.matches
      .find(match => match.id === id);
  }
}
