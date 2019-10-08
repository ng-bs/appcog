import { Injectable, InjectionToken, Inject } from '@angular/core';

export const AppSettingsKey = 'appSettingsValues';

export interface AppSettings {
  protocol: 'http' | 'https';
  port: number;
  serverAddress: string;
  path: string;
}

export const AppSettingsToken = new InjectionToken<AppSettings>('APP_SETTINGS_TOKEN');

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  readonly apiUrl: string;

  constructor(@Inject(AppSettingsToken) appSettings: AppSettings) {
    this.apiUrl = `${appSettings.protocol}://${appSettings.serverAddress}:${appSettings.port}/${appSettings.path}`;
  }
}
