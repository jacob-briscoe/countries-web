import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DashboardTopBarComponent } from './components/dashboard-top-bar/dashboard-top-bar.component';
import { CountryGridComponent } from './components/country-grid/country-grid.component';
import { DashboardStateService, LayoutService } from '../../services';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardTopBarComponent, CountryGridComponent, NgClass],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private dashboardStateService = inject(DashboardStateService);
  countries = this.dashboardStateService.countries;
  isMobile = inject(LayoutService).isMobile;
}
