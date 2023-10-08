let out = document.querySelector('#output');

if (typeof(EventSource) !== "undefined") {
    let sse = new EventSource("sse.php");
    sse.onmessage = function(event) {
        out.innerHTML = "Message: " + event.data;
        /*var dat = JSON.parse(event.data);
        out.innerHTML = dat.msg + ": " + dat.time + " - " + dat.val;*/
    }
} else {
    out.innerHTML = "Your web browser cannot handle server-sent events.";
}