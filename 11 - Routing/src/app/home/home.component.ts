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

  onLoadServers(){
    console.log('hi');
    // navigate is a built-in method that comes for free
    // pass an array, it's like the one that goes in the templates
    this.router.navigate(['/servers']);
  }
}
