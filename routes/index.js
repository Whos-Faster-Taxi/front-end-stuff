const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  // res.sendFile('home.html');
  res.sendFile(path.join(__dirname, '../public/home.html'));
});

module.exports = router;
