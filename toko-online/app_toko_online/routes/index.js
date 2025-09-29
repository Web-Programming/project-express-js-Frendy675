// var express = require('express');
// var router = express.Router();
// var mainController = require("../controllers/main");


// /* GET home page. */
// router.get('/', mainController.index);
// // selesaikan fungsi route pencarian, pisahkan dengan controller

// module.exports = router;


var express = require('express');
var router = express.Router();
var mainController = require("../controllers/main");
var searchController = require("../controllers/search"); // tambahkan ini

/* GET home page. */
router.get('/', mainController.index);

/* GET search result */
router.get('/search', searchController.search); // tambahkan ini

module.exports = router;
