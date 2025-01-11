import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { AppearanceService } from '../../services';

@Component({
  selector: 'app-icon',
  imports: [],
  template: `
    <img [src]="src()" [alt]="alt()" [width]="width()" [height]="height()" />
  `,
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  baseIconFileName = input.required<string>();
  width = input<number>(24);
  height = input<number>(24);
  alt = input<string>('');
  disableAppearance = input<boolean, unknown>(false, {
    transform: booleanAttribute,
  });

  appearance = inject(AppearanceService).currentAppearance;

  src = computed(() => {
    const iconPath = ['/icons'];
    const baseIconFileName = this.baseIconFileName();
    const disableAppearance = this.disableAppearance();

    if (disableAppearance) {
      iconPath.push(baseIconFileName);
    } else {
      iconPath.push(`${this.appearance()}_${baseIconFileName}`);
    }

    return iconPath.join('/');
  });
}
