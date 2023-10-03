let x = document.querySelector('.output');

function getmyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Your web browser does not support the Geolocation API!";
    }
}

function showPosition(position) {
    let pos = "Latitude: " + position.coords.latitude;
    pos += "<br>Longitude: " + position.coords.longitude;
    x.innerHTML = pos;
}