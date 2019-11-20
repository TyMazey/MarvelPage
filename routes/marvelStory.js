var express = require('express');
var router = express.Router();
var marvelStoryController = require('../controllers/marvelStoryController');

/* GET home page. */
router.get('/', marvelStoryController.show);

module.exports = router;
