import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Input() arr1;
  @Input() arr2;
  del1(i){
    this.arr1.splice(i,1);
  }
  del2(i){
    this.arr2.splice(i,1)
  }

  change1(i){
    this.arr2.push(this.arr1[i]);
    this.arr1.splice(i,1);
  
  }
  change2(i){
    this.arr1.push(this.arr2[i]);
    this.arr2.splice(i,1);
  
  }



  constructor() { }

  ngOnInit() {
  }

}
