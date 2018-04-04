import { Component, OnInit } from '@angular/core';
import { single, multi } from './data';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: [ '#002941', '#D8B26B', '#4C4C4D', '#71C7B0', '#A74166', '#006372', '#5DB6D8', '#0d668f', '#b54049', '#1D4262']
  };

  // line, area
  autoScale = true;

  constructor() {
    Object.assign(this, { single, multi });
  }

  ngOnInit() {
  }

}
