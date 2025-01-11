import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DashboardStateService } from '../../services';
import { combineLatest, map, type Observable } from 'rxjs';

export const dashboardResolver: ResolveFn<Observable<boolean>> = () => {
  const stateService = inject(DashboardStateService);

  return combineLatest([
    stateService.loadCountries(),
    stateService.loadRegions(),
  ]).pipe(
    map(([countries, regions]) => countries.length > 0 && regions.length > 0),
  );
};
