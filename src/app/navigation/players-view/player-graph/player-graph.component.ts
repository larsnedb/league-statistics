import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StatPerPlayer} from '../../../models/stat-per-player.model';
import {DataSeriesUtil} from '../../utils/data-series.util';

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
        points: DataSeriesUtil.getAccumulatedList(points),
        goals: DataSeriesUtil.getAccumulatedList(goals),
        assists: DataSeriesUtil.getAccumulatedList(assists),
        matchesPlayed
      };
    });
    this.data = [
      {
        name: 'Points',
        series: DataSeriesUtil.mapToDataSeries(this.player.points)
      },
      {
        name: 'Goals',
        series: DataSeriesUtil.mapToDataSeries(this.player.goals)
      },
      {
        name: 'Assists',
        series: DataSeriesUtil.mapToDataSeries(this.player.assists)
      }];

    this.accData = [
      {
        name: 'Points',
        series: DataSeriesUtil.mapToCummulativeDataSeries(this.player.points)
      },
      {
        name: 'Goals',
        series: DataSeriesUtil.mapToCummulativeDataSeries(this.player.goals)
      },
      {
        name: 'Assists',
        series: DataSeriesUtil.mapToCummulativeDataSeries(this.player.assists)
      }];
  }

  parseNumberArray(values: string): number[] {
    return values.split(',')
      .map(value => parseInt(value, 10));
  }

  getPointsAverage(points: number[], matchesPlayed: number) {
    const totalPoints = DataSeriesUtil.sumValues(points);
    return matchesPlayed !== 0
      ? (totalPoints / matchesPlayed).toFixed(2)
      : 0;
  }
}
