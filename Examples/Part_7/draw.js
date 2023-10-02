let canvas = document.querySelector('#myCanvas');
if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";
    fillCircle(ctx, 150, 150, 100);
    ctx.lineWidth = 3;
    strokeCircle(ctx, 150, 150, 100);
    strokeCircle(ctx, 30, 30, 20);
    strokeCircle(ctx, 30, 270, 20);
    strokeCircle(ctx, 270, 30, 20);
    strokeCircle(ctx, 270, 270, 20);
    ctx.lineWidth = 1;
    strokeCircle(ctx, 150, 150, 120);
    ctx.lineWidth = 3;
    ctx.fillStyle = "lightgreen";
    fillPolygon(ctx, points = "150,280 270,100 30,100");
    strokePolygon(ctx, points = "150,280 270,100 30,100");
}