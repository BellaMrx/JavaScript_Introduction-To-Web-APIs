if (window.FileReader && window.FileList) {
    let myfiles = document.querySelector('#myfiles');
    let output = "Your selected files:<br>";
    myfiles.onchange = function(event) {
        let flist = event.target.files;
        for (let i = 0; flist[i] != null; i++) {
            output += flist[i].name + ": " +
                "(" + flist[i].type + ") " +
                flist[i].size + " Bytes<br>";
        }
        document.querySelector('.output').innerHTML = output;
    }
} else {
    console.log("Your web browser does not support the File API.");
}