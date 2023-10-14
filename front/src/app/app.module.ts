import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';

const mapConfig: YaConfig = {
  apikey: 'API_KEY',
  lang: 'en_US',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularYandexMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
