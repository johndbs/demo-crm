import { Directive, ElementRef, Host, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightSelected]'
})
export class HighlightSelectedDirective {


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event']) 
  onClick(): void {
    const siblings = this.el.nativeElement.parentElement.children;
    for(let sibling of siblings){
      this.renderer.removeClass(sibling, 'highlight');
    }
    this.renderer.addClass(this.el.nativeElement, 'highlight');
  }

}
