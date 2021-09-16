import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit, AfterViewInit {
  list: any = [];
  filter: string = '';
  error: any = undefined;
  loading = false;

  @ViewChild('search') search: ElementRef = {} as ElementRef;

  constructor(private service: DashboardService) {}

  async hacerPeticion() {
    const handleError = (err: any) => {
      this.error = err;
      this.loading = false;
      setTimeout(() => this.hacerPeticion(), 10 * 1000);
    };
    this.loading = true;
    this.service.getDashboard().subscribe((r: any) => {
      this.list = r;
      this.error = undefined;
      this.loading = false;
      setTimeout(() => this.hacerPeticion(), 10 * 60 * 1000);
    }, handleError);
  }

  ngOnInit() {
    this.hacerPeticion();
  }
   
  ngAfterViewInit() {
    this.search.nativeElement.focus();
  }
}
