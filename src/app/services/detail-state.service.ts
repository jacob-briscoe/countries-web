import { inject, Injectable, signal } from '@angular/core';
import { CountryService } from './country.service';
import { Country } from '../model';
import { Observable, of, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailStateService {
  private countryService = inject(CountryService);
  private countryDetail = signal<Country | undefined>(undefined);
  private loadedCountries = signal<Map<Country['alpha3Code'], Country>>(
    new Map(),
  );

  loadCountry(countryId: string): Observable<Country | undefined> {
    if (this.loadedCountries().has(countryId)) {
      return of(this.loadedCountries().get(countryId)!).pipe(
        tap((country) => this.countryDetail.set(country)),
      );
    }

    return this.countryService.getCountryByCode(countryId).pipe(
      take(1),
      tap((country) => {
        if (!country) {
          return;
        }

        this.loadedCountries.update((prev) =>
          new Map(prev).set(country.alpha3Code, country),
        );

        this.countryDetail.set(country);
      }),
    );
  }

  get country() {
    return this.countryDetail.asReadonly();
  }
}
