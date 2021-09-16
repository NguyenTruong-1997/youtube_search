import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YtbSearchComponent } from './ytb-search/ytb-search.component';
import { YtbResultsComponent } from './ytb-results/ytb-results.component';

@NgModule({
  declarations: [
    AppComponent,
    YtbSearchComponent,
    YtbResultsComponent
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
