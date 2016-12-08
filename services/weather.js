const fetch = require('node-fetch');
const API_KEY = process.env.WEATHER_API_KEY;

function weatherSearch(req, res, next) {
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=NewYork,us&units=imperial&cnt=16&APPID=${API_KEY}`)
  .then(r => r.json())
  .then((data) => {
    console.log('open weather data', data);
    res.forecast = data;
    next();
  })
  .catch((err) => {
    console.log(err);
    res.err = err;
    next();
  });
}

module.exports = { weatherSearch };
