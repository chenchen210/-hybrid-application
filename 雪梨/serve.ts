import express from 'express';
import bodyParser from 'body-parser';
import { SrvRecord } from 'dns';
const app = express();
app.use(bodyParser.json());
// course--同步课
export class Course{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public task:number,
        public person:number){}
}
const courses=[
    new Course(1,'混合应用',
    "http://usercontent.edu2act.cn/media/team/18-09-18/VE66xjRaii5X8Y9qFZQLZC.jpg?imageView2/1/w/230/h/130",
    10,90),
    new Course(2,'JavaScript',
    "http://usercontent.edu2act.cn/media/team/18-03-05/6niXYjHC5hvoAbWKUQCdPa.jpg?imageView2/1/w/230/h/130",
    23,100),
    new Course(3,'计算机导论',
    "http://usercontent.edu2act.cn/media/team/18-09-06/HUcdGNR48SfNpHPRjGQqXb.jpg?imageView2/1/w/230/h/130",
    15,97),
    new Course(4,'测试',
    "http://usercontent.edu2act.cn/media/team/18-09-09/jHw7UZ9hmNxJtTgCDuf9c3.jpg?imageView2/1/w/230/h/130",
    10,90),
]

// course1--课程
export class Course1{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public text:string,
        public time:number,
        public person:number){}
}
const courses1=[
    new Course1(1,'Github 开源之旅视频课程第一季：启程 ',
    "http://usercontent.edu2act.cn/media/cs/17-02-20/BRmabjXmc6M87Hx678jgkk.png?imageView2/1/w/320/h/190",
    "完成本课程之后，能够达到以下目标：- 实名注册 Github 账户- 能够在 Github 上搜索资料- 能够评估人和项目的活跃度- 掌握 Github 社交化- 能够创建 Github 远程仓库- 能够删除 Github 远程仓库- 能够建立本地仓库- 能够把本地仓库和远程仓库建立关联- 能够在本地仓库和远成仓库之间 push 和 pull ",
    14,3736),
    new Course1(2,'CSS3基础',
    "http://usercontent.edu2act.cn/media/cs/16-11-14/XgKaLUTcWTUsPaqF2hXSHK.png?imageView2/1/w/320/h/190",
    "CSS3在以前的基础上添加了诸多新的选择器以及新的样式。本课程将讲解CSS3新样式以及新特性。",
    12,2316),
    new Course1(3,'HTML5基础',
    "http://usercontent.edu2act.cn/media/cs/16-11-11/JjHN2Za86UhpyK8u6MEtsC.png?imageView2/1/w/320/h/190",
    "HTML5是最新的一项Web标准，在原有HTML4的基础上定义了一些新的标签和新的JavaScript API。是原有HTML4标准的一个超集。本课程主要介绍HTML5的新特性以及相应API。",
    12,1311),
    new Course1(4,'Selenium IDE WEB自动化测试入门视频课程（中）',
    "http://usercontent.edu2act.cn/media/cs/16-11-08/8ZkV8KMVi6mMQBwJ4bB7i6.png?imageView2/1/w/320/h/190",
    "上篇对自动化测试的基础知识做一些交代，为真正做自动化测试做好铺垫，然后讲解IDE工具的基本用法，学完了可以录制简单的自动化测试脚本。中篇和下篇会介绍很多技术细节。基本上中篇会把最常用到的技术细节都讲到。这样上篇和中篇的内容可以应付80%网站的自动化测试任务了。下篇有些高级话题，不是每个人都会用到的，适合骨灰级玩家。",
    13,3794)
]

// 社区
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
const courses2=[
    new Course2(1,
        "http://usercontent.edu2act.cn/media/userheader/15-11-10/8pt3Ph9aDFbAveubDWgN5Y.jpg?imageView2/1/w/256/h/256",
        "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/5WounpUrmbfrtEVquzw5De.jpg",
        "WEB开发（二）—— 函数",
        "（一）函数三要素函数的三要素为函数名、参数（形参，实参），返回值。（二）函数定义与调用函数定义的关键字为function，不能省略，也不要能简写。定义函数有3种形式，相应的调用形式有2种。",
        "刘秀梅",
        "2018-10-11 15:10",
        "阅读1237 | 评论4"),
    new Course2(2,
        "http://usercontent.edu2act.cn/media/userheader/18-06-11/hcnaQiW74323X9xzQNu8pR.jpg?imageView2/1/w/256/h/256",
        "http://usercontent.edu2act.cn/media/ckeditor/upload2018/0930/c67LLKXLBdRtuxNueeRshN.jpg",
       "类定义关键字详解",
        "JAVA类与对象（三）----类定义关键字详解 static 表示静态，它可以修饰属性，方法和代码块。1.static修饰属性（类变量），那么这个属性就可以用类名.属性名来访问，也就是使这个属性成为本类的类变量，为本类对象所共有。这个属性就",
        "3-张馨元",
        "2018-10-09 19:21",
        "阅读55 | 评论0")

]

