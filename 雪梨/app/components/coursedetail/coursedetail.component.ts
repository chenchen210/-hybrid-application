import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }

  courseId:number;
  courses;
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('./api/courses3/'+this.courseId).subscribe(data=>{
      this.courses=data;
    })
  }

}
