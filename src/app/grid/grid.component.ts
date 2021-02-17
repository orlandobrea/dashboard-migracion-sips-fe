import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  list: any = [];
  error: any = undefined;

  constructor(private service: DashboardService) {}

  async hacerPeticion() {
    try {
      this.service.getDashboard().subscribe((r: any) => {
        this.list = r;
        this.error = undefined;
        setTimeout(() => this.hacerPeticion(), 10 * 60 * 1000);
      });
    } catch (e: any) {
      console.log('error', e);
      setTimeout(() => this.hacerPeticion(), 10 * 1000);
      this.error = e;
    }
  }

  ngOnInit() {
    this.hacerPeticion();
  }
}
