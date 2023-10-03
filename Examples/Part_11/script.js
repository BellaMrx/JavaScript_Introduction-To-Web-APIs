let x = document.querySelector('.output');

function getmyLocation() {
    if (navigator.geolocation) {
        let geo_options = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
        };
        navigator.geolocation.getCurrentPosition(showPosition, showError, geo_options);
    } else {
        x.innerHTML = "Your web browser does not support the Geolocation API!";
    }
}

function showPosition(position) {
    let pos = "Latitude: " + position.coords.latitude;
    pos += "<br>Longitude: " + position.coords.longitude;
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