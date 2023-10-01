let canvas = document.querySelector('#myCanvas');
if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    // sets the color to fill the drawing
    ctx.fillStyle = "red";
    // ctx.fillRect(0, 0, 300, 150); - start point in the upper left corner 0,0, with a 300 x 150 pixel rectangle
    // the starting point is shifted by 20 pixel each (x,y)
    ctx.fillRect(20, 20, 300, 150);
}