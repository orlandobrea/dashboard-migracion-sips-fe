import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-item-status',
  templateUrl: './grid-item-status.component.html',
  styleUrls: ['./grid-item-status.component.css'],
})
export class GridItemStatusComponent implements OnInit {
  @Input() titulo: string = '';

  @Input() horaDesdeSync: any;

  @Input() horaInicioSync: any;

  constructor() {}

  ngOnInit(): void {}
}
