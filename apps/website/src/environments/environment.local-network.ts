import { AppSettings } from 'settings';

export const environment = {
  production: false,
  appSettings: {
    protocol: 'http',
    serverAddress: 'somenetworkaddy',
    port: 1000,
    path: 'api/resources',
  } as AppSettings,
};
