import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConfigService } from './config.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  endpoint: string = '/';
  config: any = {};

  constructor(private http: HttpClient, private configService: ConfigService) {}

  minutesFrom(from: Date) {
    const response = from
      ? moment(new Date()).diff(moment.utc(from), 'hours')
      : null;
    return response;
  }

  applyTimezoneToDate(date: Date) {
    return moment.utc(date).utcOffset('-0300', true).toDate();
  }

  getDashboard() {
    const server = this.configService.getConfig().server;
    return this.http.get(`${server}${this.endpoint}`).pipe(
      map((list: any) =>
        list
          .filter((item: any) => item.nombreEfector)
          .map((item: any) => {
            return {
              servidor: item.nombreEfector,
              horasDesdeUltimoSync: this.minutesFrom(item.ultimoSyncFechaFin),
              horasDesdeUltimoSyncEfector: this.minutesFrom(
                item.ultimoUpdateEfectorFin
              ),
              horaInicioUltimoSync: this.applyTimezoneToDate(
                item.ultimoSyncFechaInicio
              ),
              horaFinUltimoSync: this.applyTimezoneToDate(
                item.ultimoSyncFechaFin
              ),
              horaInicioUltimoSyncEfector: this.applyTimezoneToDate(
                item.ultimoUpdateEfectorInicio
              ),
              horaFinUltimoSyncEfector: this.applyTimezoneToDate(
                item.ultimoUpdateEfectorFin
              ),
            };
          })
      )
    );
  }
}
