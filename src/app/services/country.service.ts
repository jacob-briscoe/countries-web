import { Injectable } from '@angular/core';
import type { Country } from '../model';
import data from '../data.json';
import { map, type Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  loadCountries(): Observable<Country[]> {
    return of(this.loadData()).pipe(
      map((countries) =>
        countries.sort((a, b) => a.name.localeCompare(b.name)),
      ),
    );
  }

  getCountryByCode(code: string): Observable<Country | undefined> {
    return this.loadCountries().pipe(
      map((countries) =>
        countries.find(({ alpha3Code }) => alpha3Code === code),
      ),
    );
  }

  private loadData(): Country[] {
    return data.map((country) => {
      return {
        ...country,
        currencies: country.currencies ?? [],
        borders:
          country.borders?.map((border) => {
            const borderCountry = data.find((c) => c.alpha3Code === border)!;
            return {
              name: borderCountry.name,
              alpha3Code: border,
            };
          }) ?? [],
      };
    }) as Country[];
  }
}
