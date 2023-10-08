let w;
let out = document.querySelector('#worker_2');

function startTimer() {
    setInterval(function() { document.querySelector('#worker_1').innerHTML = Date.now(); }, 1);
}

function startWork() {
    if (typeof(Worker) == "undefined") {
        out.innerHTML = "Your web browser does not support web workers!";
    } else {
        out.innerHTML = "Calculation is performed ...";
        out.className = "calc";
        if (w == undefined) {
            w = new Worker("scripts/work.js");
        }
        w.onmessage = function(event) {
            out.innerHTML = event.data;
            out.className = "done";
        }
        w.onerror = function(event) {
            out.innerHTML = event.message;
            out.className = "quit";
        }
    }
}

function stopWork() {
    if (w != undefined) {
        w.terminate();
        w = undefined;
        out.innerHTML = "Calculation was aborted prematurely!";
        out.className = "quit";
    }
}

function heyWorker() {
    let out2 = document.querySelector('#worker_3');
    let w2;
    if (w2 == undefined) {
        w2 = new Worker("scripts/work2.js");
    }
    w2.onmessage = function(event) {
        out2.innerHTML = event.data;
        out2.className = "done";
    }
    w2.onerror = function(event) {
        out2.innerHTML = event.message;
        out2.className = "quit";
    }
    w2.postMessage(document.querySelector('#msg').value);
}