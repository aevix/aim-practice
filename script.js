var canvas = document.getElementsByClassName("myCanvas");
var ctx = canvas.getContext("2d");

var button = document.getElementsByClassName("reset");

var refresh = function() {

ctx.clearRect(0,0,400,400);
for(i=0; i<600; i++) {

var x = Math.floor(Math.random()*800);
var y = Math.floor(Math.random()*480);
var radius = Math.floor(Math.random()*30);
  
ctx.beginPath();
ctx.arc(x,y,radius,Math.PI*2,0,false);
ctx.fill();
ctx.closePath();
  
}
}

refresh();
button.addEventListener("click", refresh, false);