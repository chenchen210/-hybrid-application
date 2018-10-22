import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router'//引入这个路由的东西
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

  courseId:number;
  courses;
  ngOnInit() {
    this.router.params.subscribe((params)=>{
      this.courseId=params['courseId'];
    });

    
    this.http.get('/api/courses1').subscribe(data=>{
      this.courses=data;
    })
  }

  // go(){
  //   // this.route.navigate(['/shequ']);
  //   this.route.navigate(['/tongbu',600],{queryParams:{id:10000}});//路径跳转
  //                                     //{queryParams:{id:10000}}这是查询的参数
  // }

}
export class Course{
  constructor(
      public id:number,
      public courseName:string,
      public images:string,
      public task:number,
      public person:number){}
}
