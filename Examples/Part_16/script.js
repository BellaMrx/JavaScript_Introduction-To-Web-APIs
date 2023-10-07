let user = getCookie("user"); // Is a cookie already set?
let welcome = user ? user : "User";
document.querySelector('.loadData').innerHTML += "Hello " +
    welcome + "! Welcome to the website.";

// How long should the cookie be stored (days)?
const expires_cookie = 2;
const path = ";path=/";

function setCookie() {
    let lname = document.querySelector('#val1').value;
    let fname = document.querySelector('#val2').value;
    if (!(lname || fname)) {
        alert("Error: Empty name fields")
        return null;
    }
    let saveCookie = document.querySelector('#cookie4ever').checked;
    let expires = "";
    if (saveCookie) {
        let date = new Date();
        date.setTime(date.getTime() + (expires_cookie * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = "user=" + fname + " " + lname + expires + path;
}

function getCookie(cname) {
    let _cname = cname + "=";
    let cookieData = document.cookie.split(";");
    for (let i = 0; i < cookieData.length; i++) {
        let c = cookieData[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(_cname) == 0)
            return c.substring(_cname.length, c.length);
    }
    return null;
}