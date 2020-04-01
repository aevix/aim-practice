function countdown() {
    if (document.getElementById("seconds").textContent > 0 && 
    document.getElementById("seconds").textContent < 60){
        clearInterval(time);
    } else {
        var time = setInterval(helper,1000);
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

    if (document.getElementById("button").textContent == "Reset"){
        document.getElementById("seconds").textContent = 60;
        document.getElementById("button").textContent = "Start";
    }
}

function myFunction() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    
    document.canvas.appendChild(c);
  }