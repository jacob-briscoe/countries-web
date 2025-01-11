import { inject, Injectable } from '@angular/core';
import { CountryService } from '.';
import { map, type Observable } from 'rxjs';
import type { Region } from '../model';

@Injectable({
  providedIn: 'root',
})
export class RegionService {
  countryService = inject(CountryService);

  loadRegions(): Observable<Region[]> {
    return this.countryService.loadCountries().pipe(
      map((countries) =>
        Array.from(new Set(countries.map(({ region }) => region))),
      ),
      map((regions) => regions.sort((a, b) => a.localeCompare(b))),
    );
  }
}
