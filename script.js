function countdown() {
    if (document.getElementById("button").textContent == "Pause"){
        clearInterval(time);
    } else if(document.getElementById("button").textContent == "Reset"){
        document.getElementById("seconds").textContent = 60;
        document.getElementById("button").textContent = "Start";
    } else {
        var time = setInterval(helper,1000);
        document.getElementById("button").textContent = "Pause"
    }
    function helper() {
        var sec = document.getElementById("seconds").textContent;
        sec--;
        document.getElementById("seconds").textContent = sec;
        if (document.getElementById("seconds").textContent == 0) {
            document.getElementById("button").textContent = "Reset";
            clearInterval(time);
        }
    }
}


function randomX() {
   var x = Math.floor(Math.random()*780) + 20;
   return x
}
function randomY() {
    var y = Math.floor(Math.random()*460) + 20;
    return y
}
function randomR() {
    var r = Math.floor(Math.random()*20) + 5;
    return r
}

function targetGenerator() {
    if (document.getElementById("button").textContent == "Reset") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    var target = setInterval(randomCircles, 750);
    function randomCircles() {
        var c = document.getElementById('myCanvas');
        var ctx = c.getContext('2d');
        ctx.beginPath();
        ctx.arc(randomX(),randomY(),randomR(),0*Math.PI,2*Math.PI);
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.fill();
        if (document.getElementById("seconds").textContent == 0) {
            clearInterval(target);
      }
    }
}