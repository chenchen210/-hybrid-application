import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  data1:string[]=[];
  data2:string[]=[];
  change(txt){
    this.data1.push(txt);
  }
  ngOnInit() {
  }
  
}
