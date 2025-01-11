import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { IconComponent } from '../../../../components/icon/icon.component';
import { TitleCasePipe } from '@angular/common';
import { ClickOutsideDirective } from '../../../../directives/click-outside.directive';
import type { Region } from '../../../../model';

@Component({
  selector: 'app-region-filter',
  imports: [IconComponent, TitleCasePipe, ClickOutsideDirective],
  templateUrl: './region-filter.component.html',
  styleUrl: './region-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionFilterComponent {
  regions = input.required<Region[]>();
  region = input<Region>();
  selectedRegion = output<Region | undefined>();
  private readonly defaultSelectedOption = 'Filter by Region';
  private readonly noneSelectionOption = 'None';

  isOpen = signal<boolean>(false);
  expansionIcon = computed(() =>
    this.isOpen() ? 'expand_less.svg' : 'expand_more.svg',
  );
  selectableRegions = computed(() => [
    this.noneSelectionOption,
    ...this.regions(),
  ]);
  selectedOption = computed(() => {
    const selectedRegion = this.region();

    if (!selectedRegion) {
      return this.defaultSelectedOption;
    }

    return selectedRegion;
  });

  constructor() {
    effect(() => {
      const option = this.selectedOption();

      if (option !== this.defaultSelectedOption) {
        this.isOpen.set(false);
      }
    });
  }

  toggleDropdown() {
    this.isOpen.update((prev) => !prev);
  }

  maybeCloseDropdown() {
    if (!this.isOpen()) {
      return;
    }

    this.toggleDropdown();
  }

  selectOption(option: Region) {
    const emptySelectionOptions = [
      this.noneSelectionOption,
      this.defaultSelectedOption,
    ];

    const selectedRegionValue = emptySelectionOptions.includes(option)
      ? undefined
      : option;

    this.selectedRegion.emit(selectedRegionValue);
  }
}
