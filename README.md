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

  [Complete Code](https://github.com/BellaMrx/JavaScript_Introduction-To-Web-APIs/tree/main/Examples/Part_1) --> **Examples/Part_1/...** 

index.html:
   ```
    <div class="video_canvas">
        <video width="640">
            <source src="video/Bugs.webm" type="video/webm">
            <source src="video/Bugs.mp4" type="video/mp4">
            Your web browser does not support video tag.
        </video>
        <p>
            <button onclick="playVideo()" id="play">Play</button>
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
    ...
   ```

Output:

 <img src="Images/WebAPI_Part-1.png" width="600">

In this example, some methods and properties of the JavaScript Media API are used for the `video` element. The `play()` and `pause()` methods start and pause the video respectively. The `playVideo()` function first checks whether the `paused` property is `true` or not. According to the evaluation the video is started or stopped and the label on the button changes accordingly.
With the property `width` the size of the video, in the function `resize()`, is changed. Also the fade in and fade out of the controls can be enabled or disabled at any time using the `controls` property, as seen in the control() function. The `currentTime` property is used to set the position of the video to a specific time in seconds. Here it has been set to `0`, which causes the video to play from the beginning.
The `muted` property controls the sound. With `false` the sound is switched off with `true` switched on. A volume control can be realized with the `volume` property, the values from `0.0` to `1.0` represent the respective volume.