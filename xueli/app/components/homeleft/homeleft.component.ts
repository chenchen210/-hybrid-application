import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router'//引入这个路由的东西
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homeleft',
  templateUrl: './homeleft.component.html',
  styleUrls: ['./homeleft.component.css']
})
export class HomeleftComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

  courseId:number;
  courses;
  ngOnInit() {
    this.router.params.subscribe((params)=>{
      this.courseId=params['courseId'];
    });
    this.http.get('/api/courses').subscribe(data=>{
      this.courses=data;
    })
  }

}
