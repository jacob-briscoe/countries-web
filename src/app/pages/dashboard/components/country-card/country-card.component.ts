import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Country } from '../../../../model';
import { CountryCardDetailComponent } from '../country-card-detail/country-card-detail.component';

@Component({
  selector: 'app-country-card',
  imports: [CountryCardDetailComponent],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryCardComponent {
  country = input.required<Country>();
}
