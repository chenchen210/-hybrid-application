import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import { filter, map } from 'rxjs/operators';//引入响应式编程
import { MapOperator } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-tongbuketail',
  templateUrl: './tongbuketail.component.html',
  styleUrls: ['./tongbuketail.component.css']
})
export class TongbuketailComponent implements OnInit {

  // 课上第7章ppt
  // flag:boolean=false;
  // num=3;
  // change(event){
  //   // console.log(event);
  //   this.num = event.target.value;
  // }
  // data=new Date();
  constructor( private http:HttpClient,private router:ActivatedRoute) { }
  courseId:number;
  course;
  courses;
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('./api/courses/'+this.courseId).subscribe(data=>{
      this.course=data;
    });
    this.http.get('./api/courses4/'+this.courseId).subscribe(data=>{
      this.courses=data;
    })
    // 第六章ppt
    /*this.http.get('./api/courses/'+this.courseId).pipe(map(data=>{
      data.name='haha';//添加的属性，进行转换，编译没问题
      return data;
    })).pipe(filter(data=>{
      return data.id == 3;//过滤，结果为布尔值，为真继续，否则停止
    })).subscribe(data=>{
      console.log(data);
      this.course=data;
    })*/
  }

}
