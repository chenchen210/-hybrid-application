import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule}from '@angular/forms'
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import {RouterModule,Router} from '@angular/router'
import {HttpClientModule} from '@angular/common/http';
import { TongbuketailComponent } from './components/tongbuketail/tongbuketail.component';
import { ShequdetailComponent } from './components/shequdetail/shequdetail.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { RenwuComponent } from './components/renwu/renwu.component';
import { HomeleftComponent } from './components/homeleft/homeleft.component';
import { WorkdetailComponent } from './components/workdetail/workdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    TongbuketailComponent,
    ShequdetailComponent,
    CoursedetailComponent,
    RenwuComponent,
    HomeleftComponent,
    WorkdetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,children:[
        {path:'renwu',component:RenwuComponent},
        {path:'work',component:WorkdetailComponent},
        {path:'',redirectTo:'renwu',pathMatch:'full'},
      ]},
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbuketailComponent},
      {path:'course',component:CourseComponent},
      {path:'course/:courseId',component:CoursedetailComponent},
      {path:'shequ',component:ShequComponent},
      {path:'shequ/:courseId',component:ShequdetailComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},//默认路经
      {path:'**',component:HomeComponent}//通配符，当你的路径出错的时候，他就转到HomeComponent
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
