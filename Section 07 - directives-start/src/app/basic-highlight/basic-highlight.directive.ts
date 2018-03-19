// this is a file just for a directive

import { Directive, OnInit, ElementRef } from '@angular/core';

// pass the imported decorator an object to describe it
// if you use square brackets here, then you don't need them in the template
@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  // this syntax
    // 'private': makes it a property of this directive
    // elementRef: arbitrary name
    // required typescript 'type' of argument that shows what it is
  constructor(private elementRef: ElementRef) {
  }
  
  // custom directives only have a few of the lifecycle methods, like OnInit
  // (but not any of the ones that pertain to a view, because a directive doesn't have a view, you dumdum)
  
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}

// apparently this is not a good way of doing things, it's just for illustration. which is cool, i guess, whatever.

// instead do ng g d (ng generate directive)