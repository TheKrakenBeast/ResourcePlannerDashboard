import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../config/config.service';
import {Config} from '../../config/Config';

@Component({
  selector: 'app-table-two',
  templateUrl: './table-two.component.html',
  styleUrls: ['./table-two.component.scss']
})
export class TableTwoComponent implements OnInit {

  config: Config;
  endpoint = '/candidate-tracking-ballarat';
  customHeaders: any = {
    thead: ['ID', 'Title', 'Proposed', 'Selected', 'Status', 'Start date', 'End date'], // the Column Name in table head.
    displayed: ['open_seat_id', 'open_seat_title', 'proposed_names', 'selected_names', 'candidate_tracking_status', 'start_date', 'end_date'] // the data it should populate in table.
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
