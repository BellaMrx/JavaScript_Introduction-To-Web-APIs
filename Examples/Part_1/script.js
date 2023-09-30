let vid = document.querySelector('video');

function playVideo() {
    let but = document.querySelector('#play');
    if (vid.paused) {
        vid.play();
        but.textContent = "--Pause--";
    } else {
        vid.pause();
        but.textContent = "Play";
    }
}

function resize() {
    let siz = document.querySelector('#size');
    if (vid.width == 640) {
        vid.width = 720;
        siz.textContent = "Zoom out";
    } else {
        vid.width = 640;
        siz.textContent = "Zoom in";
    }
}

function control() {
    let ctr = document.querySelector('#ctrl');
    if (vid.controls == false) {
        vid.controls = true;
        ctr.textContent = "Hide controls";
    } else {
        vid.controls = false;
        ctr.textContent = "Display controls";
    }
}

function restart() {
    vid.currentTime = 0;
    // skip by 10 seconds: 
    // vid.currentTime += 10;
}

function mute() {
    let mtxt = document.querySelector('#mute');
    if (vid.muted) {
        vid.muted = false;
        mtxt.textContent = "Sound off";
    } else {
        vid.muted = true;
        mtxt.textContent = "Sound on";
    }
}