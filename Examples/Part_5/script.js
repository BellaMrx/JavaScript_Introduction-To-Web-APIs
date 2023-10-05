let canvas = document.querySelector('#myCanvas');
if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    // Rectangle
    ctx.fillStyle = "lightgreen";           // color
    ctx.fillRect(20, 20, 300, 150);         // draws the shape; start point 20, 20 (x,y), rectangle 300 x 150 pixel

    // graphic with gradient
    // var grd = ctx.createLinearGradient(20, 20, 300, 150); 
    // grd.addColorStop(0, "lightgreen");
    // grd.addColorStop(1, "blue");
    // ctx.fillStyle = grd;
    // ctx.fillRect(20,20,300,150);

    ctx.strokeRect(20, 20, 300, 150);       // draws shape as frame without filling
    ctx.clearRect(50, 50, 100, 50);         // deletes specified pixels 
    ctx.strokeRect(50, 50, 100, 50);
    // Line
    ctx.lineWidth = 10;                     // line thickness
    ctx.moveTo(400, 0);                     // moves the path to a specified point without drawing a line
    ctx.lineTo(0, 250);                     // adds a line from the last point in the path to a new point
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