import { Component, ViewChild } from '@angular/core';
import { NavController, Slides} from 'ionic-angular';
// import { BPage } from '../b/b';
// import { APage } from '../a/a';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  @ViewChild('ac') ac;
  @ViewChild(Slides) slides:Slides;
  ioncs:string='camera';
  items=[];
  constructor(public http:HttpClient, public navCtrl: NavController) {
    for (var i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }

  number:number;
  a=true;
  b=false;
  c=false;
  d=false;
  change1(e){
    this.number=1;
    this.a=true;
    this.b=false;
    this.c=false;
    this.d=false;
  }
  change2(e){
    this.number=2;
    this.a=false;
    this.b=true;
    this.c=false;
    this.d=false;
  }
  change3(e){
    this.a=false;
    this.b=false;
    this.c=true;
    this.d=false;
  }
  change4(e){
    this.a=false;
    this.b=false;
    this.c=false;
    this.d=true;
  }
  /*goSub(){
    this.navCtrl.push(APage,{id:1});
  }
  goSub1(){
    this.navCtrl.push(BPage,{id:1});
  }
  doInfinite(infiniteScroll){
    this.http.get('/api/courses').subscribe(data=>{
      console.log(data);
      infiniteScroll.complete();
    })
    setTimeout(() => {
      for (var i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }
      console.log('Async operation has ended');
      infiniteScroll.complete();
      if(this.items.length>90){
        infiniteScroll.enable();//超出长度后不能使用
      }
    }, 500);
  }
  ionViewDidLoad(){
    // this.ac.get();
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }*/
}
