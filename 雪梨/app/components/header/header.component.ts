import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show1(){
    var notice=document.getElementById("notice");
    var noticeli=document.getElementById("noticeli");
    notice.style.backgroundColor="gray";
    noticeli.style.display="block";
    noticeli.style.border="1px gray solid"
  }
  lost1(){
    var notice=document.getElementById("notice");
    var noticeli=document.getElementById("noticeli");
    notice.style.backgroundColor="#f7f7f7";
    noticeli.style.display="none";
  }
  show2(){
    var head=document.getElementById("head");
    var headli=document.getElementById("headli");
    head.style.backgroundColor="gray";
    headli.style.display="block";
    headli.style.border="1px gray solid"
  }
  lost2(){
    var head=document.getElementById("head");
    var headli=document.getElementById("headli");
    head.style.backgroundColor="#f7f7f7";
    headli.style.display="none";
  }
}
