

function countdown() {
    document.getElementById("button").disabled = true;
    setTimeout(function(){document.getElementById("button").disabled = false;}, 1000)
    if (document.getElementById("button").textContent == "Reset") {
        document.getElementById("button").textContent = "Start";
        document.getElementById("seconds").textContent = 60;
        document.getElementById("points").textContent = 0;
    } else {
        var time = setInterval(helper, 1000);
        document.getElementById("button").textContent = "Reset";
        function helper() {
            if (document.getElementById("seconds").textContent == 0) {
                clearInterval(time);
            } else if (document.getElementById("button").textContent == "Start") {
                clearInterval(time);
            } else if (document.getElementById("button").textContent == "Reset"){
                var sec = document.getElementById("seconds").textContent;
                sec--;
                document.getElementById("seconds").textContent = sec;
            }
        }
    }
}

var x = undefined;
var y = undefined;
var r = undefined;

function randomNum(start,end) {
    return Math.floor(Math.random()*end) + start;
}

function targetGenerator() {
    var target = setInterval(randomCircles, 900);
    var c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');
    function randomCircles() {
        x = randomNum(40,760);
        y = randomNum(40,440);
        r = randomNum(10,15);
        ctx.clearRect(0,0,800, 480);
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

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function addCanvas() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    canvas.addEventListener('click', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        if (mousePos.x >= x-r && mousePos.x <= x+r && mousePos.y >= y-r && mousePos.y <= y+r) {
            var points = document.getElementById("points").textContent;
            points ++;
            document.getElementById("points").textContent = points;
        }
        }, false);
}


// var mouse = {
//     x: undefined,
//     y: undefined
// }

// function mouseTracking() { 
//     var canvas = document.getElementById('myCanvas');
//     var context = canvas.getContext('2d');
//     const offset = canvas.getBoundingClientRect();
//     canvas.addEventListener('click',
//         function (event) {
//             mouse.x = event.pageX - offset.left,
//             mouse.y = event.pageY - offset.top
//             console.log(mouse);
//         }
//     )
// }