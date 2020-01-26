import {Component, Input, OnInit} from '@angular/core';
import {StatPerPlayer} from '../../../models/stat-per-player.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() player: StatPerPlayer;
  @Input() title: string;

  multi: any[];

  view: any[] = [700, 300];

  // options
  legend = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Matches played';
  yAxisLabel = 'Points';


  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
  }

  ngOnInit() {
    this.multi = [
      {
        name: 'Points',
        series: this.mapToDataSeries(this.player.points)
      },
      {
        name: 'Goals',
        series: this.mapToDataSeries(this.player.goals)
      },
      {
        name: 'Assists',
        series: this.mapToDataSeries(this.player.assists)
      }];
  }

  mapToDataSeries(values: number[]) {
    const objects = [];
    values.forEach((value, index) => objects.push({name: index + 1, value}));
    return objects;
  }

  displayOnlyIntegers(value: number) {
    if (value % 1 === 0) {
      return value;
    }
    return '';
  }
}
