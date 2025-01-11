import { computed, inject, Injectable, signal } from '@angular/core';
import { CountryService, RegionService } from '.';
import { tap } from 'rxjs';
import type { Country, Region } from '../model';

@Injectable({
  providedIn: 'root',
})
export class DashboardStateService {
  private countryService = inject(CountryService);
  private regionService = inject(RegionService);

  private allCountries = signal<Country[]>([]);
  private allRegions = signal<Region[]>([]);

  private searchInput = signal<string | undefined>(undefined);
  private selectedRegion = signal<Region | undefined>(undefined);

  private filteredCountries = computed(() => {
    const allCountries = this.allCountries();
    const maybeSearchInput = this.searchInput();
    const maybeSelectedRegion = this.selectedRegion();

    const applyFilters = !!maybeSelectedRegion || !!maybeSearchInput;

    if (!applyFilters) {
      return allCountries;
    }

    let filteredCountries = allCountries;

    if (maybeSearchInput) {
      filteredCountries = this.applyFilterBySearchInput(
        filteredCountries,
        maybeSearchInput,
      );
    }

    if (maybeSelectedRegion) {
      filteredCountries = this.applyFilterByRegion(
        filteredCountries,
        maybeSelectedRegion,
      );
    }

    return filteredCountries;
  });

  loadCountries() {
    return this.countryService
      .loadCountries()
      .pipe(tap((countries) => this.allCountries.set(countries)));
  }

  loadRegions() {
    return this.regionService
      .loadRegions()
      .pipe(tap((regions) => this.allRegions.set(regions)));
  }

  searchCountry(searchInput?: string) {
    this.searchInput.set(searchInput);
  }

  selectRegion(region?: Region) {
    this.selectedRegion.set(region);
  }

  get countries() {
    return this.filteredCountries;
  }

  get regions() {
    return this.allRegions.asReadonly();
  }

  get region() {
    return this.selectedRegion.asReadonly();
  }

  get searchQuery() {
    return this.searchInput.asReadonly();
  }

  private applyFilterBySearchInput(countries: Country[], searchInput: string) {
    return countries.filter(this.filterBySearchInput(searchInput));
  }

  private applyFilterByRegion(countries: Country[], region: Region) {
    return countries.filter(this.filterByRegion(region));
  }

  private filterBySearchInput(searchInput: string) {
    return (country: Country) =>
      country.name.toLowerCase().includes(searchInput);
  }

  private filterByRegion(region: Region) {
    return (country: Country) =>
      country.region.toLowerCase() === region.toLowerCase();
  }
}
