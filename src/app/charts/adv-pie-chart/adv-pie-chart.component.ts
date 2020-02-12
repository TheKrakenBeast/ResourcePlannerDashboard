import {Component, OnInit} from '@angular/core';
import {Config} from '../../config/Config';
import {ConfigService} from '../../config/config.service';

@Component({
  selector: 'app-adv-pie-chart',
  templateUrl: './adv-pie-chart.component.html',
  styleUrls: ['./adv-pie-chart.component.scss']
})
export class AdvPieChartComponent implements OnInit {
  config: Config;
  endpoint = '/ballarat-seats';
  view: any[] = [400, 400];
  colorScheme = {
    domain: ['#9bbfd4', '#4b9cc0', '#c2e6f1', '#607e9e', '#bfd1d7']
  };
  gradient = true;
  showLegend = false;
  showLabels = false;
  isDoughnut = false;

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

}
