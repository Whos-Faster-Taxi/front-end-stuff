document.addEventListener("DOMContentLoaded", (event) => {

  let display = document.getElementById("hook");
  let button = document.querySelector('#hook');

  button.addEventListener('click', getLocation);
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          x.innerHTML = "Geolocation is not supported by this browser.";
      }
  }

  function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
  }

  console.log("DOM fully loaded and parsed");
});
