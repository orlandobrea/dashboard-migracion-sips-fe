import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ping-status',
  templateUrl: './ping-status.component.html',
  styleUrls: ['./ping-status.component.css']
})
export class PingStatusComponent implements OnInit {

  @Input()
  status: string = '-';

  constructor() { }

  ngOnInit(): void {
  }

}
