

function countdown() {
    if (document.getElementById("button").textContent == "Reset") {
        document.getElementById("button").textContent = "Start";
        document.getElementById("seconds").textContent = 60;
    } else {
        document.getElementById("button").textContent = "Reset";
        var time = setInterval(helper, 1000);
        function helper() {
            if (document.getElementById("seconds").textContent == 0) {
                clearInterval(time);
            } else if (document.getElementById("button").textContent == "Start") {
                clearInterval(time);
            } else {
                var sec = document.getElementById("seconds").textContent;
                sec--;
                document.getElementById("seconds").textContent = sec;
            }
        }
    }
}


function randomNum(start,end) {
    return Math.floor(Math.random()*end) + start;
}

function targetGenerator() {
    var target = setInterval(randomCircles, 900);
    var c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');
    function randomCircles() {
        ctx.clearRect(0,0,800, 480);
        var x = randomNum(40,760);
        var y = randomNum(40,440);
        var r = randomNum(10,15);
        ctx.beginPath();
        ctx.arc(x,y,r,0*Math.PI,2*Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
        if (document.getElementById("seconds").textContent == 0 || document.getElementById("button").textContent == "Start") {
            clearInterval(target);
            ctx.clearRect(0,0,800,480);
        }
    }
}

function startTracking() {
    var mouse = {
        x: undefined,
        y: undefined
    }
    const myCanvas = document.getElementById('myCanvas');
    const context = myCanvas.getContext('2d');
    
    myCanvas.addEventListener('click',
        function (event) {
            mouse.x = event.x;
            mouse.y = event.y;
            console.log(mouse);
        }
    ) 
}