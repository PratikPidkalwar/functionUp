const express = require('express');

const model = require('../Models/index.js');

const router = express.Router();

router.get('/', function(req, res) {
    res.send({"message":"Yo!"})
});

module.exports = router;