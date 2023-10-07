function startTimer() {
    setInterval(function() { document.querySelector('#worker_1').innerHTML = Date.now(); }, 1);
}

function startWork() {
    var out = document.querySelector('#worker_2');
    out.innerHTML = "Calculation is performed ...";
    out.className = "calc";

    // 70 million x loop 500 times
    for (var i = 0; i < 70000000; i++) {
        for (var j = 0; j < 500; j++) {
            // just wasting time
        }
    }
    out.innerHTML = "Finished with the calculation!";
    out.className = "done";
}