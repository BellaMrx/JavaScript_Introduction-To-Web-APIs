let canvas = document.querySelector('#myCanvas');
if (canvas.getContext) {
    let ctx = canvas.getContext("2d");
    let img = new Image();
    img.src = "images/flower_960.jpg";
    img.onload = function() {
        ctx.drawImage(img, 10, 10, 150, 100);
    };

    function copy() {
        let imgData = ctx.getImageData(10, 10, 150, 100);
        ctx.putImageData(imgData, 170, 10);
    }

    function copy_invert() {
        let imgData = ctx.getImageData(10, 10, 150, 100);
        let i = 0;
        while (i < imgData.data.length) {
            imgData.data[i] = 255 - imgData.data[i++];
            imgData.data[i] = 255 - imgData.data[i++];
            imgData.data[i] = 255 - imgData.data[i++];
            imgData.data[i] = imgData.data[i++];
        }
        ctx.putImageData(imgData, 170, 10);
    }
}