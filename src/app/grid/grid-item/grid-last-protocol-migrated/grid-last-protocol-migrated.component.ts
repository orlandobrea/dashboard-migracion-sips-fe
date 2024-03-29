import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-last-protocol-migrated',
  templateUrl: './grid-last-protocol-migrated.component.html',
  styleUrls: ['./grid-last-protocol-migrated.component.css']
})
export class GridLastProtocolMigratedComponent implements OnInit {

  @Input() titulo: string = '';

  @Input() horaDesdeUltimoEstudio: any;

  @Input() fechaUltimoEstudioMigrado: any;

  diasDesdeUltimoEstudio: number;

  constructor() { 
    this.diasDesdeUltimoEstudio = 0;
  }

  ngOnInit(): void {
    this.diasDesdeUltimoEstudio = Math.floor(this.horaDesdeUltimoEstudio/24);
  }

}
