import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

// this is the ng generated directive
// the one that

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  // call the renderer method that was passed into the constructor
  // access the setStyle method that comes along with it
  // pass in the elRef, which is a private dealie that is a local version of the ElementRef that comes built in to angular
  // then get the nativeElement, which defines which element we want to style (the one that's defined in the selector up above)
  // second argument is the style ref
  // third is the style
  // fourth is optional, has some flags like !important
  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
}
