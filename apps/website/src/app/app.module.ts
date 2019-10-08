import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppSettingsToken, AppSettingsKey } from 'settings';
import { DOCUMENT } from '@angular/common';
import { environment } from '../environments/environment';

export function loadAppSettings(document: Document) {
  return environment.production
   ? document.defaultView[AppSettingsKey]
   : environment.appSettings;
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: AppSettingsToken,
      useFactory: loadAppSettings,
      deps: [DOCUMENT],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
