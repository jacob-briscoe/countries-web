import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject, Injectable, type Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  isMobile: Signal<boolean>;
  private breakpointObserver = inject(BreakpointObserver);

  constructor() {
    this.isMobile = toSignal(
      this.breakpointObserver
        .observe([Breakpoints.Handset])
        .pipe(map((result) => result.matches)),
      { initialValue: false },
    );
  }
}
