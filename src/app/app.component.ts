import { Component, OnInit } from '@angular/core';
import { version } from '../../package.json';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { ServerVersion } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  appVersion = version;
  serverVersion: string = '';
  constructor(private http: HttpClient, private configService: ConfigService) {}

  ngOnInit() {
    this.http
      .get<ServerVersion>(`${this.configService.getConfig().server}/version`)
      .subscribe(
        (r) => {
          this.serverVersion = r.version;
        },
        (_) => {
          this.serverVersion = '-';
        }
      );
  }
}
