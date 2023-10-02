# JavaScript_Introduction-To-Web-APIs

 Introduction to Web APIs: Video and Audio API, Canvas 2D API, Geolocation API, Drag & Drop API, Offline Data, Web Workers, Server-Sent Events...

---------------------------------------------

## Content
 1. Video and audio media API
    - 1.1. Controlling video files with JavaScript and the Media API
    - 1.2. Controlling audio files with JavaScript and the Media API
 2. The Canvas 2D API
    - 2.1. Drawing on a `<canvas>` element
    - 2.2. Methods used to draw on the `<canvas>` element

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
With the property `width` the size of the video, in the function `resize()`, is changed. Also the fade in and fade out of the controls can be enabled or disabled at any time using the `controls` property, as seen in the `control()` function. The `currentTime` property is used to set the position of the video to a specific time in seconds. Here it has been set to `0`, which causes the video to play from the beginning.
The `muted` property controls the sound. With `false` the sound is switched off with `true` switched on. A volume control can be realized with the `volume` property, the values from `0.0` to `1.0` represent the respective volume.


## 1.2. Controlling audio files with JavaScript and the Media API
The same media API is used for the `audio` element as for the `video` element, so everything can be done that was done for the `video` element.

Example:

  [Complete Code](https://github.com/BellaMrx/JavaScript_Introduction-To-Web-APIs/tree/main/Examples/Part_2) --> **Examples/Part_2/...** 

index.html:
   ```
    <img src="images/guitar-fender.jpg" alt="Fender Guitar" width="400"><br>
    <audio>
        <source src="audio/Californication.mp3" type="audio/mpeg">
        <source src="audio/Californication.wav" type="audio/wav">
        <source src="audio/Californication.ogg" type="audio/ogg">
        This web browser does not support audio tag.
    </audio>
    <div>
        <button onclick="play()" id="play">Play</button>
        <button onclick="fast()" id="fast">2x</button>
        <button onclick="rewind()">Rewind</button>
        <button onclick="mute()" id="mute">Sound off</button>
        <button onclick="control()" id="ctrl">Display controls</button>
    </div>
   ```

script.js:
   ```
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
   ```

Output:

 <img src="Images/WebAPI_Part-2.png" width="400">


# 2. The Canvas 2D API
The HTML element `<canvas>` is initially nothing more than a white area on which to draw using JavaScript. Such an empty drawing area can be specified as follows:

  [Complete Code](https://github.com/BellaMrx/JavaScript_Introduction-To-Web-APIs/tree/main/Examples/Part_3) --> **Examples/Part_3/...** 
  
index.html:
   ```
    <body>
      <h1>Create drawing area</h1>
      <canvas id="myCanvas" width="400" height="200" style="border:1px solid #000000;">
        Your browser does not support the canvas element.
      </canvas>
    </body>
   ```

Output:

 <img src="Images/WebAPI_Part-3.png" width="400">


## 2.1. Drawing on a `<canvas>` element
The actual drawing on the `<canvas>` elements is done with JavaScript. For this, a connection to the `<canvas>` element must be established with JavaScript. This is done with the HTML attribute `id` of `<canvas>` and the DOM method `querySelector()`.

   ```
    let canvas = document.querySelector('#myCanvas');
   ```

Another connection to an interface is needed so that something can be drawn on the `canvas` surface. This interface is called a *Rendering Context* and provides the necessary methods and properties for drawing. The connection to the context object is made with `getContext()` and takes as parameter the type of the context, here it is `2d`. An object of type *CanvasRenderingContext2D* is returned. The interface is accessed with `getContext()` and the string `2d` in it.

   ```
    let canvas = document.querySelector('#myCanvas');
    let ctx = canvas.getContext("2d");
   ```

Example:

  [Complete Code](https://github.com/BellaMrx/JavaScript_Introduction-To-Web-APIs/tree/main/Examples/Part_4) --> **Examples/Part_4/...** 
  
script.js:
   ```
    let canvas = document.querySelector('#myCanvas');
    if (canvas.getContext) {
      let ctx = canvas.getContext("2d");
      // sets the color to fill the drawing
      ctx.fillStyle = "red";
      // ctx.fillRect(0, 0, 300, 150); - start point in the upper left corner 0,0, with a 300 x 150 pixel rectangle
      // the starting point is shifted by 20 pixel each (x,y)
      ctx.fillRect(20, 20, 300, 150);
    }
   ```

Output:

 <img src="Images/WebAPI_Part-4.png" width="400">


#### 3D context (WebGL)
To use the 3D context, the `getContext()` method must be given the `webgl` parameter (instead of `2d`) for a *3D rendering context* in the web browser. The object returned is of type *WebGLRenderingContext*. This is the version 1 of WebGL. Meanwhile there is a version 2, which is called with the parameter `webgl2`. This topic is very extensive and therefore I will not go into it further here.


## 2.2. Methods used to draw on the `<canvas>` element
The following example demonstrates some methods for drawing rectangles, lines, circles, and text:

  [Complete Code](https://github.com/BellaMrx/JavaScript_Introduction-To-Web-APIs/tree/main/Examples/Part_5) --> **Examples/Part_5/...** 

index.html:
   ```
    <canvas id="myCanvas" width="400" height="250" style="border:1px solid lightgrey;">
        Your browser does not support the canvas element.
    </canvas>
   ```

script.js:
   ```
    let canvas = document.querySelector('#myCanvas');
    if (canvas.getContext) {
      let ctx = canvas.getContext("2d");
      // Rectangle
      ctx.fillStyle = "lightgreen";           // color
      ctx.fillRect(20, 20, 300, 150);         // draws the shape; start point 20, 20 (x,y), rectangle 300 x 150 pixel

      // graphic with gradient
      //var grd = ctx.createLinearGradient(20, 20, 300, 150); 
      //grd.addColorStop(0, "yellow");
      //grd.addColorStop(1, "red");
      //ctx.fillStyle = grd;
      //ctx.fillRect(20,20,300,150);

      ctx.strokeRect(20, 20, 300, 150);       // draws shape as frame without filling
      ctx.clearRect(50, 50, 100, 50);         // deletes specified pixels 
      ctx.strokeRect(50, 50, 100, 50);
      // Line
      ctx.lineWidth = 10;                     // line thickness
      ctx.moveTo(400, 0);                     // moves the path to a specified point without drawing a line
      ctx.lineTo(0, 250);                     // fügt eine Linie vom letzten Punkt im Pfad zu einem neuen Punkt hinzu
      ctx.stroke();                           // draws the path
      // Circle
      ctx.lineWidth = 5;
      ctx.beginPath();                        // starts a path or resets the current path
      ctx.arc(320, 170, 75, 0, 2 * Math.PI);  // creates a circle or a part of a circle
      ctx.stroke();
      ctx.fillStyle = "red";                  
      ctx.fill();                             // fills the current path
      // Text
      ctx.fillStyle = "green";                
      ctx.font = "40px Arial";                // font-size, font
      ctx.fillText("canvas", 170, 50);        // draws the text
      ctx.lineWidth = 1;
      ctx.strokeText("canvas", 40, 135);      // draws text as frame without filling
    }
   ```

Output:

 <img src="Images/WebAPI_Part-5.png" width="400">





