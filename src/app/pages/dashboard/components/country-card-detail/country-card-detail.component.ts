import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Country } from '../../../../model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-card-detail',
  imports: [DecimalPipe],
  templateUrl: './country-card-detail.component.html',
  styleUrl: './country-card-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryCardDetailComponent {
  country = input.required<Country>();
}
