const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

module.exports = router;
