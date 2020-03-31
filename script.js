function countdown() {
    var time = setInterval(helper,1000);
    if (document.getElementById("seconds").textContent > 0 && 
    document.getElementById("seconds").textContent < 60){
        clearInterval(time);
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
