if (window.FileReader && window.FileList) {
    let myfiles = document.querySelector('#myfiles');
    let output = document.querySelector('.output');
    myfiles.onchange = function(event) {
        let flist = event.target.files;
        for (let i = 0; flist[i] != null; i++) {
            if (flist[i].type.match("image.*")) {
                let fread = new FileReader();
                fread.onload = (function(file) {
                    return function(event) {
                        let elem = document.createElement("p");
                        let img = document.createElement("img");
                        img.setAttribute("src", event.target.result);
                        img.setAttribute("height", 100);
                        elem.appendChild(img);
                        output.appendChild(elem);
                    };
                })(flist[i]);
                fread.readAsDataURL(flist[i]);
            }
        }
    }
} else {
    alert("Your web browser does not support the File API.");
}