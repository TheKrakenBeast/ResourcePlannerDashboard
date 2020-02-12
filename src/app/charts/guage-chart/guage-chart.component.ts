import { Component, OnInit } from '@angular/core';
import {Config} from '../../config/Config';
import {ConfigService} from '../../config/config.service';

@Component({
  selector: 'app-guage-chart',
  templateUrl: './guage-chart.component.html',
  styleUrls: ['./guage-chart.component.scss']
})
export class GuageChartComponent implements OnInit {
  config: Config;
  endpoint = '/ballarat-seats';
  view: any[] = [500, 500];
  colorScheme = {
    domain: ['#9bbfd4', '#4b9cc0', '#c2e6f1', '#607e9e', '#bfd1d7']
  };
  gradient = true;
  showLegend = false;
  showLabels = false;
  isDoughnut = false;
  legend = true;
  legendPosition = 'bottom';

  constructor(private chartService: ConfigService) {
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
  }

  onSelect(event) {
    console.log(event);
  }

  onActivate(event) {
    console.log(event);
  }

  onDeactivate(event) {
    console.log(event);
  }

  axisFormat(val) {
    if (val % 1 === 0) {
      return val.toLocaleString();
    } else {
      return '';
    }
  }


}
