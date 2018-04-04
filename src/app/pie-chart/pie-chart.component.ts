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
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
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
