import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { GridItemComponent } from './grid/grid-item/grid-item.component';
import { GridItemStatusComponent } from './grid/grid-item/grid-item-status/grid-item-status.component';
import { ConfigService } from './config.service';

export function appInit(configService: ConfigService) {
  return () => configService.load();
}

@NgModule({
  declarations: [
    GridComponent,
    GridItemComponent,
    GridItemStatusComponent,
    AppComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [ConfigService, {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    multi: true,
    deps: [ConfigService]
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}