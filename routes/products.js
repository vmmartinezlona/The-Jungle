var express = require('express');
var router = express.Router();
var Product = require('../models/Product.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	/*
  var animalList = ['cat', 'doc', 'bird', 'bear'];
  res.render('products', {
    title: 'PRODUCTS',
    animals: animalList
  });
  */

  Product.find(function(error, productList) {

  	if(error) {
  		res.send(500, error.message);
  	}

  	res.render('products', {
  		title: 'PRODUCTS',
  		products: productList
  	});


  });
});

router.post('/', function(req, res) {
	console.log(req.body);

	var product = new Product({
		name: req.body.name,
		photo: req.body.photo,
		stock: req.body.stock
	});


	product.save(function(error, product) {
		if(error) {
			res.send(500, error.message);
		}

		Product.find(function(error, productList) {

			if(error) {
				res.send(500, error.message);
			}

			res.render('products', {
				title: 'PRODUCTS',
				products: productList
			});
		});
	});

});

module.exports = router;
