window.onload=function(){
    var numlist=document.getElementsByClassName("num")[0].children;
    var imgs=document.getElementsByTagName("img");
    var box=document.getElementById("box");
    var prev=document.getElementById("prev");
    var next=document.getElementById("next");
    var i=0;
    for(var j=0;j<numlist.length;j++){
        numlist[j].index=j;
        numlist[j].onclick=function(){
            for(var k=0;k<numlist.length;k++){
                imgs[k].style.display='none';
                numlist[k].style.background="#fff";
            }
            imgs[this.index].style.display='block';
            i=this.index;
            this.style.background="red";
        }
    }

    function imgChange(){
        imgs[i%5].style.display='none';
        i++;
        imgs[i%5].style.display='block';
        for(var k=0;k<numlist.length;k++){
            numlist[k].style.background="#fff";
        };
        numlist[i%5].style.background="red";
    }
    var timer=setInterval(imgChange,1000);
    box.onmouseover=function(){
        clearInterval(timer);
    }
    box.onmouseout=function(){
        timer=setInterval(imgChange,1000);
    }
    prev.onclick=function(){
        imgs[i%5].style.display='none';
        for(var k=0;k<numlist.length;k++){
            numlist[k].style.background="#fff";
        }
        i--;
        if(i<0){
            i=4;
        }
        imgs[i%5].style.display='block';
        numlist[i%5].style.background="red";
    }
    next.onclick=function(){
        imgChange();
    }
}