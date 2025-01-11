import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { DetailTopBarComponent } from './components/detail-top-bar/detail-top-bar.component';
import { DetailStateService, LayoutService } from '../../services';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { RouterLink } from '@angular/router';
import { compareStrings } from '../../utils';

@Component({
  selector: 'app-detail',
  imports: [DetailTopBarComponent, CommonModule, ButtonComponent, RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent {
  id = input.required<string>();

  private detailStateService = inject(DetailStateService);

  private country = this.detailStateService.country;
  isMobile = inject(LayoutService).isMobile;

  model = computed(() => {
    const {
      flags: { svg: flag },
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borders,
    } = this.country()!;

    return {
      flag,
      name,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain: topLevelDomain.join(', '),
      currencies: currencies
        .map(({ name }) => name)
        .sort(compareStrings)
        .join(', '),
      languages: languages
        .map(({ name }) => name)
        .sort(compareStrings)
        .join(', '),
      borders: borders.sort((a, b) => compareStrings(a.name, b.name)),
    };
  });
}
