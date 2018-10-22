import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-workdetail',
  templateUrl: './workdetail.component.html',
  styleUrls: ['./workdetail.component.css']
})
export class WorkdetailComponent implements OnInit {

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
