import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-stand-alone-example',
  templateUrl: './stand-alone.component.html',
  styleUrls: ['./stand-alone.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandAloneComponent implements OnInit {
  public dateTime3: Date[];
  //0- jan , 11-dec
  public min = new Date(2021, 1, 12);
  public max = new Date(2021, 2, 30);

  handleClick(event) {
    console.log(event);
  }
  constructor() {}

  ngOnInit() {}
}
