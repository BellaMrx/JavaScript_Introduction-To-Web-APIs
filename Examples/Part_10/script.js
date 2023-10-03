let x = document.querySelector('.output');

function getmyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Your web browser does not support the Geolocation API!";
    }
}

function showPosition(position) {
    let pos = "Latitude: " + position.coords.latitude;
    pos += "<br>Londitude: " + position.coords.longitude;
    x.innerHTML = pos;
}

function showError(error) {
    if (error.PERMISSION_DENIED) {
        x.innerHTML = "Access to your position has been denied!? Blocked?"
    } else if (error.POSITION_UNAVAILABLE) {
        x.innerHTML = "There are no geoposition data available"
    } else if (error.TIMEOUT) {
        x.innerHTML = "Timeout on location request was triggered."
    } else {
        x.innerHTML = "An unknown error has occurred";
    }
}