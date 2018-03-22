import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-4',
  templateUrl: './assignment-4.component.html',
  styleUrls: ['./assignment-4.component.css']
})
export class Assignment4Component implements OnInit {
  // this is what an array of numbers looks like in typescript
  oddNumbers: number[]= [];
  evenNumbers: number[]= [];
  
  
  onIntervalFired(firedNumber: number){
    console.log("n", firedNumber)
    if (firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
