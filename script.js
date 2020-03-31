function countdown() {
    var time = setInterval(helper,1000);
    function helper() {
        var sec = document.getElementById("seconds").textContent;
        sec--;
        document.getElementById("seconds").textContent = sec;
        if (document.getElementById("seconds").textContent == 0) {
            document.getElementById("button").textContent = "Reset"
            clearInterval(time);
        }
    }
}