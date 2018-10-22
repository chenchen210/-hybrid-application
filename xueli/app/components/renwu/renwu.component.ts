import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-renwu',
  templateUrl: './renwu.component.html',
  styleUrls: ['./renwu.component.css']
})
export class RenwuComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
  }

}
