import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-3-practicing-directives',
  templateUrl: './assignment-3-practicing-directives.component.html',
  styleUrls: ['./assignment-3-practicing-directives.component.css']
})
export class Assignment3PracticingDirectivesComponent implements OnInit {
  
  hiddenMessage = true;
  timestamps = [];

  constructor() { }

  ngOnInit() {
  }
  
  toggleMessage(e){
    this.hiddenMessage = !this.hiddenMessage;
    this.timestamps.push(e.timeStamp);
  }

  getColor(){
    return this.timestamps.length > 3 ? "blue" : "yellow";
  }

}
