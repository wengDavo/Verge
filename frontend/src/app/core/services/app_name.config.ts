import { InjectionToken } from '@angular/core';

export const APP_NAME_TOKEN = new InjectionToken<string>('app name', {
  providedIn: 'root',
  factory: () => 'verge'
});
