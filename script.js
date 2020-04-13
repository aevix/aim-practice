var x = undefined;
var y = undefined;
var r = undefined;

function countdown() {
    document.getElementById("start").disabled = true;
    setTimeout(function(){document.getElementById("start").disabled = false;}, 1000)
    if (document.getElementById("start").textContent == "Reset") {
        document.getElementById("start").textContent = "Start";
        document.getElementById("seconds").textContent = 60;
        document.getElementById("points").textContent = 0;
    } else {
        var time = setInterval(helper, 1000);
        document.getElementById("start").textContent = "Reset";
        function helper() {
            if (document.getElementById("seconds").textContent == 0) {
                clearInterval(time);
                x = undefined;
                y = undefined;
                r = undefined;
            } else if (document.getElementById("start").textContent == "Start") {
                clearInterval(time);
            } else if (document.getElementById("start").textContent == "Reset"){
                var sec = document.getElementById("seconds").textContent;
                sec--;
                document.getElementById("seconds").textContent = sec;
            }
        }
    }
}


function randomNum(Start, End) {
    return Math.floor(Math.random()*End) + Start;
}

function targetGenerator() {
    var target = setInterval(randomCircles, 900);
    var c = document.getElementById('myCanvas');
    var ctx = c.getContext('2d');
    function randomCircles() {
        ctx.clearRect(0,0,c.width, c.height);
        x = randomNum(0, c.width);
        y = randomNum(0, c.height);
        r = randomNum(7, 12);
        ctx.beginPath();
        ctx.arc(x,y,r,0*Math.PI,2*Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
        if (document.getElementById("seconds").textContent == 0 || document.getElementById("start").textContent == "Start") {
            clearInterval(target);
            ctx.clearRect(0,0,c.width,c.height);
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
    canvas.addEventListener('mousedown', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        console.log(mousePos);
        if (mousePos.x >= x-r && mousePos.x <= x+r) {
            if (mousePos.y >= y-r && mousePos.y <= y+r) {
                var points = document.getElementById("points").textContent;
                points ++;
                document.getElementById("points").textContent = points;
            }
        }
    }, false);
}


const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});