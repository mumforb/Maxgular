import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

// this is the ng generated directive
// the one that

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  // custom binding in a custom directive
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  // now, this HostListener even more sexy
  // string matches which element we want to bind to
  // now we can
  @HostBinding('style.backgroundColor') backgroundColor: 'blue';


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  // call the renderer method that was passed into the constructor
  // access the setStyle method that comes along with it
  // pass in the elRef, which is a private dealie that is a local version of the ElementRef that comes built in to angular
  // then get the nativeElement, which defines which element we want to style (the one that's defined in the selector up above)
  // second argument is the style ref
  // third is the style
  // fourth is optional, has some flags like !important
  // this got moved down to the @HostListener methods below
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

 

  // this takes an event as an argument as a string
  // mouseenter is a 'listed' event
  // @HostListener, like, listens to host events. which is obvious, but i'm guessing it's pretty useful/powerful
  @HostListener('mouseenter') mouseover(EventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.highlightColor);
  }
  @HostListener('mouseleave') mouseleave(EventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'orange');
  }
}
