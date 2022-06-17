loop();
clock();





function loop(){
    setInterval(() => clock(),1000);
   
}


function clock(){
var div=document.getElementById("container");
var h=document.getElementById("hours");
var m=document.getElementById("minutes");
var s=document.getElementById("seconds");

h.innerText=new Date().getHours();
m.innerText=new Date().getMinutes();
s.innerText=new Date().getSeconds();

if(parseInt(h.innerText)<10) // hours
h.innerText="0"+h.innerText;

if(parseInt(m.innerText)<10) // minutes
m.innerText="0"+m.innerText;

if(parseInt(s.innerText)<10) //seconds
s.innerText=" 0"+s.innerText;

h.innerHTML+= ":";
m.innerHTML+= ":";
// randomizer color
var color ="border-color:rgb("+Math.floor(Math.random() *256)+","+Math.floor(Math.random() *256)+","+Math.floor(Math.random() *256)+");";
    div.setAttribute("style",color);
    
}









   


