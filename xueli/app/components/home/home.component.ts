import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // http这是自己取的名
  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

  // courseId:number;
  // courses;
    // headers=new HttpHeaders({})
  ngOnInit() {
    /* 10.9
    this.http.get('/api/courses/1').subscribe((data)=>{
      console.log(data);
    })
    //subscribe()观察者（订阅的意思）；订阅前面一个返回来的对象
    this.http.post('/api',{name:"aa",psd:123},{headers:this.headers}).subscribe((data)=>{
        console.log(data);
    })*/

    // this.router.params.subscribe((params)=>{
    //   this.courseId=params['courseId'];
    // });
    // this.http.get('/api/courses').subscribe(data=>{
    //   this.courses=data;
    // })

  }

}
