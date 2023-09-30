# JavaScript_Introduction-To-Web-APIs

 Introduction to Web APIs: Video and Audio API, Canvas 2D API, Geolocation API, Drag & Drop API, Offline Data, Web Workers, Server-Sent Events...

---------------------------------------------

## Content
 1. Video and audio media API
    - 1.1. Controlling video files with JavaScript and the Media API

---------------------------------------------

# 1. Video and audio media API
Playing video and audio files is possible in HTML5 with the `<video>` and `<audio>` elements. The appearance of the controls (play, pause, volume, etc.) are predefined by the web browser and cannot be changed. But it is also possible to control media files using the JavaScript API. The advantage of custom controls for playing media files using the Media API is that the design and functionality of the player can be determined by the user and the controls can be styled using CSS or graphics.

The Media API provides a fairly large set of properties and methods. Furthermore, many event types are available, which can be used to react accordingly. 

A complete overview of all media events can be found here [HTML - Living Standard](https://html.spec.whatwg.org/multipage/media.html#mediaevents).


## 1.1. Controlling video files with JavaScript and the Media API

Example:

  [Complete Code](https://github.com/) --> **Examples/Part_1/...** 

index.html:
   ```
    <div class="video_canvas">
        <video width="640">
            <source src="video/Bugs.webm" type="video/webm">
            <source src="video/Bugs.mp4" type="video/mp4">
            Your web browser does not support video tag.
        </video>
        <p>
            <button onclick="play_pause()" id="play">Play</button>
            <button onclick="resize()" id="size">Zoom</button>
            <button onclick="control()" id="ctrl">Display controls</button>
            <button onclick="restart()">Restart</button>
            <button onclick="mute()" id="mute">Sound off</button>
        </p>
    </div>
   ```

script.js:
   ```
    let vid = document.querySelector('video');

    function play_pause() {
      let but = document.querySelector('#play');
      if (vid.paused) {
        vid.play();
        but.textContent = "--Pause--";
      } else {
        vid.pause();
        but.textContent = "Play";
      }
    }
   ```

Output:

 <img src="Images/WebAPI_Part-1.png" width="400">