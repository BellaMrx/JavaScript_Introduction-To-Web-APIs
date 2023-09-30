let aud = document.querySelector('audio');
// Pause and playback function
function play() {
    let play = document.querySelector('#play');
    if (aud.paused) {
        aud.play();
        play.textContent = "--Pause--";
    } else {
        aud.pause();
        play.textContent = "Play";
    }
}
// 1x/2x speed
function fast() {
    let play = document.querySelector('#fast');
    if (aud.playbackRate == 1.0) {
        aud.playbackRate = 2.0;
        play.textContent = "1x";
    } else {
        aud.playbackRate = 1.0;
        play.textContent = "2x";
    }
}
// Start audio from beginning
function rewind() {
    aud.currentTime = 0;
}
// Switch sound on/off
function mute() {
    let mtxt = document.querySelector('#mute');
    if (aud.muted) {
        aud.muted = false;
        mtxt.textContent = "Sound off";
    } else {
        aud.muted = true;
        mtxt.textContent = "Sound on";
    }
}

function control() {
    let ctr = document.querySelector('#ctrl');
    if (aud.controls == false) {
        aud.controls = true;
        ctr.textContent = "Hide controls";
    } else {
        aud.controls = false;
        ctr.textContent = "Display controls";
    }
}