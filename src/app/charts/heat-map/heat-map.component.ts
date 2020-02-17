import { Component, OnInit } from '@angular/core';
import { multi } from '../../data';
import {Config} from '../../config/Config';
import {ConfigService} from '../../config/config.service';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.scss']
})
export class HeatMapComponent implements OnInit {
  config: Config;
  endpoint = '/open-seats-date';

  multi: any[];
  // view: any[] = [700, 300];

  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Year';

  colorScheme = {
    domain: ['#9bbfd4', '#4b9cc0', '#0273b9', '#607e9e', '#bfd1d7', '#1a78d5']
  };

  constructor() {
    Object.assign(this, {multi});
  }

  ngOnInit(): void {
  }

  /*constructor(private chartService: ConfigService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.chartService.getData(this.endpoint)
      .subscribe(
        (data: Config) => this.config = {
          response: (data as any).response
        });
  }*/

  /*getData() {
    this.chartService.getData(this.endpoint)
      .subscribe(data => {
        data.response.map((n, i) => {
          this..push(n[0]);
          this.lineChartData[0]['data'].push(n[1]);
        });
      });
  }*/

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
