import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // the {} lets typescript know what to expect
  // also, you need to add a decorator, or else it won't be available
  // so, @Input is publicly exposed and available
  // seems like it kind of makes it globally available between components
  // if you pass an argument to @Input, it's the alias you use in the template via binding
  @Input('srvElement') element: {type: string, name: string, content: string};
  


  // these are lifecycle hooks
  // you do have to import a lot of them, like
  // OnChanges or whatever
  constructor() {
    // this is sort of a lifecycle method too
  }
  
  //ngOnChanges(changes: SimpleChanges) {
    // this one takes an argument which has the current value and previous value in it
    // executed right at the start, and also whenver an @Input happens
  //}
  ngOnInit() {
    // default, like, component loaded
  }
  //ngDoCheck() {
    // this one gets fired whenever something changed at all anywhere; property value, anything
  //}
  //ngAfterContentInit() {
    // whenever the content, as opposed to the view, has been initialized
    // only gets called once
  //}
  //ngAfterContentChecked(){
    // whenever the projected content has been checked, which i guess is a thing
    // gets checked a lot, after doCheck
  //}
  //ngAfterViewInit {
    // called after the component's view and children's views have been initialized
  //}
  //ngAfterViewChecked(){
    // whenever the view(s) have been checked
  //}
  //ngOnDestroy(){
    // right before the object gets destroyed
  //}
}
