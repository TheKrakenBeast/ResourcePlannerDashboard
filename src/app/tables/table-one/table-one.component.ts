import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../config/config.service';
import {Config} from '../../config/Config';

@Component({
  selector: 'app-table-one',
  templateUrl: './table-one.component.html',
  styleUrls: ['./table-one.component.scss']
})
export class TableOneComponent implements OnInit {

  config: Config;
  endpoint = '/open-seats-date';
  customHeaders: any = {
    thead: ['ID', 'Title', 'Start date', 'End date'], // the Column Name in table head.
    displayed: ['open_seat_id', 'open_seat_title', 'start_date', 'end_date'] // the data it should populate in table.
  };

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
