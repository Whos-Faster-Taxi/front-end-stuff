
console.log("DOM fully loaded and parsed");

let display = document.getElementById("hook");
let btn = document.querySelector('.submit');

function getLocation() {
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
  } else {
     display.innerHTML = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
  let inputBar = document.querySelector('.input-location');
  display.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
btn.addEventListener("click", getLocation);
