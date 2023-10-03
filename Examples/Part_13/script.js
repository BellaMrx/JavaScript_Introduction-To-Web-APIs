let x = document.querySelector('.output');
let id = null;
let geo_options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
};

function getmyLocation(str) {
    if (navigator.geolocation) {
        if (id != null) {
            navigator.geolocation.clearWatch(id);
        }
        if (str == "google") {
            id = navigator.geolocation.watchPosition(
                showPositionGoogle, showError, geo_options);
        } else if (str == "bing") {
            id = navigator.geolocation.watchPosition(
                showPositionBing, showError, geo_options);
        }
    } else {
        x.innerHTML = "The web browser does not support geolocation API!";
    }
}

// Show position with Google Maps
function showPositionGoogle(position) {
    let latlng = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude);
    let myOptions = {
        zoom: 12,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    let map = new google.maps.Map(x, myOptions);

    let marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: "Your position"
    });
}
// Show position withBing Maps
function showPositionBing(position) {
    let latlng = new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude);
    let myOptions = {
        credentials: "AoDa4otH86aw2VF_Te1WpuxyGlI4-sUV3ZSIDxEWnGXAj62fmgvd2CZxFr82dqFE",
        center: latlng,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 14
    };
    let map = new Microsoft.Maps.Map(x, myOptions);
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
        if (id != null) {
            navigator.geolocation.clearWatch(id);
        }
        x.innerHTML = "Position monitoring finished";
    } else {
        x.innerHTML = "The web browser does not support geolocation API!";
    }
}