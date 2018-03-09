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
  
  constructor() { }

  ngOnInit() {
  }

}
