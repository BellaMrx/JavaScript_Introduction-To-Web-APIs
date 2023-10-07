function offon() {
    if (!navigator.onLine) {
        document.querySelector('.loadData').innerHTML = "Offline";
        document.querySelector('.loadData').className = "offline";
    } else {
        document.querySelector('.loadData').innerHTML = "Online";
        document.querySelector('.loadData').className = "online";
    }
}

window.onload = function() {
    if (document.addEventListener) {
        window.addEventListener("online", offon, false);
        window.addEventListener("offline", offon, false);
    }
    offon();
}