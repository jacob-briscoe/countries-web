import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { RegionFilterComponent } from '../region-filter/region-filter.component';
import { CommonModule } from '@angular/common';
import { DashboardStateService, LayoutService } from '../../../../services';
import type { Region } from '../../../../model';

@Component({
  selector: 'app-dashboard-top-bar',
  imports: [CommonModule, SearchInputComponent, RegionFilterComponent],
  templateUrl: './dashboard-top-bar.component.html',
  styleUrl: './dashboard-top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardTopBarComponent {
  private dashboardStateService = inject(DashboardStateService);
  isMobile = inject(LayoutService).isMobile;
  regions = this.dashboardStateService.regions;
  searchQuery = this.dashboardStateService.searchQuery;
  region = this.dashboardStateService.region;

  onSearchInputChange(searchInput?: string) {
    this.dashboardStateService.searchCountry(searchInput);
  }

  onSelectedRegion(region?: Region) {
    this.dashboardStateService.selectRegion(region);
  }
}
