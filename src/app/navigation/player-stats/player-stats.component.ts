import {Component, OnInit} from '@angular/core';
import {MatchSmallerService} from '../../services/match-smaller.service';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {

  constructor(private matchService: MatchSmallerService) {
  }

  ngOnInit() {
  }

}
