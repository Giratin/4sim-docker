var express = require('express');
var router = express.Router();
const User = require('../models/user.model');


/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await User.find();
  res.json({ users });
});

module.exports = router;
