import {Component, Input, OnInit} from '@angular/core';
import {StatPerPlayer} from '../../../models/stat-per-player.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() player: StatPerPlayer;
  multi: any[];

  view: any[] = [700, 300];

  // options
  legend = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Match';
  yAxisLabel = 'Points';


  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() { }

  ngOnInit() {
    this.multi = [
      {
        name: 'Points',
        series: [
          {
            name: 1,
            value: 5
          },
          {
            name: 2,
            value: 3
          },
          {
            name: 3,
            value: 4
          }
        ]
      },
      {
        name: 'Goals',
        series: [
          {
            name: 1,
            value: 1
          },
          {
            name: 2,
            value: 1
          },
          {
            name: 3,
            value: 3
          }
        ]
      },
      {
        name: 'Assists',
        series: [
          {
            name: 1,
            value: 4
          },
          {
            name: 2,
            value: 2
          },
          {
            name: 3,
            value: 1
          }
        ]
      }];
  }

}
