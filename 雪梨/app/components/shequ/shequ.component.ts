import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private http:HttpClient,private route:Router,private router:ActivatedRoute) { }

  courseId:number;
  course;
  ngOnInit() {
    // console.log(this.router.snapshot.queryParams['id']);
    this.router.params.subscribe((params)=>{
      this.courseId=params['courseId'];
    });

    
    this.http.get('/api/courses2').subscribe(data=>{
      this.course=data;
    })
  }
  
}

export class Course2{
  constructor(
      public id:number,
      public headimg:string,
      public txtimg:string,
      public conttop:string,
      public contbottom:string,
      public bottoml:string,
      public bottomc:string,
      public bottomr:string
  ){}
}
