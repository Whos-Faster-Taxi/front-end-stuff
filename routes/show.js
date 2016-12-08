const router = require('express').Router();
const path = require('path');
const weatherSearch = require('../serivices/weather.js');

router.get('/', weatherSearch, (req, res) => {
  res.sendFile(path.join(__dirname, '../public/chart.html'));
});

module.exports = router;
