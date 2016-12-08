
console.log("DOM fully loaded and parsed");

let display = document.getElementById("hook");
let locationLink = document.querySelector('.current-location-text');

function getLocation() {
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
  } else {
     display.innerHTML = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
  // pointing at the input location
  let inputBar = document.querySelector('.input-location');
  // should I hide the bar and append a h1 with values?

  // this will affect and change inner HTML of element
  display.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

locationLink.addEventListener("click", getLocation);
