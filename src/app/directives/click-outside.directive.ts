import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  output,
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]',
})
export class ClickOutsideDirective {
  appClickOutside = output<void>();
  elementRef = inject(ElementRef);

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: HTMLElement): void {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);

    if (clickedInside) {
      return;
    }

    this.appClickOutside.emit();
  }
}
