import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }
}