// coursedetial
export class Course3{
    constructor(
        public id:number,
        public title1:string,
        public title2:string,
        public title3:string,
        public video:string,
        public meaulist1:string,
        public meaulist2:string,
        public meaulist3:string,
        public meaulist4:string,
        public meaulist5:string,
        public meaulist6:string,
        public question:string,
        public person:number
    ){}
}
const courses3=[
    new Course3(1,
        "基础知识&实用工具",
        "Github 开源之旅视频课程第一季：启程",
        "课程说明（上）",
        "http://usercontent.edu2act.cn/media/cs/17-02-20/qywkioNyXCXzDa5bkUmXkW.mp4",
        "1 课程说明（上）",
        "2 课程说明（下）",
        "3 注册Github账户",
        "4 Github个人主页（上）",
        "5 Github个人主页（下）",
        "6 Github 挖宝"
        ,"Github是什么？学习Github的理由，以及课程安排等。",
        790),
    new Course3(2,
        "WEB 前端开发","CSS3基础","CSS3边框",
        "http://usercontent.edu2act.cn/media/cs/16-11-14/GrPZ9hYtvRt4ss2f2D2tmD.mp4",
        "1 CSS3基础",
        "1-1 CSS3简介",
        "1-2CSS3选择器",
        "2 CSS3动态样式",
        "2-1 CSS3渐变上",
        "2-2CSS3渐变下",
        "学习元素的边框的圆角、以及边框背景。",
        105)
]

// tongbukedetail
export class Course4{
    constructor(
        public id:number,
        public courseName:string,
        public images:string,
        public pName:string,
        public time:string,
        public taskdone:number,
        public tasking:number,
        public untask:number,){}
}
const courses4=[
    new Course4(1,
        "任务二 -- js基础练习与应用",
        "http://usercontent.edu2act.cn/media/userheader/17-09-12/DktTc6ww3u396hJYsG4dMP.jpg?imageView2/1/w/256/h/256",
        "刘冠军",
        "2018-09-30  16:35",
        77,13,0
        ),
    new Course4(2,
        "任务一 -- 组建交互与服务",
        "http://usercontent.edu2act.cn/media/userheader/17-09-12/DktTc6ww3u396hJYsG4dMP.jpg?imageView2/1/w/256/h/256",
        "刘冠军",
        "2018-09-21  13：54",
        76,7,7
        )

]
// course--同步课
app.get('/api/courses',(req,res)=>{
    res.json(courses);
});
app.get('/api/courses/:id',(req,res)=>{
    console.log(req.params);
    res.json(courses.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses);
});
// course1--课程
app.get('/api/courses1',(req,res)=>{
    res.json(courses1);
});
app.get('/api/courses1/:id',(req,res)=>{
    console.log(req.params);
    res.json(courses1.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses1);
});
// 社区
app.get('/api/courses2',(req,res)=>{
    res.json(courses2);
});
app.get('/api/courses2/:id',(req,res)=>{
    console.log(req.params);
    res.json(courses2.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses2);
});
// coursedetail
app.get('/api/courses3',(req,res)=>{
    res.json(courses3);
});
app.get('/api/courses3/:id',(req,res)=>{
    console.log(req.params);
    res.json(courses3.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses3);
});
// tongbukedetail
app.get('/api/courses4',(req,res)=>{
    res.json(courses4);
});
app.get('/api/courses4/:id',(req,res)=>{
    console.log(req.params);
    res.json(courses4.find((ele)=>ele.id == req.params.id));
});
app.post('/api',(req,res)=>{
    console.log(req.body);
    res.json(courses4);
});
app.listen(8000);