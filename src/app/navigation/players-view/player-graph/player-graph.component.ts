import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StatPerPlayer} from '../../../models/stat-per-player.model';
import {LineChartUtil} from '../../utils/line-chart.util';

@Component({
  selector: 'app-player-graph-component',
  templateUrl: './player-graph.component.html',
  styleUrls: ['./player-graph.component.css']
})
export class PlayerGraphComponent implements OnInit {
  player: StatPerPlayer;
  accumulatedPlayer: StatPerPlayer;
  perMatchTitle = 'Stats per match';
  accumulatedTitle = 'Accumulated stats';
  data: any;
  accData: any;

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

      this.accumulatedPlayer = {
        name,
        teamName,
        points: this.getAccumulatedList(points),
        goals: this.getAccumulatedList(goals),
        assists: this.getAccumulatedList(assists),
        matchesPlayed
      };
    });
    this.data = [
      {
        name: 'Points',
        series: LineChartUtil.mapToDataSeries(this.player.points)
      },
      {
        name: 'Goals',
        series: LineChartUtil.mapToDataSeries(this.player.goals)
      },
      {
        name: 'Assists',
        series: LineChartUtil.mapToDataSeries(this.player.assists)
      }];

    this.accData = [
      {
        name: 'Points',
        series: LineChartUtil.mapToDataSeries(this.getAccumulatedList(this.player.points))
      },
      {
        name: 'Goals',
        series: LineChartUtil.mapToDataSeries(this.getAccumulatedList(this.player.goals))
      },
      {
        name: 'Assists',
        series: LineChartUtil.mapToDataSeries(this.getAccumulatedList(this.player.assists))
      }];
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

  getAccumulatedList(values: number[]): number[] {
    const accumulatedList = [];
    values.reduce((previous, current, index) => accumulatedList[index] = previous + current, 0);
    return accumulatedList;
  }
}
