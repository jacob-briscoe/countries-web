import { Routes } from '@angular/router';
import { dashboardResolver } from './dashboard/dashboard.resolver';
import { detailResolver } from './detail/detail.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent,
      ),
    resolve: {
      data: dashboardResolver,
    },
  },
  {
    path: 'country/:id',
    loadComponent: () =>
      import('./detail/detail.component').then((c) => c.DetailComponent),
    resolve: {
      data: detailResolver,
    },
  },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (c) => c.NotFoundComponent,
      ),
  },
];
