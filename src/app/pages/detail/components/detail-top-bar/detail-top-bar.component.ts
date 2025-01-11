import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { IconComponent } from '../../../../components/icon/icon.component';
import { ButtonComponent } from '../../../../components/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-top-bar',
  imports: [IconComponent, ButtonComponent, RouterLink],
  templateUrl: './detail-top-bar.component.html',
  styleUrl: './detail-top-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailTopBarComponent {
  countryId = input.required<string>();
}
