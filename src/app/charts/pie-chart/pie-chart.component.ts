import {Component, OnInit} from '@angular/core';
import {Config} from '../../config/Config';
import {ConfigService} from '../../config/config.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  config: Config;
  endpoint = '/ballarat-seats';

  // options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;
  legendPosition = 'above';

  colorScheme = {
    domain: ['#9bbfd4', '#4b9cc0', '#0273b9', '#607e9e', '#bfd1d7', '#1a78d5']
  };
  cardColor = '#c2e6f1';

  constructor(private chartService: ConfigService) {
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.chartService.getData(this.endpoint)
      .subscribe((data: Config) => this.config = {
        response: (data as any).response
      });
  }


}
