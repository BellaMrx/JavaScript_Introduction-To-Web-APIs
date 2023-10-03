let x = document.querySelector('.output');
let id;

function getmyLocation() {
    if (navigator.geolocation) {
        let geo_options = {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 27000
        };
        id = navigator.geolocation.watchPosition(showPosition, showError, geo_options);
    } else {
        x.innerHTML = "Your web browser does not support the Geolocation API!";
    }
}

function showPosition(position) {
    let pos = "Last position measurement: " + Date(position.timestamp);
    pos += "<br>Latitude: " + position.coords.latitude;
    pos += "<br>Longitude: " + position.coords.longitude;
    pos += "<br>Accuracy: " + position.coords.accuracy + "M";
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

function endmyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.clearWatch(id);
        x.innerHTML = "Position monitoring finished";
    } else {
        x.innerHTML = "The web browser does not support geolocation API!";
    }
}