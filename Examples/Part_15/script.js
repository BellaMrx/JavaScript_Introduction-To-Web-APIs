if (typeof(Storage) != "undefined") {
    let lname = localStorage.getItem("lname");
    let fname = localStorage.getItem("fname");
    if (lname == null) { lname = "User"; }
    if (fname == null) { fname = ""; }
    document.querySelector('.loadData').innerHTML += "Hello " +
        lname + " " + fname + "! Welcome to the website.";
} else {
    document.querySelector('.loadData').innerHTML = "Your web browser does not support web storage!";
}

function saveValue() {
    if (typeof(Storage) != "undefined") {
        window.localStorage.setItem('lname', document.querySelector('#val1').value);
        window.localStorage.setItem('fname', document.querySelector('#val2').value);
    } else {
        alert("Your web browser does not support Web Storage!")
    }
}

function clearStorage() {
    window.localStorage.clear();
    //window.localStorage.removeItem("lname");
    //window.localStorage.removeItem("fname");
}