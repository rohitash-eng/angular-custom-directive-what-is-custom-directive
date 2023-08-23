import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyCustomDirective]'
})
export class MyCustomDirectiveDirective {
  colorClass = ['bg-primary-subtle', 'bg-secondary-color'];
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    const color = this.getRandomColor();
    this.renderer.removeClass(this.el.nativeElement,'bg-primary-subtle');
    this.renderer.addClass(this.el.nativeElement,'bg-secondary-color');
    // this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
