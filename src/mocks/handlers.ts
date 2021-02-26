import { rest } from 'msw';
import * as moment from 'moment'
export const handlers = [
  rest.get('http://localhost:3000/', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          ultimoSyncFechaInicio: moment().subtract(1, 'hour').toJSON(),
          ultimoSyncFechaFin: moment().subtract(1, 'hour').toJSON(),
          ultimoSyncRegistrosEncabezado: 734,
          tablaEncabezado: 'LAB_Temp_AResultadoEncabezado',
          tablaDetalle: 'LAB_Temp_AResultadoDetalle',
          ultimoUpdateEfectorInicio: moment().subtract(2, 'hour').toJSON(),
          ultimoUpdateEfectorFin: moment().subtract(2, 'hour').toJSON(),
          idEfector: 1,
          ultimoSyncRegistrosDetalle: 11722,
          minutosMinimoSyncEfector: 1,
          minutosMinimoSyncPrincipal: 1,
          NombreServidor: 'SERVER01',
        },
        {
          ultimoSyncFechaInicio: moment().subtract(1, 'hour').toJSON(),
          ultimoSyncFechaFin: moment().subtract(1, 'hour').toJSON(),
          ultimoSyncRegistrosEncabezado: 349,
          tablaEncabezado: 'LAB_Temp_BResultadoEncabezado',
          tablaDetalle: 'LAB_Temp_BResultadoDetalle',
          ultimoUpdateEfectorInicio: moment().subtract(2, 'hour').toJSON(),
          ultimoUpdateEfectorFin: moment().subtract(30, 'hour').toJSON(),
          idEfector: 2,
          ultimoSyncRegistrosDetalle: 4990,
          minutosMinimoSyncEfector: 1,
          minutosMinimoSyncPrincipal: 1,
          NombreServidor: 'SERVER02',
        },
      ])
    );
  }),
  rest.get('http://localhost:3000/version', (req, res, ctx) =>
    res(ctx.json({ version: '3.4.5' }))
  ),
];
