import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-stand-alone-example',
  templateUrl: './stand-alone.component.html',
  styleUrls: ['./stand-alone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandAloneComponent implements OnInit {
  public dateTime3: Date[];
  //0 - jan , 11-dec
  public min = new Date(2021, 0, 1);
  public max = new Date(2021, 0, 20);

  handleSelect(event) {
    console.log('select', event);
  }
  handleCalendar(value) {
    const date = new Date();
    if (value == 'today') {
      this.dateTime3 = [
        date,
        new Date(date.getFullYear(), date.getMonth(), date.getDate()),
      ];
      console.log('today', this.dateTime3);
    } else if (value == 'week') {
      this.dateTime3 = [
        date,
        new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7),
      ];
      console.log('week', this.dateTime3);
    } else if (value == 'month') {
      this.dateTime3 = [
        date,
        new Date(date.getFullYear(), date.getMonth(), date.getDate() + 31),
      ];
      console.log('month', this.dateTime3);
    }
  }
  constructor() {}

  ngOnInit() {}
}
