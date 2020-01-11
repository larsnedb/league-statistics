import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-player-graph-component',
  templateUrl: './player-graph.component.html',
  styleUrls: ['./player-graph.component.css']
})
export class PlayerGraphComponent implements OnInit {
  player: { name: string, team: string, points: number[], goals: number[], assists: number[], matchesPlayed: number };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const name = params['name'];
      const team = params['teamName'];
      const points = this.parseNumberArray(params['points']);
      const goals = this.parseNumberArray(params['goals']);
      const assists = this.parseNumberArray(params['assists']);
      const matchesPlayed = +params['matchesPlayed'];

      this.player = {
        name,
        team,
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
}
