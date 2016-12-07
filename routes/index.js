const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('this works yeah');
});

module.exports = router;
