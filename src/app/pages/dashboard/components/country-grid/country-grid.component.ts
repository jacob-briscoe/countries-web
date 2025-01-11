import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CountryCardComponent } from '../country-card/country-card.component';
import type { Country } from '../../../../model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-grid',
  imports: [CountryCardComponent, RouterLink],
  templateUrl: './country-grid.component.html',
  styleUrl: './country-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryGridComponent {
  countries = input.required<Country[]>();
}
