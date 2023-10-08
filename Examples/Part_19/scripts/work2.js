self.onmessage = function(event) {
    let msg = "Message received:" + event.data;
    postMessage(msg);
}
