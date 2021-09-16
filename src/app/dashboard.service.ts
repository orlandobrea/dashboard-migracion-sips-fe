import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, timeout, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ConfigService } from './config.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  endpoint: string = '';
  config: any = {};

  constructor(private http: HttpClient, private configService: ConfigService) {}

  getDashboard() {
    // functions
    const hasName = (responseItem: any) => responseItem.nombreEfector;
    const applyTimezoneToDate = (date: Date) =>
      moment.utc(date).utcOffset('0000', true).toDate();
    const minutesFrom = (from: Date) =>
      from ? moment(new Date()).diff(moment.utc(from), 'hours') : null;
    const parseServerResponse = (responseItem: any) => ({
      servidor: responseItem.nombreEfector,
      idEfector: responseItem.idEfector,
      pingStatus: responseItem.pingStatus,
      horasDesdeUltimoSync: minutesFrom(responseItem.ultimoSyncFechaFin),
      horasDesdeUltimoSyncEfector: minutesFrom(
        responseItem.ultimoUpdateEfectorFin
      ),
      horaInicioUltimoSync: applyTimezoneToDate(
        responseItem.ultimoSyncFechaInicio
      ),
      horaFinUltimoSync: applyTimezoneToDate(responseItem.ultimoSyncFechaFin),
      horaInicioUltimoSyncEfector: applyTimezoneToDate(
        responseItem.ultimoUpdateEfectorInicio
      ),
      horaFinUltimoSyncEfector: applyTimezoneToDate(
        responseItem.ultimoUpdateEfectorFin
      ),
      horasDesdeUltimoEstudioMigrado: minutesFrom(responseItem.fechaUltimoEstudioMigrado)
    });

    const server = this.configService.getConfig().server;
    return this.http.get(`${server}${this.endpoint}`).pipe(
      timeout(10000),
      map((list: any) => list.filter(hasName).map(parseServerResponse)),
      catchError((e: any) => throwError('CONNECTION_ERROR'))
    );
  }
}
