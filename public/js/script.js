console.log('shit connected');

let display = document.getElementById("hook");

let button = document.querySelector('#btn');

button.addEventListener('click', getLocation);
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        hook.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    hook.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
