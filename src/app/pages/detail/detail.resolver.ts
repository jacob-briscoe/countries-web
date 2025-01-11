import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { DetailStateService } from '../../services';
import { map } from 'rxjs';

export const detailResolver: ResolveFn<boolean> = (route) => {
  const router = inject(Router);
  const stateService = inject(DetailStateService);

  return stateService.loadCountry(route.params['id']).pipe(
    map((country) => {
      if (!country) {
        return new RedirectCommand(router.parseUrl('/404'));
      }

      return true;
    }),
  );
};
