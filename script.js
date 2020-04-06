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

function randomNum(start,end) {
    return Math.floor(Math.random()*end) + start;
}
function targetGenerator() {
    var target = setInterval(randomCircles, 750);
    function randomCircles() {
        var c = document.getElementById('myCanvas');
        var ctx = c.getContext('2d');
        ctx.clearRect(0,0,800, 480);
        var x = randomNum(40,760);
        var y = randomNum(40,440);
        var r = randomNum(10,15);
        ctx.beginPath();
        ctx.arc(x,y,r,0*Math.PI,2*Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
        if (document.getElementById("seconds").textContent == 0) {
            clearInterval(target);
      }
    }
}