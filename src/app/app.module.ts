import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { GridItemComponent } from './grid/grid-item/grid-item.component';
import { GridItemStatusComponent } from './grid/grid-item/grid-item-status/grid-item-status.component';
import { ConfigService } from './config.service';
import { PingStatusComponent } from './grid/grid-item/ping-status/ping-status.component';
import { LoadingItemComponent } from './grid/grid-item/loading-item/loading-item.component';
import { GridLastProtocolMigratedComponent } from './grid/grid-item/grid-last-protocol-migrated/grid-last-protocol-migrated.component';
import { EfectorFilterPipe } from './grid/efector-filter.pipe';

export function appInit(configService: ConfigService) {
  return () => configService.load();
}

@NgModule({
  declarations: [
    GridComponent,
    GridItemComponent,
    GridItemStatusComponent,
    AppComponent,
    PingStatusComponent,
    LoadingItemComponent,
    GridLastProtocolMigratedComponent,
    EfectorFilterPipe,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [ConfigService, {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    multi: true,
    deps: [ConfigService]
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
