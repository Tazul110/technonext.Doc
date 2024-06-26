import { Injectable } from '@angular/core';
import { fromEvent, lastValueFrom, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDarkModeService {
  private enabledDarkMode$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isDarkModeEnabled());

  constructor() {
    this.detectAndToggleDarkMode();
    this.detectBrowserModeChanges();
  }

  get isEnabledDarkMode$(): BehaviorSubject<boolean> {
    return this.enabledDarkMode$;
  }

  async toggleDarkMode(): Promise<void> {
    const currentMode = await lastValueFrom(this.enabledDarkMode$);
    const newMode = !currentMode;
    this.enabledDarkMode$.next(newMode);
  }

  private async detectAndToggleDarkMode(): Promise<void> {
    const isDarkMode = this.detectDarkModeFromBrowser();
    this.enabledDarkMode$.next(isDarkMode);
  }

  private detectDarkModeFromBrowser(): boolean {
    return this.isDarkModeEnabled();
  }

  private isDarkModeEnabled(): boolean {
    if (typeof window !== "undefined") {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  }

  async modeClass(): Promise<string> {
    const currentMode = await lastValueFrom(this.enabledDarkMode$);
    return currentMode ? "dark" : "light";
  }

  private detectBrowserModeChanges(): void {
    if (typeof window !== "undefined") {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const modeChange$ = fromEvent<MediaQueryListEvent>(darkModeMediaQuery, 'change');

      modeChange$.subscribe(event => {
        const isDarkMode = event.matches;
        this.enabledDarkMode$.next(isDarkMode);
      });
    }
  }
}
