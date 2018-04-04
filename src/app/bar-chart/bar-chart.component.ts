import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  view: any[] = [700, 300];
  colorScheme = {
    domain: [ '#002941', '#D8B26B', '#4C4C4D', '#71C7B0', '#A74166', '#006372', '#5DB6D8', '#0d668f', '#b54049', '#1D4262']
  };
  schemeType = 'ordinal';
  multi = [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          value: 40632
        },
        {
          name: '2000',
          value: 36953
        },
        {
          name: '1990',
          value: 31476
        }
      ]
    },
    {
      name: 'United States',
      series: [
        {
          name: '2010',
          value: 49737
        },
        {
          name: '2000',
          value: 45986
        },
        {
          name: '1990',
          value: 37060
        }
      ]
    },
    {
      name: 'France',
      series: [
        {
          name: '2010',
          value: 36742
        },
        {
          name: '2000',
          value: 34773
        },
        {
          name: '1990',
          value: 29476
        }
      ]
    },
    {
      name: 'United Kingdom',
      series: [
        {
          name: '2010',
          value: 36240
        },
        {
          name: '2000',
          value: 32543
        },
        {
          name: '1990',
          value: 26424
        }
      ]
    }
  ];

  animations = true;
  gradient = false;
  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  legendTitle = 'Legend';
  showXAxisLabel = true;
  showYAxisLabel = true;
  tooltipDisabled = false;
  xAxisLabel = 'Country';
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  roundEdges = true;
  yScaleMax: number;

  constructor() { }

  ngOnInit() {
  }

}
