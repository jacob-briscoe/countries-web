import { effect, inject, Injectable, signal, type Signal } from '@angular/core';
import type { AppearanceType } from '../model/appearance.model';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../providers';

@Injectable({
  providedIn: 'root',
})
export class AppearanceService {
  private appearance = signal<AppearanceType>('light');
  private window = inject(WINDOW);
  private document = inject(DOCUMENT);

  constructor() {
    this.appearance.set(this.getUserPreference());

    effect(() => {
      const appearance = this.appearance();
      this.changeDocumentAppearance(appearance);
    });

    this.getPrefersDarkColorSchemeMatchMedia().addEventListener(
      'change',
      (event) => {
        const prefersDark = event.matches;

        this.appearance.set(prefersDark ? 'dark' : 'light');
      },
    );
  }

  get currentAppearance(): Signal<AppearanceType> {
    return this.appearance.asReadonly();
  }

  toggleAppearance(): void {
    this.appearance.update((current) =>
      current === 'light' ? 'dark' : 'light',
    );
  }

  private changeDocumentAppearance(appearance: AppearanceType): void {
    this.document.body.classList.toggle('dark-mode', appearance === 'dark');
  }

  private getUserPreference(): AppearanceType {
    const prefersDark = this.getPrefersDarkColorSchemeMatchMedia().matches;
    return prefersDark ? 'dark' : 'light';
  }

  private getPrefersDarkColorSchemeMatchMedia(): MediaQueryList {
    return this.window.matchMedia('(prefers-color-scheme: dark)');
  }
}
