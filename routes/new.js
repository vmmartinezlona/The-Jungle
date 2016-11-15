var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('new');
});

router.post('../products', function(req, res) {
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
