function fillCircle(context, cx, cy, r) {
    context.beginPath();
    context.arc(cx, cy, r, 0, 2*Math.PI);
    context.fill();
    context.closePath();
}
  
function strokeCircle(context, cx, cy, r) {
    context.beginPath();
    context.arc(cx, cy, r, 0, 2*Math.PI);
    context.stroke();
    context.closePath();
}
 
function fillPolygon(context, points) {
    xy = points.split(" "); 
    context.beginPath();
    if(xy.length > 0) {
     // determine start end point
     start_end = xy[0].split(",");
     context.moveTo(start_end[0], start_end[1]);
    }
    // run through individual points
    for( i=1;  i< xy.length; i++) {
      xyN = xy[i].split(",");
      context.lineTo(xyN[0], xyN[1]);
    }
    context.lineTo(start_end[0], start_end[1]);
    context.fill();
    context.closePath();
}
  
function strokePolygon(context, points) {
    xy = points.split(" "); 
    context.beginPath();
    if(xy.length > 0) {
     // determine start end point
     start_end = xy[0].split(",");
     context.moveTo(start_end[0], start_end[1]);
    }
    // run through individual points
    for( i=1;  i< xy.length; i++) {
      xyN = xy[i].split(",");
      context.lineTo(xyN[0], xyN[1]);
    }
    context.lineTo(start_end[0], start_end[1]);
    context.stroke();
    context.closePath();
}