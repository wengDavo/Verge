import { InjectionToken } from "@angular/core";

export const THEME_CONFIG_TOKEN = new InjectionToken<string | null>("theme description", {
    providedIn: 'root',
    factory: () => localStorage.getItem('theme')
});