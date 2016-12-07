const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile();
});

module.exports = router;
