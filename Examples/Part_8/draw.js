let canvas = document.querySelector('#myCanvas');
if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillCircle(150, 150, 100);
    ctx.lineWidth = 3;
    ctx.strokeCircle(150, 150, 100);
    ctx.strokeCircle(30, 30, 20);
    ctx.strokeCircle(30, 270, 20);
    ctx.strokeCircle(270, 30, 20);
    ctx.strokeCircle(270, 270, 20);
    ctx.lineWidth = 1;
    ctx.strokeCircle(150, 150, 120);
    ctx.lineWidth = 3;
    ctx.fillStyle = "blue";
    ctx.fillPolygon(points = "150,280 270,100 30,100");
    ctx.strokePolygon(points = "150,280 270,100 30,100");
}