<<<<<<< HEAD
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
=======
 console.log("DOM fully loaded and parsed");

 let display = document.getElementById("hook");
 let btn = document.querySelector('#btn');

 function getLocation() {
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(showPosition);
     } else {
         display.innerHTML = "Geolocation is not supported by this browser.";
     }
 }

 function showPosition(position) {
     display.innerHTML = "Latitude: " + position.coords.latitude +
     "<br>Longitude: " + position.coords.longitude;
 }
 btn.addEventListener("click", getLocation);
>>>>>>> 204294b79d9d2e4cc6c712b2b2366846fb7aeac5
