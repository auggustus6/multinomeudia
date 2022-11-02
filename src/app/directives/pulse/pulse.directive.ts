import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[multiPulse]'
})
export class PulseDirective {

  constructor(renderer: Renderer, el: ElementRef) {
    renderer.setElementClass(el.nativeElement, 'animated', true);
    renderer.setElementClass(el.nativeElement, 'infinite', true);
    renderer.setElementClass(el.nativeElement, 'pulse', true);
  }

}
