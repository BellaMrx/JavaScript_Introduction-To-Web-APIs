/* Canvas extension         */
CanvasRenderingContext2D.prototype.fillCircle = function(cx, cy, r) {
    this.beginPath();
    this.arc(cx, cy, r, 0, 2*Math.PI);
    this.fill();
    this.closePath();
  }
  
CanvasRenderingContext2D.prototype.strokeCircle = function(cx, cy, r) {
    this.beginPath();
    this.arc(cx, cy, r, 0, 2*Math.PI);
    this.stroke();
    this.closePath();
  }
  
CanvasRenderingContext2D.prototype.fillPolygon = function(points) {
    xy = points.split(" "); 
    this.beginPath();
    if(xy.length > 0) {
     // determine start end point
     start_end = xy[0].split(",");
     this.moveTo(start_end[0], start_end[1]);
    }
    // run through single points
    for( i=1;  i< xy.length; i++) {
      xyN = xy[i].split(",");
      this.lineTo(xyN[0], xyN[1]);
    }
    this.lineTo(start_end[0], start_end[1]);
    this.fill();
    this.closePath();
  }
  
CanvasRenderingContext2D.prototype.strokePolygon = function(points) {
    xy = points.split(" "); 
    this.beginPath();
    if(xy.length > 0) {
     // determine start end point
     start_end = xy[0].split(",");
     this.moveTo(start_end[0], start_end[1]);
    }
    // run through single points
    for( i=1;  i< xy.length; i++) {
      xyN = xy[i].split(",");
      this.lineTo(xyN[0], xyN[1]);
    }
    this.lineTo(start_end[0], start_end[1]);
    this.stroke();
    this.closePath();
  }