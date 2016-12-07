const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('other amazing stuff');
});

module.exports = router;
