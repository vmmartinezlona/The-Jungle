var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var animalList = ['cat', 'doc', 'bird', 'bear'];
  res.render('products', {
    title: 'PRODUCTS',
    animals: animalList
  });
});

module.exports = router;
