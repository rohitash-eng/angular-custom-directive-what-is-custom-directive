import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appShowError]'
})
export class ShowErrorDirective {

  constructor(
    private readonly el: ElementRef, 
    private readonly renderer: Renderer2,
    private readonly ngControl: NgControl
    ) { }

  @HostListener('blur') onBlur(){
    
    if((this.ngControl.touched || this.ngControl.dirty) && this.ngControl.invalid) {
      this.renderer.removeClass(this.el.nativeElement, 'is-valid');
      this.renderer.addClass(this.el.nativeElement, 'is-invalid');
    }

    if((this.ngControl.touched || this.ngControl.dirty) && this.ngControl.valid) {
      this.renderer.removeClass(this.el.nativeElement, 'is-invalid');
      this.renderer.addClass(this.el.nativeElement, 'is-valid');
      // example
      // const errSpan = '<span style="color:red;" id="' + 'rohitash' + '">' + "error" + '</span>';
      // this.el.nativeElement.parentElement.insertAdjacentHTML('beforeend', errSpan);
    }

  }

}
