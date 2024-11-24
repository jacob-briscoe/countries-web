import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (c) => c.DashboardComponent,
      ),
  },
  {
    path: 'country/:id',
    loadComponent: () =>
      import('./detail/detail.component').then((c) => c.DetailComponent),
  },
];
