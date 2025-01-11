import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { AppearanceType } from '../../model/appearance.model';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-appearance-toggle',
  imports: [IconComponent],
  templateUrl: './appearance-toggle.component.html',
  styleUrl: './appearance-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppearanceToggleComponent {
  appearance = input.required<AppearanceType>();
  toggle = output<void>();

  oppositeAppearanceIcon = computed(() =>
    this.appearance() === 'light' ? 'dark_mode.svg' : 'light_mode.svg',
  );

  oppositeAppearanceLabel = computed(() =>
    this.appearance() === 'light' ? 'Dark Mode' : 'Light Mode',
  );

  onToggle(): void {
    this.toggle.emit();
  }
}
