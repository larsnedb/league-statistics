import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StatPerPlayer} from '../../../models/stat-per-player.model';
import {DataSeriesUtil} from '../../utils/data-series.util';
import {DataSeries} from '../../../models/data-series.model';

@Component({
  selector: 'app-player-graph-component',
  templateUrl: './player-graph.component.html',
  styleUrls: ['./player-graph.component.css']
})
// todo: larsne Should split into smaller subcomponents? Maybe separate component for goals and penalties
export class PlayerGraphComponent implements OnInit {
  player: StatPerPlayer;
  accumulatedPlayer: StatPerPlayer;

  // todo: larsne Penalty graphs have "points" in y-axis
  perMatchTitle = 'Stats per match';
  accumulatedTitle = 'Accumulated stats';
  data: DataSeries[];
  accData: DataSeries[];
  penaltyData: DataSeries[];
  accPenaltyData: DataSeries[];

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
      const penalties = this.parseNumberArray(params['penalties']);

      this.player = {
        name,
        teamName,
        points,
        goals,
        assists,
        matchesPlayed,
        penalties
      };

      this.accumulatedPlayer = {
        name,
        teamName,
        points: DataSeriesUtil.getAccumulatedList(points),
        goals: DataSeriesUtil.getAccumulatedList(goals),
        assists: DataSeriesUtil.getAccumulatedList(assists),
        matchesPlayed,
        penalties: DataSeriesUtil.getAccumulatedList(penalties)
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

    this.penaltyData = [
      {
        name: 'Penalties',
        series: DataSeriesUtil.mapToDataSeries(this.player.penalties)
      }];

    this.accPenaltyData = [
      {
        name: 'Penalties',
        series: DataSeriesUtil.mapToCummulativeDataSeries(this.player.penalties)
      }];
  }

  parseNumberArray(values: string): number[] {
    return values.split(',')
      .map(value => parseInt(value, 10));
  }

  sumValues(values: number[]): number {
    return values.reduce((a, b) => a + b, 0);
  }

  getPointsAverage(points: number[], matchesPlayed: number) {
    const totalPoints = DataSeriesUtil.sumValues(points);
    return matchesPlayed !== 0
      ? (totalPoints / matchesPlayed).toFixed(2)
      : 0;
  }
}
