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
  public min = new Date(2021, 1, 12);
  public max = new Date(2021, 2, 30);

  handleClick(event) {
    console.log(event);
    if (event === 'today') {
      let selectedDate = [];
      let startDate = new Date();
      let endDate = new Date();
      selectedDate.push(startDate);
      selectedDate.push(endDate);
      this.dateTime3.push(selectedDate);
      console.log('date', selectedDate, dateTime3);
    }
  }
  handleCalendar(value) {
    console.log(value);
  }
  constructor() {}

  ngOnInit() {}
}
