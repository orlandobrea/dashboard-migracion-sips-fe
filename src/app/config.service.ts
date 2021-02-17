import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  config: any = undefined;

  constructor(private http: HttpClient) {}

  getConfig() {
    if (this.config) {
      return of(this.config);
    } else {
      return this.http.get('/assets/settings.json').pipe(
        tap((r: any) => {
          this.config = r;
        })
      );
    }
  }
}
