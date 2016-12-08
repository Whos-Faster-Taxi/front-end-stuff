
console.log("DOM fully loaded and parsed");

let display = document.getElementById("hook");
// selecting the first child
let locationDisplay = document.querySelector('.input-location');

function getLocation() {
  console.log('inside getLocation');
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
  } else {
     display.innerHTML = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
  console.log('inside showposition');
  // pointing at the input location
  // let inputBar = document.querySelector('.input-location');
  // should I hide the bar and append a h1 with values?

  // this will affect and change inner HTML of element
  locationDisplay.value = "Lat: " + Math.trunc(position.coords.latitude) + ", Long: " + Math.trunc(position.coords.longitude);
}

function getWeather(position) {
  console.log('inside getWeather');
  const API_URL = '/show'
  fetch(API_URL)
    .then(r => r.json())
    .then((data) => {
      // console.log(data);
      document.createElement('input').setAttribute('type', 'hidden').setAttribute('value', data.list[0].main.humidity);
      document.createElement('input').setAttribute('type', 'hidden').setAttribute('value', data.list[0].main.temp);
      document.createElement('input').setAttribute('type', 'hidden').setAttribute('value', data.list[0].main.humidity);
      document.querySelector

      // renderGraph(ctx, data);
      // document.querySelector('#city-name').innerText = data.city.name;
      console.log(data.city.name);
    })
    .catch(err => console.log(err));
  }
}

// function that makes fetch call to DB with params
// humidity is 0-1
function getServices(hum, prep, temp, month, day) {

}

// locationLink.addEventListener("click", getLocation);
getLocation();
