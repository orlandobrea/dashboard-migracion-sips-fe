import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { GridItemComponent } from './grid/grid-item/grid-item.component';
import { GridItemStatusComponent } from './grid/grid-item/grid-item-status/grid-item-status.component';

@NgModule({
  declarations: [GridComponent, GridItemComponent, GridItemStatusComponent, AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
