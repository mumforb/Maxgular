import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // so, do something any time something changes, we want to execute a method 
  // set makes this property a method (set is a setter, which makes sense i guess)
  // but it's still a method
  // note that the name of the thing inputting here is the same as the selector,
  // which is the same as what the template is looking for
  @Input() set appUnless(condition: boolean) {
    // check to see if the condition is not true
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  // load a private instance of templateRef
  // its type is TemplateRef, which gets imported
  // its <> is generic, so it can be 'any'
  // second argument is where we should render it
  // vcRef is arbitrary
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
