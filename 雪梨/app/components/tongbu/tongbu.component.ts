import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router'//引入这个路由的东西
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }//注入这个路由的实例

  courseId:number;
  courses;
  ngOnInit() {//钩子函数只执行一次
    // this.courseId=this.router.snapshot.params['courseId'];//courseId就被定死了
    //参数订阅：courseId会随着参数的变化而变化
    this.router.params.subscribe((params)=>{
      this.courseId=params['courseId'];
    });
    this.http.get('/api/courses').subscribe(data=>{
      this.courses=data;
    })
  }

  go(){
    // this.route.navigate(['/shequ']);
    this.route.navigate(['/tongbu',600],{queryParams:{id:10000}});//路径跳转
                                      //{queryParams:{id:10000}}这是查询的参数
  }
}

export class Course{
  constructor(
      public id:number,
      public courseName:string,
      public images:string,
      public task:number,
      public person:number){}
}