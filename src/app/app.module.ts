import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YtbSearchComponent } from './ytb/ytb-search/ytb-search.component';
import { YtbResultsComponent } from './ytb/ytb-results/ytb-results.component';
import { YtbComponent } from './ytb/ytb.component';

@NgModule({
  declarations: [
    AppComponent,
    YtbComponent,
    YtbSearchComponent,
    YtbResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
