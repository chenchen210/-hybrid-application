import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shequdetail',
  templateUrl: './shequdetail.component.html',
  styleUrls: ['./shequdetail.component.css']
})
export class ShequdetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }

  courseId:number;
  obj;
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('./api/courses2/'+this.courseId).subscribe(data=>{
      this.obj=data;
    })

  }

}
