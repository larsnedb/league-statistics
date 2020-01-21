import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StatPerPlayer} from '../../../models/stat-per-player.model';

@Component({
  selector: 'app-player-graph-component',
  templateUrl: './player-graph.component.html',
  styleUrls: ['./player-graph.component.css']
})
export class PlayerGraphComponent implements OnInit {
  player: StatPerPlayer;
  accumulatedPlayer: StatPerPlayer;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const name = params['name'];
      const teamName = params['teamName'];
      const points = this.parseNumberArray(params['points']);
      const goals = this.parseNumberArray(params['goals']);
      const assists = this.parseNumberArray(params['assists']);
      const matchesPlayed = +params['matchesPlayed'];

      this.player = {
        name,
        teamName,
        points,
        goals,
        assists,
        matchesPlayed
      };

      // TODO larsne: accumulate goals, assists and points
      this.accumulatedPlayer = {
        name,
        teamName,
        points,
        goals,
        assists,
        matchesPlayed
      };
    });
  }

  parseNumberArray(values: string): number[] {
    return values.split(',')
      .map(value => parseInt(value, 10));
  }

  sumValues(values: number[]) {
    return values.reduce((a, b) => a + b, 0);
  }

  getPointsAverage(points: number[], matchesPlayed: number) {
    const totalPoints = this.sumValues(points);
    return matchesPlayed !== 0
      ? (totalPoints / matchesPlayed).toFixed(2)
      : 0;
  }

  // getAccumulatedList(values: number[]) {
  //   values.reduce((previousValue, currentValue, currentIndex) => )
  // }
  // myarray.reduce(function(a,b,i) { return new_array[i] = a+b; },0);
}
