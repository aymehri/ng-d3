import { Component, OnInit } from '@angular/core';

import { single, multi } from './data';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  single: any[];
  multi: any[];

  gradient = false;

  view: any[] = [700, 400];

  // options
  showLegend = true;

  colorScheme = {
    domain: [ '#002941', '#D8B26B', '#4C4C4D', '#71C7B0', '#A74166', '#006372', '#5DB6D8', '#0d668f', '#b54049', '#1D4262']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor() {
    Object.assign(this, { single, multi })
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
