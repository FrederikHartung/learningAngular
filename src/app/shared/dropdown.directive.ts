import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  showDropdown: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  toggleDropdown() {
    console.log('toggleDropdown');
    if (this.showDropdown) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    } else {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    }
    this.showDropdown = !this.showDropdown;
  }

  @HostListener('click') onClick(eventData: Event) {
    this.toggleDropdown();
  }
}
