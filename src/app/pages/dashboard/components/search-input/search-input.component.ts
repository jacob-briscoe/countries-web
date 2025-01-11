import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  type OnInit,
  output,
} from '@angular/core';
import { LayoutService } from '../../../../services';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../../../components/icon/icon.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  imports: [CommonModule, IconComponent, ReactiveFormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements OnInit {
  searchQuery = input<string | undefined>();
  searchInputChange = output<string | undefined>();

  searchCountry = new FormControl<string | null>(null);

  isMobile = inject(LayoutService).isMobile;
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.searchCountry.patchValue(this.searchQuery() ?? null);

    this.searchCountry.valueChanges
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter((value) => value != null),
        debounceTime(450),
        map((value) => value.trim().toLowerCase()),
        distinctUntilChanged(),
        map((value) => (value.length > 0 ? value : undefined)),
        tap((value) => this.searchInputChange.emit(value)),
      )
      .subscribe();
  }
}
