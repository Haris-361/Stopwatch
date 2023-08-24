var hr=0;
var min=0;
var sec=0;
var count=0;

let timer=false;

function start(){
 timer=true;
 stopwatch();
}


function stop(){
    timer=false;
}


function restart(){
    timer=false;
     hr=0;
     min=0;
     sec=0;
     count=0;
     document.getElementById("hor").innerHTML=hr;
     document.getElementById("mint").innerHTML=min;
     document.getElementById("seco").innerHTML=sec;
     document.getElementById("mili").innerHTML=count;
}

function stopwatch(){
    if(timer==true){
     count=count+1;

     if(count==100){
     sec=sec+1;
     count=0;
     }

     if(sec==60){
        min=min+1;
        sec=0;   
     }

     if(min==60){
        hr=hr+1;
        min=0;
        sec=0;
       
     }
     
     var hrString=hr;
     var mintString=min;
     var secString=sec;
     var countString=count;
     if(hr<10){
        hrString="0"+hrString;
     }
     
     if(min<10){
        mintString="0"+mintString;
     }
     if(sec<10){
        secString="0"+secString;
     }
     if(count<10){
        countString="0"+countString;
     }
     document.getElementById("hor").innerHTML=hrString;
     document.getElementById("mint").innerHTML=mintString;
     document.getElementById("seco").innerHTML=secString;
     document.getElementById("mili").innerHTML=countString;

     setTimeout("stopwatch()",10);
    }
}