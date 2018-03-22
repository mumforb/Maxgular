import { Component, OnInit, DoCheck, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, DoCheck {
  interval;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }
  
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
  
  onPauseGame() {
    clearInterval(this.interval);
  }
    ngDoCheck() {
    // this one gets fired whenever something changed at all anywhere; property value, anything
  }
  
  
  
  
}


