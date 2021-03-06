import {Component, Input, OnInit} from '@angular/core';
import {DataSeries} from '../../../models/data-series.model';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() dataSeries: DataSeries[];

  // todo: larsne Graph should cover screen (be much larger)
  view: any[] = [900, 500];

  // options
  legend = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Matches played';
  yAxisLabel = 'Points';
  xTicks: number[];

  colorScheme = {
    domain: [
      '#5AA454',
      '#E44D25',
      '#CFC0BB',
      '#7aa3e5',
      '#a8385d',
      '#aae3f5',
      '#000000',
      '#aaaaaa',
      '#eeeeee'
      // todo larsne: Add more colors here. Should maybe be parameterized for different usages?
      // Or can this component define a lot of colors, and it will only use the one it needs.
    ]
  };

  constructor() {
  }

  ngOnInit() {
    this.xTicks = this.getXTicks();
  }

  getXTicks() {
    const ticks = [];
    for (let i = 1; i < this.dataSeries[0].series.length; i++) {
      ticks.push(i);
    }
    return ticks;
  }

  displayOnlyIntegers(value: number) {
    if (value % 1 === 0) {
      return value;
    }
    return '';
  }
}
