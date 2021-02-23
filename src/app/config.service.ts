import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  config: any = undefined;

  constructor(private http: HttpClient) {}

  getConfig() {
    return this.config;
  }

  load() {
    return this.http.get('/assets/settings.json').pipe(
      tap((r: any) => {
        this.config = r;
      })
    ).toPromise();
  }
}
