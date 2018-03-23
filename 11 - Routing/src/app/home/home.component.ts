import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // pass router in the constructor so it is available inside the component
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServers(id: number){
    console.log('hi');
    // navigate is a built-in method that comes for free
    // pass an array, it's like the one that goes in the templates
    // this got filled out with every type of URL dealie, the array, the queryparams, the fragment, awesome
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }
}
