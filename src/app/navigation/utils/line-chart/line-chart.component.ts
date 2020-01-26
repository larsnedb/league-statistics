import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() title: string;
  @Input() dataSeries: any;

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
    domain: [
      '#5AA454',
      '#E44D25',
      '#CFC0BB',
      '#7aa3e5',
      '#a8385d',
      '#aae3f5',
      '#000000'
      // todo larsne: Add more colors here. Should maybe be parameterized for different usages?
      // Or can this component define a lot of colors, and it will only use the one it needs.
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

  displayOnlyIntegers(value: number) {
    if (value % 1 === 0) {
      return value;
    }
    return '';
  }
}
