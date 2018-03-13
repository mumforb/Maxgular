import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-4',
  templateUrl: './assignment-4.component.html',
  styleUrls: ['./assignment-4.component.css']
})
export class Assignment4Component implements OnInit {
  onIntervalFired(firedNumber: number){
    console.log("n", firedNumber)
  }
  constructor() { }

  ngOnInit() {
  }

}
