import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AppearanceToggleComponent } from '../appearance-toggle/appearance-toggle.component';
import { AppearanceService } from '../../services';

@Component({
  selector: 'app-header',
  imports: [AppearanceToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private appearanceService = inject(AppearanceService);
  currentAppearance = this.appearanceService.currentAppearance;

  onToggleAppearance(): void {
    this.appearanceService.toggleAppearance();
  }
}
