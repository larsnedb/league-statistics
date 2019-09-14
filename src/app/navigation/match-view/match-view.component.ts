import {Component, OnInit} from '@angular/core';
import {Match} from '../../models/match';

@Component({
  selector: 'app-match-view',
  templateUrl: './match-view.component.html',
  styleUrls: ['./match-view.component.css']
})
export class MatchViewComponent implements OnInit {

  dataSource: Match[] = [
    {date: new Date(2019, 9, 21), homeTeam: 'BMIL', awayTeam: 'Grei', location: 'Skøyenhallen'},
    {date: new Date(2019, 9, 26), homeTeam: 'Øreåsen', awayTeam: 'BMIL', location: 'Øreåsenhallen'},
    {date: new Date(2019, 10, 12), homeTeam: 'BMIL', awayTeam: 'Ajer', location: 'Skøyenhallen'},
    {date: new Date(2019, 10, 27), homeTeam: 'Ull/Kisa', awayTeam: 'BMIL', location: 'Jessheim is og flerbrukshall'}

  ];
  columnsToDisplay: string[] = ['date', 'homeTeam', 'awayTeam', 'location'];

  constructor() {
  }

  ngOnInit() {
  }

}
